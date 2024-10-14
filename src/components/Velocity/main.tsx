import { useState } from "react";
import Item from "./item";
import { motion, MotionConfig, Variants } from "framer-motion";

const Marquee = () => {
  const [state, setState] = useState(true);
  return (
    <div className="">
      <button onClick={() => setState((p) => !p)}>clic me {`${state}`}</button>
      <div className="overflow-hidden">
        <Item
          images={[`1framer`, 2, 3, 4]}
          from={"0%"}
          to={"-100%"}
          state={state}
        />
        {/* <Item images={[1, 2, 3, 4, 5]} from={"-100%"} to={"0%"} state={state} /> */}
        {/* <Item images={[1, 2, 3, 4, 5]} from={'100%'} to={"-100%"} /> */}
        {/* <Item images={[1, 2, 3, 4, 5]} from={'100%'} to={"-100%"} /> */}
      </div>
    </div>
  );
};
export default Marquee;
