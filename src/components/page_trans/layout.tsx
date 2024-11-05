import { Variants, motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();

  const obj: Variants = {
    initial: {
      y: 10,
      opacity: 0,
      scale: 1,
    },
    animate: {
      y: 0,
      opacity: 1,
      scale: 1,

      transition: {
        duration: 0.5,
      },
    },
  };
  const bg: Variants = {
    initial: {
      y: 0,
    },
    animate: {
      y: "-100%",
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <motion.div
        {...bg}
        className="grid place-items-center text-white h-[100vh] w-full z-[100] bg-black absolute top-[-0px]"
      >
        {router.asPath.slice(1) || "Home"}
      </motion.div>
      <motion.div {...obj}>
        <div className="space-x-[1rem]">
          <Link href={"/"}>Home</Link>
          <Link href={"/section"}>Section</Link>
          <Link href={"/contact"}>Contact</Link>
          <Link href={"/service"}>Service</Link>
        </div>
        {children}
      </motion.div>
    </>
  );
};
export default Layout;
