import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  PanInfo,
  useDragControls,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
  Variants,
} from "framer-motion";
import Play from "./Play";

const Main = () => {
  const [state, setState] = useState<number>(0);
  const x = useMotionValue(0);

  const setValue = () => {
    setState((prev) => prev + 1);
  };

  return (
    <div className="h-[100vh] grid place-items-center">
      <motion.div className="overflow-hidden relative w-[700px] h-[300px] border-[1px] border-black flex justify-center">
        <AnimatePresence initial={false}>
          <Play
            key={state + 1}
            state={state + 1}
            setValue={setValue}
            // color="#3fa"
          />
          <Play key={state} state={state} drag="x" setValue={setValue} />
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
export default Main;
