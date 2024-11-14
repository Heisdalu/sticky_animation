import { MouseEvent, useState } from "react";
import {
  animate,
  AnimatePresence,
  motion,
  MotionConfig,
  useAnimate,
  Variants,
} from "framer-motion";

const Grid = () => {
  const [state, setState] = useState(false);
  const [imageSelected, setImageSelected] = useState<number[]>([]);
  const [scope, animate] = useAnimate();

  const d = {
    onClick(e: MouseEvent<HTMLDivElement>) {
      console.log(e.target);
    },
  };

  const obj: Variants = {};

  const clicked = (id: number) => {
    setImageSelected((item) => {
      if (item.includes(id)) {
        const result = [...item].filter((num) => num !== id);
        // console.log(item, res);
        return result;
      }

      return [...item, id];
    });
  };

  const removed = () => {
    if (imageSelected.length <= 0) return;

    setState(true);
  };

  console.log(imageSelected);

  return (
    <>
      {/* <span className="ml-[4rem] rotate-[-10deg] w-[50px] block">ajajjs</span> */}
      <div className="space-x-[1rem]">
        {" "}
        <button onClick={() => setState((l) => !l)}>chnage</button>
        <button onClick={removed}>select</button>
        <button
          onClick={() => {
            setImageSelected([]);
            setState(false);
          }}
        >
          reset
        </button>
      </div>
      <MotionConfig
        transition={{
          duration: 0.3,
          type: "spring",
          bounce: 0,
        }}
      >
        <div className="relative">
          <div
            ref={scope}
            className="h-[50vh] border-[1px] grid place-items-center"
          >
            <motion.div className={`relative grid grid-cols-2 [grid-gap:1rem]`}>
              <AnimatePresence>
                {state
                  ? null
                  : [1, 2, 3, 4].map((el) =>
                      !imageSelected.includes(el) && state ? null : (
                        <motion.div
                          key={`child-${el}`}
                          layoutId={`child-${el}`}
                          layout="position"
                          onClick={() => clicked(el)}
                          initial={{
                            opacity: 1,
                          }}
                          exit={{
                            opacity: 0,
                            // rotate: imageSelected.includes(el)
                            //   ? el % 2 === 0
                            //     ? "-10deg"
                            //     : "10deg"
                            //   : "0",
                            transition: {
                              duration: 0.2,
                            },
                          }}
                          className={`rounded-[10px] flex items-center justify-center w-[100px] h-[100px] bg-gray-300`}
                        >
                          <motion.div
                            style={{
                              fontSize: "16px",
                              fontWeight: "400",
                            }}
                            className={`${
                              imageSelected.includes(el)
                                ? "bg-blue-500"
                                : "remove"
                            } grid place-items-center rounded-[50%] h-[40px] w-[40px]`}
                          >
                            {el}
                          </motion.div>
                        </motion.div>
                      )
                    )}
              </AnimatePresence>
            </motion.div>
          </div>

          {state && (
            <motion.div className="absolute top-0 z-[10] left-0 h-[50vh] w-[100%]">
              <div className="relative h-[300px] w-[100%] flex justify-center items-center">
                <div className="absolute h-[200px] w-[200px]  flex items-center justify-center">
                  <div className="flex justify-center items-center">
                    {imageSelected.map((el, i) => (
                      <motion.div
                        style={{
                          fontSize: "16px",
                          fontWeight: "400",
                          rotate: i % 2 === 0 ? -10 : 10,
                        }}
                        key={`child-${el}`}
                        layoutId={`child-${el}`}
                        className="flex items-center justify-center h-[50px] w-[50px] absolute bg-gray-300 rounded-[10px]"
                      >
                        {el}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </MotionConfig>
    </>
  );
};
export default Grid;
