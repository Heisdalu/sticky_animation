import { motion } from "framer-motion";
import { useState } from "react";
import Other from "./Other";

const url = [
  { name: "Teal", hex: "#008080" },
  { name: "Coral", hex: "#FF7F50" },
  { name: "Blue", hex: "#4169E1" },
  { name: "Gold", hex: "#DAA520" },
  { name: "Crimson", hex: "#DC143C" },
  { name: "Green", hex: "#228B22" },
];

const Index = () => {
  const [state, setState] = useState<string[]>([]);

  return (
    <>
      <motion.div layout className="h-[100vh] grid center">
        <div className="space-y-[4rem] w-[100%] flex flex-col">
          <motion.div
            layout
            className="mx-auto overflow-hidden flex space-x-[1rem]"
          >
            {url.map((el, i) => (
              <motion.div
                key={el.hex}
                style={{
                  zIndex: i + 1,
                }}
                layout="position"
                onMouseEnter={() => {
                  setState([el.hex]);
                }}
                onMouseLeave={() => {
                  setState([]);
                }}
                className="cursor-pointer relative mainDiv p-[0.5rem] overflow-hidden hover:bg-gray-100 rounded-[10px]  flex items-center"
              >
                <div
                  style={{
                    backgroundColor: el.hex,
                  }}
                  className={`h-[20px] rounded-full w-[20px]`}
                ></div>
                {
                  <motion.div
                    initial={{
                      width: 0,
                    }}
                    animate={
                      state.includes(el.hex)
                        ? {
                            width: "auto",
                            transition: {
                              duration: 0.3,
                              ease: "easeInOut",
                            },
                          }
                        : {
                            width: 0,
                            transition: {
                              duration: 0.3,
                              ease: "easeInOut",
                            },
                          }
                    }
                    key={el.name}
                    className="text-[0.8rem] overflow-hidden"
                  >
                    <div className="pl-[0.5rem]">{el.name}</div>
                  </motion.div>
                }
              </motion.div>
            ))}
          </motion.div>
          <Other url={url} />
        </div>
      </motion.div>
    </>
  );
};
export default Index;
