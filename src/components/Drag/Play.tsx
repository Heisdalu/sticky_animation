import { useState } from "react";
import {
  motion,
  PanInfo,
  useDragControls,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
  Variants,
} from "framer-motion";

const first: Variants = {
  show: (value) => ({
    x: value,
    opacity: 0,
    scale: 0.5,
  }),
  animate: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, type: "spring", stiffness: 300, damping: 20 },
  },
  hidden: {
    y: 30,
    opacity: 0.5,
  },
};

const back: Variants = {
  hidden: {
    y: 130,
    scale: 0,
    opacity: 0,
  },
  animate: { scale: 0.75, y: 30, opacity: 0.5 },
};

const Play = ({
  state,
  drag,
  setValue,
  color = "#3ad",
}: {
  state: number;
  drag?: "x";
  setValue: () => void;
  color?: string;
}) => {
  const [start, setStart] = useState(0);
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-250, 0, 250], [-60, 0, 60]);
  const scale = useTransform(x, [-250, 0, 250], [0.3, 1, 0.3]);

  const dragEnd = (_: any, info: PanInfo) => {
    console.log(info.offset.x);
    if (info.offset.x > 200) {
      setStart(250);
      setValue();
    }
    if (info.offset.x < -200) {
      setStart(-250);
      setValue();
    }
  };

  return (
    <motion.div
      style={{
        x,
        rotate,
        backgroundColor: color,
        scale,
      }}
      drag={drag}
      onDragEnd={dragEnd}
      variants={drag ? first : back}
      initial="hidden"
      animate="animate"
      exit="show"
      dragElastic={0.2}
      //   layout
      transition={{
        duration: 0.3,
      }}
      custom={start}
      dragConstraints={{
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
      }}
      className="absolute flex justify-center items-center  top-[20%] rounded-[20px] h-[150px] w-[150px]"
    >
      {state}
    </motion.div>
  );
};
export default Play;
