import { PlayIcon, StopIcon, PauseIcon } from "@heroicons/react/24/solid";

import { useTimerContext } from "components/timers/time_context";
import Button from "components/atoms/button";

export const Controls = () => {
  const { isRunning, toggleRunning, sendReset } = useTimerContext();

  return (
    <div className="relative flex flex-row gap-2">
      <Button onClick={toggleRunning}>
        {isRunning ? (
          <PauseIcon className="h-6 w-6" />
        ) : (
          <PlayIcon className="h-6 w-6" />
        )}
      </Button>
      <Button onClick={sendReset}>
        <StopIcon className="h-6 w-6" />
      </Button>
    </div>
  );
};
