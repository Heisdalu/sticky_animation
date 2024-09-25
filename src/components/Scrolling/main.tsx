import { motion } from "framer-motion";
import ItemCard from "@/components/Scrolling/ItemCard";

const colors = [
  { name: "Teal", hex: "#008080" },
  { name: "Coral", hex: "#FF7F50" },
  { name: "Royal Blue", hex: "#4169E1" },
  { name: "Goldenrod", hex: "#DAA520" },
  { name: "Crimson", hex: "#DC143C" },
  { name: "Forest Green", hex: "#228B22" },

  //framer debug...
  //layout animation....nexted modals
  // animated nav tab with width animations
  //   /marquee.. with scrolling stuff.. scroll up it reverses and scrolls down it undos
];
const Lol = () => {
  return (
    <div className="bg-black">
      <motion.div layoutScroll className="">
        <div className="border-[3px] border-black h-[100vh] text-white text-[2rem] grid place-items-center">
          Scroll Down
        </div>
        {colors.map((el, i) => (
          <ItemCard key={el.name} obj={{ ...el, id: i }} />
        ))}
      </motion.div>
      <div className="border-[3px] border-black h-[100vh] text-white text-[2rem] grid place-items-center">
        Scroll Up
      </div>
    </div>
  );
};
export default Lol;
