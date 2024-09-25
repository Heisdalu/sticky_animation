import { log } from "console";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface ObjTypes {
  obj: {
    name: string;
    hex: string;
    id: number;
  };
}

interface Props {
  x: number;
  outMax: number;
  outMin: number;
  inputMin: number;
  inputMax: number;
}

const linear = ({ x, outMax, outMin, inputMin, inputMax }: Props): number => {
  return ((x - inputMin) / (inputMax - inputMin)) * (outMax - outMin) + outMin;
};

// Example usage:

const ItemCard = ({ obj }: ObjTypes) => {
  const mtnRef = useRef(null);
  const { scrollY } = useScroll({});

  const [state, setState] = useState({ top: 0, height: 0 });

  const scale = useTransform(
    scrollY,
    [state.top, state.top + state.height],
    [1, 0.8]
  );
  const borderRadius = useTransform(
    scrollY,
    [state.top, state.top + state.height],
    [0, 40]
  );
  const filter = useTransform(scrollY, (l) => {
    // console.log(l);

    if (l < state.top) {
      return `brightness(${1})`;
    }

    if (l >= state.top && l <= state.top + state.height) {
      const d = linear({
        x: l,
        inputMin: state.top,
        inputMax: state.top + state.height,
        outMax: 0.5,
        outMin: 1,
      });

      return `brightness(${d})`;
    }

    return `brightness(${0.5})`;
  });

  //   useMotionValueEvent(scrollY, "change", (last) => {
  //     console.log("chnage", last);
  //   });

  useEffect(() => {
    const func = () => {
      if (mtnRef.current) {
        const d = mtnRef.current as HTMLDivElement;
        setState({
          top: d.getBoundingClientRect().top + 30,
          height: window.innerHeight,
        });
      }
    };
    if (mtnRef.current) {
      func();
    }

    const d = () => {
      window.scrollTo({
        top: 0,
      });

      // kindly reset again, since i am finding it hard do debug positin issue... skill issue.. hahahah

      func();
    };

    window.addEventListener("resize", d);

    return () => {
      window.removeEventListener("resize", d);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      key={obj.name}
      ref={mtnRef}
      style={{ perspective: "1000px" }}
      className="sticky top-[0] border-[0px] border-black h-[100vh] text-[3rem] grid place-items-center"
    >
      <motion.div
        className="grid w-full h-full place-items-center"
        style={{
          backgroundColor: obj.hex,
          borderRadius,
          scale,
          // scale,
          filter,
          // opacity: brightness,
        }}
      >
        {obj.name}
      </motion.div>
    </div>
  );
};
export default ItemCard;
