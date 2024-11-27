import { motion, motionValue } from "framer-motion";
import { useState } from "react";

interface Props {
  url: { name: string; hex: string }[];
}

const Other = ({ url }: Props) => {
  const [index, setIndex] = useState(url[0].hex);
  const [activeLink, setActiveLink] = useState(url[0].hex);
  const val = motionValue(url[0].hex);

  return (
    <div className="rounded-[10px] mx-auto px-[2rem] h-[60px] flex border-[1px]">
      <div className=" flex space-x-[1rem] ">
        {url.map((el) => (
          <div
            onMouseEnter={() => setIndex(el.hex)}
            className="flex relative justify-center items-center "
            key={el.name}
          >
            {el.hex === activeLink && (
              <motion.div
                layoutId="line"
                style={{
                  height: "2px",
                }}
                className=" h-[2px] absolute bottom-[0px] left-0 w-[100%] bg-black"
              ></motion.div>
            )}
            <div
              onClick={() => {
                setActiveLink(el.hex);
              }}
              className=" relative cursor-pointer flex items-center h-[35px] bg-red-5"
            >
              <div className="rounded-[5px] relative active:bg-gray-300  z-[3] px-[1rem] py-[0.4rem]">
                {el.name}
              </div>
              {el.hex === index && (
                <motion.div
                  layoutId="move"
                  animate={{
                    transition: {
                      ease: "easeInOut",
                    },
                  }}
                  className="absolute h-[100%] rounded-[5px] w-[100%] top-[0] left-0 bg-gray-200"
                ></motion.div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Other;
