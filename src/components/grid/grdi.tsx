import { MouseEvent, useState } from "react";
import { animate, motion, Variants } from "framer-motion";

const Grid = () => {
  const [state, setState] = useState(true);

  const d = {
    onClick(e: MouseEvent<HTMLDivElement>) {
      console.log(e.target);
    },
  };

  const obj: Variants = {
    int: {
      left: 0,
      right: 0,
      y: 0,
      x: 0,
    },
    ani: {
      left: "50%",
      top: "50%",
      x: "-50%",
      y: "-50%",
    },
  };

  return (
    <>
      <button onClick={() => setState((l) => !l)}>chnage</button>
      <div className="h-[50vh] border-[1px] grid place-items-center">
        <motion.div
          className={`${
            state ? "grid" : "block"
          } relative grid-cols-2 [grid-gap:1rem]`}
        >
          {[1, 2, 3, 4].map((el) => (
            <motion.div
              key={el}
              {...(el === 1 ? d : {})}
              variants={obj}
              initial={"int"}
              animate={state ? "init" : "ani"}
              className={`${
                !state && "absolute "
              } rounded-[10px] flex items-center justify-center w-[100px] h-[100px] bg-gray-300`}
            >
              {el}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};
export default Grid;
