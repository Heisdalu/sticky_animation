import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const list = [
  { name: "Marketing", color: "#FF6B6B", id: 0 }, // Vibrant coral
  { name: "Design", color: "#6C5CE7", id: 1 }, // Soothing purple
  { name: "Cryptocurrency", color: "#FFD700", id: 2 }, // Gold
  { name: "Sales", color: "#55EFC4", id: 3 }, // Mint green
  { name: "Stakeholder", color: "#FF9F43", id: 4 }, // Warm orange
  { name: "IT Specialist", color: "#0984E3", id: 5 }, // Calming blue
  { name: "Project Manager", color: "#636E72", id: 6 }, // Neutral slate gray
  { name: "Content creator", color: "#FAB1A0", id: 7 }, // Soft pink
];

interface ObjType {
  name: string;
  color: string;
  id: number;
}

const Main = () => {
  const [userList, setUserList] = useState(list);
  const [selectedList, setSelectedList] = useState<ObjType[]>([]);

  const selectedFunc = ({ color, name, id }: ObjType) => {
    setUserList((prev) => [...prev].filter((item) => item.name !== name));
    setSelectedList((prev) => [...prev, { color, name, id }]);
  };

  const removeFunc = ({ color, name, id }: ObjType) => {
    setSelectedList((prev) => [...prev].filter((item) => item.name !== name));
    setUserList((prev) => {
      const arr = [...prev];
      arr.splice(id, 0, { color, name, id });
      return arr;
    });
  };

  return (
    <div className="h-[100vh] grid place-items-center">
      <div className="w-[300px]">
        <AnimatePresence mode="popLayout">
          {selectedList.length > 0 ? (
            <motion.div
              layout
              exit={{
                opacity: 0,
              }}
              className="relative z-[10] p-[3px] py-[5px] border-[0px] flex gap-[0.5rem] flex-wrap"
            >
              <motion.button
                layout
                onClick={() => {
                  setSelectedList([]);
                  setUserList(list);
                }}
                initial={{
                  opacity: 0,
                  y: -10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  y: -5,
                  opacity: 0,
                }}
                className="flex items-center justify-center space-x-[3px] border-[0px] px-[3px]"
              >
                <span className="text-[0.6rem]">Clear all</span>
                <span className="text-[10px]">{"×"}</span>
              </motion.button>
              {selectedList.map((el) => (
                <motion.button
                  layoutId={`btn-${el.name}`}
                  onClick={() => removeFunc(el)}
                  style={{
                    backgroundColor: `${el.color}`,
                  }}
                  key={el.id}
                  className={`relative z-[10] text-[0.65rem] p-[5px] py-[3px] rounded-[7px]`}
                >
                  {el.name}
                </motion.button>
              ))}
            </motion.div>
          ) : null}
        </AnimatePresence>
        <motion.div
          layout
          className="border-[1px] border-gray-300 p-[1rem] space-y-[0.5rem] rounded-[10px]"
        >
          <motion.h1 layout className="text-[1.1rem] font-semibold">
            Search Filters
          </motion.h1>
          <motion.div
            layout
            className="rounded border-[1px] border-gray-200 overflow-hidden"
          >
            <input
              type="text"
              placeholder="Search"
              className="w-[100%] placeholder:text-[0.7rem] placeholder:px-[10px]"
            />
          </motion.div>
          <div className="flex gap-[0.5rem] flex-wrap">
            {userList.map((el) => (
              <motion.button
                onClick={() => selectedFunc({ ...el })}
                layoutId={`btn-${el.name}`}
                style={{
                  backgroundColor: `${el.color}`,
                }}
                key={el.name}
                className={`flex items-center text-[0.65rem] px-[5px] h-[21px] rounded-[7px]`}
              >
                {el.name}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
export default Main;
