"use client";
import type { FunctionComponent } from "react";
import { useEffect, useState } from "react";

type GameTimerProps = {
  countdown: number;
  onCountdownEnd: () => void;
};

export const GameTimer: FunctionComponent<GameTimerProps> = ({
  countdown,
  onCountdownEnd,
}) => {
  const [counter, setCounter] = useState(countdown);

  useEffect(() => {
    if (counter === 0) onCountdownEnd();

    const interval = setInterval(() => {
      setCounter((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [counter, onCountdownEnd]);

  return (
    <h2 className="absolute top-1/2 left-1/2 translate-x-1/2 translate-y-1/2 animate-countdown">
      {counter}
    </h2>
  );
};
