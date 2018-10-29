import { useState, useEffect, useRef } from "react";

export const useInterval = interval => {
  const [time, setTime] = useState(0);
  const interRef = useRef();

  const resetTime = () => setTime(0);

  const startInterval = () => {
    interRef.current = setInterval(
      () => setTime(prevTime => prevTime + 1),
      interval
    );
  };
  const stopInterval = () => {
    clearInterval(interRef.current);
  };

  return [time, resetTime, startInterval, stopInterval];
};
