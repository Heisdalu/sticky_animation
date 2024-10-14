import React, { useEffect, useState } from "react";
import {
  motion,
  useAnimate,
  useAnimationControls,
  useAnimationFrame,
  useMotionValue,
  useMotionValueEvent,
  Variants,
} from "framer-motion";

const MarqueeItem = ({ images, from, to, state }) => {
  console.log(state);
  const controls = useAnimationControls();

  const v: Variants = {
    start: {
      x: `${from}`,
    },
    anim: {
      x: `${to}`,
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  const x = useMotionValue(0);

  useEffect(() => {
    controls.start({
      x: `${to}`,
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      },
    });
  }, []);

  return (
    <>
      <button
        onClick={() => {
          console.log("lol");

          controls.start({
            x: `${to}%`,
            transition: {
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            },
          });
        }}
      >
        lol
      </button>
      <button
        onClick={() => {
          // console.log("lll", stateP);
          controls.start({
            x: `${100}%`,
            transition: {
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            },
          });
        }}
      >
        play
      </button>
      <div className="flex MyGradient">
        {Array(3)
          .fill(0)
          .map((el, i) => (
            <motion.div
              style={{ x }}
              key={i}
              variants={v}
              initial="start"
              animate={controls}
              className="flex"
            >
              {images.map((image: any, index: any) => (
                <div className="w-56" key={index}>
                  {image}
                </div>
              ))}
            </motion.div>
          ))}
      </div>
    </>
  );
};

export default MarqueeItem;
