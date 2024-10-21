import { Variants, motion, useAnimationControls } from "framer-motion";

const Main = () => {
  const control = useAnimationControls();
  const control2 = useAnimationControls();
  const v: Variants = {
    init: {
      y: "-150%",
    },
    animate: {
      y: 0,
    },
  };
  const p: Variants = {
    init: {
      y: "-50%",
    },
    animate: {
      y: "100%",
    },
  };
  return (
    <div className="h-[100vh] grid place-items-center">
      <div>
        <button
          onMouseEnter={() => {
            control.start("animate");
            control2.start("animate");
          }}
          onMouseLeave={() => {
            control.start("init");
            control2.start("init");
          }}
          className="overflow-hidden rounded-[20px] relative border-[1px] border-black px-[2rem] py-[0.5rem] "
        >
          <motion.span
            variants={v}
            initial="init"
            animate={control}
            className="block text-blue-500"
          >
            Click me
          </motion.span>
          <motion.span
            variants={p}
            initial="init"
            animate={control2}
            className="absolute block top-[50%] translate-y-[-50%]"
          >
            {" "}
            Click me
          </motion.span>
        </button>
      </div>
    </div>
  );
};
export default Main;
