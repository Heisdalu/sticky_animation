import { animate, motion } from "framer-motion";

const Service = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          duration: 2,
        },
      }}
    >
      Service
    </motion.div>
  );
};
export default Service;
