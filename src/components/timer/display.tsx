import { AnimatePresence, motion, Variants } from "framer-motion";

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

const Display = ({ time, id }: { time: string; id: string }) => {
  return (
    <AnimatePresence mode="popLayout">
      <motion.span
        variants={varP}
        initial={"init"}
        animate={"anim"}
        exit={{
          opacity: 0,
        }}
        key={`${id}-0-${time[0]}`}
      >
        {time[0]}
      </motion.span>
      <motion.span
        variants={varP}
        initial={"init"}
        animate={"anim"}
        exit={{
          opacity: 0,
          y: -10,
          transition: {
            duration: 0.1,
          },
        }}
        key={`${id}-1-${time[1]}`}
      >
        {time[1]}
      </motion.span>
      {/* <div key={3}></div> */}
    </AnimatePresence>
  );
};
export default Display;
