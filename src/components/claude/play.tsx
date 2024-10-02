import { AnimatePresence, motion, Variants } from "framer-motion";
import { useState } from "react";
let arr = [1, 2, 3, 4, 5, 6, 7];

const Play = () => {
  const [id, setid] = useState<string | null>(null);

  const v: Variants = {
    s: {
      opacity: 1,
    },
    h: {
      opacity: 0,
      backgroundColor: "#000",
    },
  };
  return (
    <div className="rounded-[10px] h-[90vh] bg-blue-500 ">
      <div className="m-[2rem] p-[2rem]">
        <motion.div className="grid [grid-template-columns:1fr_2fr_1fr] [grid-auto-rows:100px] [grid-gap:2rem] auto-cols-auto okay ">
          {arr.map((el) => (
            <motion.div
              variants={v}
              style={{ borderRadius: "10px", backgroundColor: "#fff" }}
              onClick={() => setid(`${el}`)}
              layoutId={`${el}`}
              animate={el === Number(id) ? "h" : "s"}
              className="bg-white rounded-[10px] flex items-center justify-center border-[0px] border-black"
              key={el}
            >
              {el}
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence mode="sync">
        {id && (
          <>
            <motion.div
              onClick={(e) => {
                console.log("tab");
                setid(null);
              }}
              layoutId="lol"
              animate={{ backgroundColor: "#000000a0" }}
              exit={{
                opacity: 0,
              }}
              className="h-[100%] top-[0] w-[100%] fixed grid place-items-center "
            >
              <motion.div
                onClick={(e) => {
                  e.stopPropagation();
                }}
                layoutId={id}
                style={{ borderRadius: "20px" }}
                className="z-[10] bg-white rounded-[20px] flex items-center justify-center h-[100px] w-[200px] fixed border-[0px] lg:h-[300px] lg:w-[500px] border-black"
              >
                <motion.div
                  className="space-y-[1rem] flex flex-col  justify-center items-center"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                  }}
                >
                  <div>Do you wanna delete {id}</div>
                  <div className="flex space-x-[1rem]">
                    <button
                      onClick={(e) => {
                        console.log("open");
                        console.log(arr.filter((el) => Number(id) !== el));
                        arr = arr.filter((el) => Number(id) !== el);
                        setid(null);
                      }}
                      className="rounded-[10px] border-[1px] border-black py-[0.5rem] px-[1rem]"
                    >
                      yes
                    </button>
                    <button
                      onClick={(e) => {
                        console.log("close");
                        setid(null);
                        e.stopPropagation();
                      }}
                      className="rounded-[10px] border-[1px] border-black py-[0.5rem] px-[1rem]"
                    >
                      no
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
export default Play;
