import {
  useMotionValue,
  motion,
  useSpring,
  useAnimate,
  useTransform,
} from "framer-motion";
import { MouseEvent, useEffect } from "react";
import useMeasure from "react-use-measure";

function transformToPercentage(value, minInput = 100, maxInput = 300) {
  // Clamp the value between min and max input
  const clampedValue = Math.min(Math.max(value, minInput), maxInput);

  // Calculate the percentage
  const percentage = ((clampedValue - minInput) / (maxInput - minInput)) * 100;

  // Round to 2 decimal places
  return Math.round(percentage * 100) / 100;
}

const data = [
  "GSAP (GreenSock Animation Platform): Powerful for creating highly responsive animations across devices with full control over timing and responsive behavior. This SVG creates a 100x100 square with a circle in the middle, and you can use it as a clip-path in CSS by embedding the SVG or referencing it externally.",
  "Framer Motion: A React library that makes it easy to create responsive animations with built-in hooks for view-based or interaction-triggered animations. In Framer Motion, you can combine spring animations on both x and y by creating spring-based motionValues for both axes.",
];

const Other = () => {
  const x = useSpring(0, { stiffness: 100, damping: 17.7, mass: 1 });
  const y = useSpring(0, { stiffness: 100, damping: 17.7, mass: 1 });
  const [scope, animate] = useAnimate();
  const [lref, { top, bottom, left, right }] = useMeasure();

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const moveOut = (e: MouseEvent) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        x.set(e.clientX);
        y.set(e.clientY);
        // console.log(x, y);
      }, 5);
    };

    const leave = () => {
      console.log("okay");

      x.set(0);
      y.set(0);
    };
    window.addEventListener("mousemove", moveOut);
    window.addEventListener("mouseleave", leave);

    return () => {
      window.removeEventListener("mouseover", moveOut);
      window.removeEventListener("mouseleave", leave);
    };
  });

  const animateFunc = (e: MouseEvent<HTMLDivElement>) => {
    // console.log(e);

    animate(
      ".mask div:nth-child(2)",
      {
        clipPath: `circle(20% at ${transformToPercentage(
          e.clientX,
          left,
          right
        )}% ${transformToPercentage(e.clientY, top, bottom)}%)`,
      },
      {
        type: "spring",
        stiffness: 100,
        damping: 17.7,
        mass: 1,
      }
    );
  };
  return (
    <div ref={scope} className="border-[3px]">
      <motion.div
        style={{
          x,
          y,
        }}
        initial={{ x: 0, y: 0 }}
        className="fixed top-[0] left-[0] h-[10px] w-[10px] rounded-[50%] bg-orange-500"
      ></motion.div>
      <div className="h-[100vh] flex justify-center">
        <div
          onMouseMove={animateFunc}
          ref={lref}
          className="relative text-[2rem] w-[550px] h-[500px] border-[5px] mask "
        >
          <h1 className="w-full h-full">
            {data.map((el, i) => (
              <motion.div
                style={{
                  clipPath: i === 1 ? "circle(0% at 0% 0%)" : "true",
                  backgroundColor: i === 1 ? "#3fa" : "#fff",
                }}
                key={i}
                className="bg-white absolute top-[0] h-full w-full"
              >
                {el}
              </motion.div>
            ))}
          </h1>
        </div>
      </div>
    </div>
  );
};
export default Other;
