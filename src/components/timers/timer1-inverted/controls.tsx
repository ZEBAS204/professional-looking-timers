import { useTimerContext } from 'components/timers/time_context'
import Button from 'components/atoms/button'

export const Controls = () => {
	const { isRunning, toggleRunning, sendReset } = useTimerContext()

	return (
		<div className="flex flex-row gap-2">
			<Button onClick={toggleRunning}>{isRunning ? 'Stop' : 'Play'}</Button>
			<Button onClick={sendReset}>Reset</Button>
		</div>
	)
}
