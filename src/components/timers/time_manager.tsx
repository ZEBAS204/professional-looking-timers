import {
	useState,
	useEffect,
	cloneElement,
	useMemo,
	Children,
	ReactNode,
	isValidElement,
} from 'react'

import useInterval from 'hooks/useInterval'
import { useTimerContext } from './time_context'

/** Default fallback of the remaining time if not time is provided (30sec) */
const defaultTime = 30

/**
 * Converts the number to a string and add a leading zero
 * @param num Number to convert
 * @returns Formated number
 * @example padWithZero(3) // returns '03'
 */
const padWithZero = (num = 0) => String(num).padStart(2, '0')

/**
 * If the number is not zero, returns number it's type as strings
 * @param {number} num
 * @param {string|'h'|'m'|'s'} type Time type
 * @returns {string}
 * @example ifNotZero(3, 's') // returns '3s'
 */
const ifNotZero = (num, type: string) => (num ? num + type : '')

export type TimerProps = {
	parentRunning: boolean
	totalTime: number
	remainingTime: number
	remainingtimeToDisplay: string
	totalTimeToDisplay: string
	remainingtimeToDisplayTrim: string
	hours: number
	minutes: number
	seconds: number
	hoursPad: string
	minutesPad: string
	secondsPad: string
}

export const TimeManager = ({ children }) => {
	const { time, isRunning, reset } = useTimerContext()

	const [totalTime, setTotalTime] = useState(time || defaultTime)
	const [secondsRemaining, setSecondsRemaining] = useState(time || defaultTime)

	const secondsToDisplay = secondsRemaining % 60
	const minutesRemaining = (secondsRemaining - secondsToDisplay) / 60
	const minutesToDisplay = minutesRemaining % 60
	const hoursToDisplay = (minutesRemaining - minutesToDisplay) / 60

	//* Allows to return memoized values of the total time
	//* without having to deal with extra arguments
	const _ = useMemo(
		() => ({
			hours: hoursToDisplay,
			min: minutesToDisplay,
			sec: secondsToDisplay,
		}),
		[totalTime]
	)

	const remainingtimeToDisplay = `${padWithZero(hoursToDisplay)}:${padWithZero(
		minutesToDisplay
	)}:${padWithZero(secondsToDisplay)}`

	const remainingtimeToDisplayTrim = `${ifNotZero(
		hoursToDisplay,
		':'
	)}${ifNotZero(minutesToDisplay, ':')}${padWithZero(secondsToDisplay)}`

	const totalTimeToDisplay = `Total ${ifNotZero(_.hours, 'h')} ${ifNotZero(
		_.min,
		'm'
	)} ${ifNotZero(_.sec, 's')}`

	// Update total time with context
	useEffect(() => {
		setTotalTime(time)
		setSecondsRemaining(time)
	}, [time])

	const [parentRunning, setParentRunning] = useState(isRunning)
	useEffect(() => setParentRunning(() => isRunning), [isRunning])

	// Allow parent to reset timer
	const resetTimer = () => setSecondsRemaining(totalTime)
	useEffect(() => resetTimer(), [reset])

	useInterval(
		() => {
			if (parentRunning && secondsRemaining > 0)
				setSecondsRemaining((e: number) => e - 1)
			else {
				resetTimer()
			}
		},
		// passing null stops the interval
		parentRunning ? 1000 : null
	)

	if (!children) return <></>

	return Children.map<ReactNode, ReactNode>(children, (child) => {
		if (isValidElement(child)) {
			return cloneElement(child, {
				parentRunning,
				totalTime,
				remainingTime: secondsRemaining,
				remainingtimeToDisplay,
				remainingtimeToDisplayTrim,
				totalTimeToDisplay,
				hours: hoursToDisplay,
				minutes: minutesToDisplay,
				seconds: secondsToDisplay,
				hoursPad: padWithZero(hoursToDisplay),
				minutesPad: padWithZero(minutesToDisplay),
				secondsPad: padWithZero(secondsToDisplay),
			})
		}
	})
}
