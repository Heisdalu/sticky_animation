import { motion, useAnimate, stagger } from "framer-motion";

const Main = () => {
  const [scope, animate] = useAnimate();

  const click = () => {
    animate([
      [".letter", { y: -30 }, { delay: stagger(0.05), duration: 0.2 }],
      ["button", { scale: 0.8 }, { duration: 0.1, at: "<" }],
      ["button", { scale: 1 }, { duration: 0.1 }],
      [".letter", { y: 1.5 }, { duration: 0.0001, at: 0.5 }],
      //   [".letter", { y: 0 }, { duration: 0.00001 }],
    ]);
  };

  return (
    <div ref={scope} className="grid place-items-center h-[100vh]">
      <motion.button
        onClick={click}
        className="hover:bg-black hover:text-white border-[1px] rounded-[20px] border-black py-2 px-6"
      >
        <span className="sr-only">Divine</span>
        <span aria-hidden className="block h-8 overflow-hidden">
          {["d", "i", "v", "i", "n", "e"].map((el, i) => (
            <span
              data-letter={el}
              key={i}
              aria-hidden
              className="h-8 after:h-8 relative inline-block letter after:absolute after:left-0 after:top-full after:content-[attr(data-letter)]"
            >
              {el}
            </span>
          ))}
        </span>
      </motion.button>
    </div>
  );
};
export default Main;
