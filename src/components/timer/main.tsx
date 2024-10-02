import { AnimatePresence, motion, Variants } from "framer-motion";
import React, { useEffect, useState } from "react";
import Display from "./display";

type CountdownProps = {
  initialSeconds: number;
};

const varP: Variants = {
  init: {
    opacity: 0,
    y: 10,
  },
  anim: {
    opacity: 1,
    y: 0,
  },
};

const Countdown: React.FC<CountdownProps> = ({ initialSeconds }) => {
  const [timeLeft, setTimeLeft] = useState(initialSeconds);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timerId = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    return { hours, minutes, seconds: remainingSeconds };
  };

  const { hours, minutes, seconds } = formatTime(timeLeft);
  const hrs = hours.toString().padStart(2, "0");
  const mins = minutes.toString().padStart(2, "0");
  const secs = seconds.toString().padStart(2, "0");

  // console.log(hrs, mins, secs);

  return (
    <div>
      <h1>Countdown</h1>
      <div className="p-[1rem] text-[2rem] lg:text-[8rem] flex justify-center">
        <Display time={hrs} id="=hrs" />:
        <Display time={mins} id="=mins" />:
        <Display time={secs} id="=secs" />
      </div>
    </div>
  );
};

export default Countdown;
