import { useEffect, useRef } from 'react'

/*
 * react-use useInterval Hook
 * https://github.com/streamich/react-use
 */

const useInterval = (callback: Function, delay?: number | null) => {
	const savedCallback = useRef<Function>(() => {})

	useEffect(() => {
		savedCallback.current = callback
	})

	useEffect(() => {
		if (delay !== null) {
			const interval = setInterval(() => savedCallback.current(), delay || 0)
			return () => clearInterval(interval)
		}

		return undefined
	}, [delay])
}

export default useInterval
