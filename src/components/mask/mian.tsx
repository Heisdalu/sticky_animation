import {
  AnimationSequence,
  motion,
  stagger,
  useAnimate,
  useAnimationControls,
  useMotionTemplate,
  useMotionValue,
  useMotionValueEvent,
  useSpring,
} from "framer-motion";
import Other from "./other";
import Other2 from "./other2";

const Main = () => {
  const [scope, animate] = useAnimate();

  return (
    <>
      {/* <div ref={scope} className="h-[100vh] grid place-items-center">
        <div className="space-y-[4rem]">
          <div>
            <button
              onClick={() => {
                const arr: AnimationSequence = ["#fff", "#000"].map((el, i) => [
                  ".clipS",
                  {
                    clipPath: `circle(70.7% at 50% 50%)`,
                  },
                  {
                    duration: 1,
                    ease: "easeInOut",
                    delay: stagger(1),
                  },
                ]);

                console.log(arr);

                animate([...arr]);
              }}
            >
              click <menu type="context"></menu>
            </button>
            <button
              onClick={() => {
                const arr: AnimationSequence = ["#fff", "#000"].map((el, i) => [
                  ".clipS",
                  {
                    clipPath: `circle(0% at 100% 0)`,
                  },
                  {
                    duration: 1,
                    delay: stagger(1, { from: "last" }),
                    ease: "easeInOut",
                  },
                ]);

                animate([...arr]);
              }}
            >
              reset <menu type="context"></menu>
            </button>
          </div>
          <div className="relative border-[2px borde-red-500 w-[300px] h-[200px]">
            {["#5e1ed4", "#3fa"].map((el, i) => (
              <motion.div
                key={el}
                initial={{
                  clipPath: `circle(0% at 100% 0)`,
                }}
                style={{
                  backgroundColor: el,
                }}
                className={`clipS absolute top-0 grid place-items-center w-full h-full`}
              >
                {el}
              </motion.div>
            ))}
          </div>
        </div>
      </div> */}

      {/* <Other /> */}
      <Other2 />
    </>
  );
};
export default Main;
