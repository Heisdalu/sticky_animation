import {
  motion,
  useMotionTemplate,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import useMeasure from "react-use-measure";

const HorizontalScrollSection = () => {
  const ref = useRef(null);
  const [mref, { width }] = useMeasure({
    debounce: 10,
    scroll: false,
  });
  const { scrollYProgress } = useScroll({
    // container: ref,
    target: ref,
    offset: ["start start", "end end"],
  }); // Track vertical scroll progress

  const spring = useSpring(scrollYProgress, {
    stiffness: 77.8,
    damping: 15.3,
    mass: 1,
  });
  // Calculate the horizontal shift based on scroll position
  const x = useTransform(spring, [0, 1], [0, -(width + 16.7) * 4]);

  //   useMotionValueEvent(x, "change", (l) => {
  //     console.log(l, "scrolly");
  //   });

  //   console.log(width, (width + 17) * 4);

  // Adjust values based on desired behavior

  return (
    <section className="">
      <div className="bg-[#3fa] h-[100vh] grid place-items-center">
        scroll Down
      </div>{" "}
      <div
        ref={ref}
        className="overflow-x-clip h-[500vh] border-[0px] border-red-400"
      >
        <motion.div
          transition={{
            type: "spring",
            stiffness: 77.8,
            damping: 10,
            mass: 1,
          }}
          className="will-change-transform flex sticky top-[0]  space-x-[16px] flex-shrink-0 "
          style={{ x, width: `${width * 5 + 16.5 * 4}px` }} // Move the container horizontally as the user scrolls
        >
          <div ref={mref} className="slide">
            Slide 1
          </div>
          <div className="slide ">Slide 2</div>
          <div className="slide ">Slide 3</div>
          <div className="slide ">Slide 4</div>
          <div className="slide ">Slide 5</div>
          {/* Add more slides if needed */}
        </motion.div>
      </div>
      <div className="bg-[#3f1] h-[100vh] flex justify-center items-center">
        scroll
      </div>{" "}
    </section>
  );
};

export default HorizontalScrollSection;
