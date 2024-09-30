import { motion, useCycle } from "framer-motion";
import { useEffect, useState } from "react";

const itemsA = [1, 2, 3, 4];
const itemsB = [3, 1, 4, 2];
const itemsC = [4, 3, 2, 1];
const itemsD = [2, 4, 1, 3];

const colors = ["#f44", "#3f0fff", "#fb0", "#0ef"];

function Layout() {
  const [p, setP] = useState(false);

  const [items, setItems] = useCycle(itemsA, itemsB, itemsC, itemsD);

  const [no, setNo] = useState(0);

  //   console.log(no);

  useEffect(() => {
    let timer;
    // timer = setTimeout(() => setItems(), 1000);

    // return () => clearTimeout(timer);
  }, [items]);

  //   console.log(items);

  return (
    <div className="h-[100] grid place-items-center border-[5px]">
      <div className="space-y-[2rem]">
        <motion.div
          style={{
            justifyContent: p ? "flex-end" : "flex-start",
          }}
          onClick={() => setP((l) => !l)}
          layout
          className="bg-blue-400 h-[100px] flex  w-[200px] rounded-[50px] p-[1rem]"
        >
          <motion.div
            layout
            transition={{
              duration: 0.5,
              type: "spring",
            }}
            className="h-[70px] w-[70px] bg-white rounded-[50%]"
          ></motion.div>
        </motion.div>

        <motion.div
          layout
          className="grid [grid-gap:0.5rem]  [grid-template-columns:auto_auto]"
        >
          {items.map((el) => (
            <motion.div
              layout
              style={{ backgroundColor: colors[el - 1] }}
              className="text-center p-[2rem]"
              key={el}
            >
              {el}
            </motion.div>
          ))}
        </motion.div>
        <motion.div layout className="flex space-x-[2rem]">
          {colors.map((el, i) => (
            <div
              key={el}
              onMouseEnter={() => setNo(i)}
              className="relative rounded-[10px] border-[1px] py-[0.5rem] grid place-items-center w-[70px]"
            >
              {no === i && (
                <motion.div
                  layoutId="under"
                  className="z-[1] rounded-[10px] absolute top-[0] left-[0] h-[100%] w-[100%] bg-gray-200"
                ></motion.div>
              )}
              <div className="z-[2]">{el}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
export default Layout;
