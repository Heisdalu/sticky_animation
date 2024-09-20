import { MutableRefObject, useEffect, useRef } from "react";
import Item from "./components/Item";

const colors = [
  { name: "Teal", hex: "#008080" },
  { name: "Coral", hex: "#FF7F50" },
  { name: "Royal Blue", hex: "#4169E1" },
  { name: "Goldenrod", hex: "#DAA520" },
  { name: "Crimson", hex: "#DC143C" },
  { name: "Forest Green", hex: "#228B22" },
];
const Lol = () => {
  return (
    <div className="bg-black">
      <div className="">
        <div className="border-[3px] border-black h-[100vh] text-white text-[2rem] grid place-items-center">
          Scroll Down
        </div>
        {colors.map((el, i) => (
          <Item key={el.name} obj={{ ...el, id: i }} />
        ))}
      </div>
      <div className="border-[3px] border-black h-[100vh] text-white text-[2rem] grid place-items-center">
        Scroll Up
      </div>
    </div>
  );
};
export default Lol;
