import {
  motion,
  useMotionTemplate,
  useMotionValueEvent,
  useSpring,
} from "framer-motion";
import { useEffect, useState } from "react";

const data = [
  "GSAP (GreenSock Animation Platform): Powerful for creating highly responsive animations across devices with full control over timing and responsive behavior. This SVG creates a 100x100 square with a circle in the middle, and you can use it as a clip-path in CSS by embedding the SVG or referencing it externally.",
  "Framer Motion: A React library that makes it easy to create responsive animations with built-in hooks for view-based or interaction-triggered animations. In Framer Motion, you can combine spring animations on both x and y by creating spring-based motionValues for both axes.",
];

const Other2 = () => {
  const [size, setState] = useState(10);
  const xM = useSpring(-20, { stiffness: 100, damping: 17.7, mass: 1 });
  const yM = useSpring(-20, { stiffness: 100, damping: 17.7, mass: 1 });
  const x = useSpring(-20, { stiffness: 100, damping: 17.7, mass: 1 });
  const y = useSpring(-20, { stiffness: 100, damping: 17.7, mass: 1 });

  //   const size = useMotionTemplate`${scale}px`;
  const d = useMotionTemplate`${xM}px ${yM}px`;
  const hoverScale = useMotionTemplate`${xM}px ${yM}px`;

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const moveOut = (e: MouseEvent) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        xM.set(e.clientX - size / 2);
        yM.set(e.clientY - size / 2);
        x.set(e.pageX);
        y.set(e.clientY + window.scrollY);
        // console.log(x, y);
      }, 5);
    };

    const leave = () => {
      xM.set(0);
      yM.set(0);
      y.set(0);
      x.set(0);
    };
    window.addEventListener("mousemove", moveOut);
    window.addEventListener("mouseleave", leave);

    return () => {
      window.removeEventListener("mousemove", moveOut);
      window.removeEventListener("mouseleave", leave);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [size]);

  return (
    <>
      <motion.div
        style={{
          x,
          y,
        }}
        className="z-[2] absolute h-[10px] w-[10px] bg-black rounded-full"
      ></motion.div>
      <div className="text-[1.5rem] relative cursor- h-[100vh] border-[5px]">
        <motion.div
          style={{
            WebkitMaskPosition: d,
          }}
          animate={{
            WebkitMaskSize: `${size}px`,
            transition: {
              type: "spring",
              stiffness: 100,
              damping: 17.7,
              mass: 1,
            },
          }}
          className={`h-[100%] test absolute  w-[100%] flex justify-center items-center`}
        >
          <p
            onMouseEnter={() => {
              console.log("okay");
              setState(200);
            }}
            onMouseLeave={() => {
              console.log("leave");
              setState(0);
            }}
            className="w-[600px] text-white z-[10]"
          >
            GSAP (GreenSock Animation Platform): Powerful for creating highly
            responsive animations across devices with full control over timing
            and responsive behavior. This SVG creates a 100x100 square with a
            circle in the middle, and you can use it as a clip-path in CSS by
            embedding the SVG or referencing it externally.
          </p>
        </motion.div>
        <motion.div
          className={`h-[100%] w-[100%] flex justify-center items-center z-[6] `}
        >
          <p className="w-[600px] bg-white">
            Framer Motion: A React library that makes it easy to create
            responsive animations with built-in hooks for view-based or
            interaction-triggered animations. In Framer Motion, you can combine
            spring animations on both x and y by creating spring-based
            motionValues for both axes.
          </p>
        </motion.div>
      </div>
    </>
  );
};
export default Other2;
