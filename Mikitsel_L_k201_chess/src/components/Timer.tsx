import React, { FC, useEffect, useRef, useState } from "react";
import { Player } from "../models/Player";
import { Colors } from "../models/Colors";

interface TimerProps {
  currentPlayer: Player | null;
  restart: () => void;
}

const Timer: FC<TimerProps> = ({ currentPlayer, restart }) => {
  const [blackTime, setBlackTime] = useState(500);
  const [whiteTime, setWhiteTime] = useState(500);
  const timer = useRef<null | ReturnType<typeof setInterval>>(null);

  useEffect(() => {
    startTimer();
  }, [currentPlayer]);

  function startTimer() {
    if (timer.current) {
      clearInterval(timer.current);
    }
    const callback =
      currentPlayer?.color === Colors.WHITE
        ? decrementWhiteTimer
        : decrementBlackTimer;
    timer.current = setInterval(callback, 1000);
  }

  function decrementBlackTimer() {
    setBlackTime((prev) => prev - 1);
  }
  function decrementWhiteTimer() {
    setWhiteTime((prev) => prev - 1);
  }

  const handleRestart = () => {
    setWhiteTime(500);
    setBlackTime(500);
    restart();
  };

  return (
    <div>
      <div>
        <button className="restartBtn" onClick={handleRestart}>
          Почати знову
        </button>
      </div>
      <h2>Чорні- {blackTime}</h2>
      <h2>Білі - {whiteTime}</h2>
    </div>
  );
};

export default Timer;
