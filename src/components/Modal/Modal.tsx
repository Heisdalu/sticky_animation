import { useState } from "react";
import Login from "./Login";
import { AnimatePresence, motion } from "framer-motion";
import Signup from "./signup";

const Modal = () => {
  const [state, setState] = useState(false);
  const [scale, setScale] = useState(false);

  console.log(state);

  const varaint = {
    hide: {
      scale: 0,
    },
    show: {
      scale: 1,
    },
  };

  return (
    <div className="h-[100vh] border-[2px] grid place-items-center">
      <button onClick={() => setScale((l) => !l)}>lol</button>
      <motion.div
        layout
        transition={{ duration: 0.3 }}
        variants={varaint}
        animate={scale ? "hide" : "show"}
        className="w-[300px] overflow-hidden p-[1rem] rounded-[20px] flex justify- items-center flex-col text-center space-y-[1rem] bg-gray-400  border-black"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
          }}
          key={state ? "login" : "signup"}
        >
          {state ? <Login /> : <Signup />}
        </motion.div>
        <button
          onClick={() => setState((l) => !l)}
          className="py-[0.3rem] px-[1rem] border-[2px] border-black  rounded-[20px]"
        >
          Click me
        </button>
      </motion.div>
    </div>
  );
};
export default Modal;
