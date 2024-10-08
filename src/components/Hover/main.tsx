import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ChangeEvent, MouseEvent, useState } from "react";
import Spring from "./Spring";

function calculateValue(width: number, clientX: number, OFFSET = 90) {
  // Determine the midpoint of the width
  const midpoint = width / 2;

  // Check if clientX is greater than the midpoint (right half)
  if (clientX > midpoint) {
    const factor = (clientX - midpoint) / (width / 2);
    return Math.min(OFFSET, factor * OFFSET);
  } else {
    // clientX is less than or equal to the midpoint (left half)
    const factor = (midpoint - clientX) / (width / 2);
    return Math.max(-OFFSET, -factor * OFFSET);
  }
}

// Example usage: // Should return between -50 and 0

const Main = () => {
  const y = useMotionValue(200);
  const x = useMotionValue(250);
  const dy = useSpring(y, { stiffness: 1000, damping: 10 });
  const dx = useSpring(x, { stiffness: 1000, damping: 10 });
  const rotateY = useTransform(dy, [0, 500], [-45, 45]);
  const rotateX = useTransform(dx, [0, 500], [45, -45]);

  const mouseOverFunc = (evt: MouseEvent<HTMLDivElement>) => {
    const pts = evt.currentTarget as HTMLDivElement;
    const rect = pts.getBoundingClientRect();

    x.set(evt.clientY - rect.top);
    y.set(evt.clientX - rect.left);

    // rotateY.set(
    //   calculateValue(Math.floor(rect.left + rect.right), evt.clientX, 70)
    // );

    // const d = Number(
    //   calculateValue(Math.floor(rect.top + rect.bottom), evt.clientY)
    // );
    // rotateX.set(d >= 0 ? -d : Math.abs(d));
  };

  return (
    <>
      <div className="h-[100vh] grid place-items-center">
        <motion.div
          onMouseMove={mouseOverFunc}
          onMouseLeave={() => {
            console.log("ddd");
            y.set(200);
            x.set(200);
          }}
          className="h-[500px] [perspective:400px] w-[500px] border-[2px] grid place-items-center border-black"
        >
          <motion.div
            style={{
              rotateX,
              rotateY,
            }}
            transition={{ type: "spring" }}
            className="h-[150px] w-[150px]  bg-lime-400 rounded-[20px]"
          ></motion.div>
        </motion.div>
      </div>
      <Spring />
    </>
  );
};
export default Main;
