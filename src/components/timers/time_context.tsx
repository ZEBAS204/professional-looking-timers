import {
	createContext,
	useState,
	useContext,
	useMemo,
	useCallback,
} from 'react'

import { TimeManager } from './time_manager'

// Time defaults
const DEF_TIME = 30 // 30sec
const MIN_TIME = 0
const MAX_TIME = 359999 // 99h 59m 59s

/**
 * Checks if the passed time is valid for this component
 * @param {Number} time
 * @return {Boolean}
 */
const isTimeValid = (time: number): boolean => {
	return time <= MAX_TIME && time > MIN_TIME
}

export interface TimerContext {
	time: number
	changeTime: (e: number) => void
	isRunning: boolean
	toggleRunning: () => void
	reset: boolean
	sendReset: () => void
	stopTimer: () => void
}

// create context
const TimerContext = createContext<TimerContext | null>(null)

const TimerContextProvider = ({ children }) => {
	const [time, setTime] = useState(DEF_TIME)
	const [isRunning, setRunning] = useState(false)
	const [reset, setReset] = useState(false)

	const stopTimer = useCallback(
		() => isRunning && setRunning(false),
		[isRunning]
	)

	// memoize the full context value
	const contextValue = useMemo<TimerContext>(
		() => ({
			time,
			changeTime: (e) => isTimeValid(e) && setTime(e),
			isRunning,
			toggleRunning: () => setRunning((e) => !e),
			reset,
			sendReset: () => setReset((e) => !e),
			stopTimer,
		}),
		[time, setTime, isRunning, setRunning, reset, setReset, stopTimer]
	)

	return (
		// the Provider gives access to the context to its children
		<TimerContext.Provider value={contextValue}>
			{children}
		</TimerContext.Provider>
	)
}

// context consumer hook
const useTimerContext = (): TimerContext => {
	// get the context
	const context = useContext(TimerContext)

	// if `undefined`, throw an error
	if (context === undefined) {
		throw new Error('useTimerContext was used outside of its Provider')
	}

	return context
}

const TimeWrapper = ({ children }) => (
	<TimerContextProvider>
		<TimeManager>{children}</TimeManager>
	</TimerContextProvider>
)

export { useTimerContext, TimeWrapper as TimerContext }
