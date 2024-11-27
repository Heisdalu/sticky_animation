import {
  AnimatePresence,
  motion,
  MotionConfig,
  useAnimate,
} from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const imgPath = ["imag1.png", "img2.png", "img3.png", "ing4.png"];

const Stacked = () => {
  const [selectedImage, setSelectedImage] = useState<string[]>([]);
  const [imageShow, setImageShow] = useState(false);
  const [scope, animate] = useAnimate();

  const clickedFunc = (id: string) => {
    setSelectedImage((prev) =>
      [...prev].includes(id)
        ? [...prev].filter((el) => el !== id)
        : [...prev, id]
    );
  };

  const hovered = () => {
    animate([
      [".small_image1", { rotate: -20, y: -10, x: -15 }, { duration: 0.2 }],
      [
        ".small_image2",
        { rotate: 20, y: -10, x: 15 },
        { duration: 0.2, at: "<" },
      ],
      [
        ".small_image3",
        {
          y: -30,
          rotate: 0,
        },
        { duration: 0.2, at: "<" },
      ],
    ]);
  };
  const leaving = () => {
    animate([
      [".small_image1", { rotate: 5, y: 0, x: 0 }, { duration: 0.3 }],
      [".small_image2", { y: 0, x: 0, rotate: 10 }, { duration: 0.3, at: "<" }],
      [
        ".small_image3",
        {
          y: 0,
          rotate: 15,
        },
        { duration: 0.3, at: "<" },
      ],
    ]);
  };

  return (
    <div className="h-[100vh] grid place-items-center">
      <div className="grid place-items-center rounded-[10px] h-[400px] w-[500px] border-[1px] border-gray-300">
        <MotionConfig
          transition={{
            duration: 0.3,
            ease: "circInOut",
          }}
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {imageShow ? (
              <div
                key={"first"}
                className="h-[100%] w-[100%] grid place-items-center"
                onClick={() => {
                  setImageShow(false);
                  setSelectedImage([]);
                }}
              >
                <div
                  ref={scope}
                  className="relative h-[70px] w-[70px] [perspective:1000px]"
                  onMouseEnter={hovered}
                  onMouseLeave={leaving}
                >
                  {selectedImage.map((el, i) => (
                    <motion.div
                      key={el}
                      layoutId={`${el}`}
                      initial={{
                        rotate: i * 5,
                      }}
                      style={{
                        zIndex: imgPath.length - i,
                        y: 0,
                        x: 0,
                      }}
                      className={`cursor-pointer overflow-hidden small_image${i} rounded-[10px] overflow-hidden absolute h-[100%] w-[100%] top-0`}
                    >
                      <Image
                        style={{
                          zIndex: imgPath.length - i,
                        }}
                        alt=""
                        className="rounded-[10px]"
                        height={70}
                        width={70}
                        src={`/${el}`}
                        priority
                      />
                    </motion.div>
                  ))}
                  <motion.div
                    key={"dope_apes"}
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: 1,
                    }}
                    exit={{
                      opacity: 0,
                      transition: {
                        duration: 0.1,
                      },
                    }}
                    className="text-[0.8rem] text-center absolute left-[-15px] top-[calc(100%+7px)] w-[100px] border-[0px]"
                  >
                    {selectedImage.length} Dope Apes
                  </motion.div>
                </div>
              </div>
            ) : (
              <div className="w-[200px]" key={"second"}>
                <div>
                  <motion.div
                    key={"images_headline"}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{
                      opacity: 0,
                      transition: {
                        duration: 0.1,
                      },
                    }}
                    className="flex items-center font-semibold"
                  >
                    <div>NFTS</div>
                    <AnimatePresence mode="popLayout" initial={false}>
                      <motion.span
                        key={`count_${selectedImage.length}`}
                        exit={{
                          opacity: 0,
                          y: -10,
                          transition: {
                            duration: 0.1,
                          },
                        }}
                        initial={{
                          y: 10,
                          opacity: 0,
                        }}
                        animate={{
                          y: 0,
                          opacity: 1,
                          transition: {
                            duration: 0.2,
                          },
                        }}
                        className="block ml-auto"
                      >
                        {selectedImage.length}
                      </motion.span>
                    </AnimatePresence>
                  </motion.div>

                  <div className="py-[1.5rem] grid grid-cols-2 [grid-gap:7px]">
                    {imgPath.map((el) => (
                      <motion.div
                        key={`first-card-${el}`}
                        className="relative cursor-pointer"
                        layoutId={`${el}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={
                          !selectedImage.includes(el)
                            ? {
                                opacity: 0,
                                transition: {
                                  duration: 0.1,
                                },
                              }
                            : {}
                        }
                        onClick={() => clickedFunc(el)}
                      >
                        <motion.div
                          key={"box"}
                          exit={{
                            opacity: 0,
                            transition: {
                              duration: 1,
                            },
                          }}
                          className={`absolute top-[4px] right-[3px] h-[15px] w-[15px] ${
                            selectedImage.includes(el)
                              ? "border-[0]"
                              : "border-[1px] border-gray-200"
                          } border-[1px]  rounded-full`}
                        >
                          <motion.div
                            initial={{
                              opacity: 0,
                            }}
                            animate={
                              selectedImage.includes(el)
                                ? {
                                    opacity: 1,
                                    transition: {
                                      duration: 0.15,
                                    },
                                  }
                                : {
                                    opacity: 0,
                                  }
                            }
                            className="h-[100%] rounded-full w-[100%] bg-gray-200"
                          ></motion.div>
                        </motion.div>
                        <Image
                          height={100}
                          width={100}
                          className="rounded-[10px]"
                          src={`/${el}`}
                          alt=""
                          priority
                        />
                      </motion.div>
                    ))}
                  </div>
                  <motion.button
                    initial={{
                      cursor: "not-allowed",
                      backgroundColor: "#d1d5db",
                    }}
                    animate={
                      selectedImage.length > 0
                        ? {
                            cursor: "pointer",
                            backgroundColor: "#000",
                            transition: {
                              duration: 0.2,
                            },
                          }
                        : {}
                    }
                    exit={{
                      opacity: 0,
                      y: -5,
                      transition: {
                        duration: 0.3,
                      },
                    }}
                    disabled={selectedImage.length === 0}
                    onClick={() => {
                      setImageShow(true);
                    }}
                    className=" w-[100%] h-[30px] bg-gray-300 rounded-[10px] text-white text-[0.7rem]"
                  >
                    Submit
                  </motion.button>
                </div>
              </div>
            )}
          </AnimatePresence>
        </MotionConfig>
      </div>
    </div>
  );
};
export default Stacked;
