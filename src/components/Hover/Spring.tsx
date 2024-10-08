import { useSpring, motion } from "framer-motion";

export default function SpringBox() {
  const x = useSpring(0, { stiffness: 300, damping: 20 });

  return (
    <div>
      <motion.div
        style={{
          width: 100,
          height: 100,
          background: "blue",
          x,
        }}
      />
      <button onClick={() => x.set(Math.random() * 500)}>Move randomly</button>
    </div>
  );
}
