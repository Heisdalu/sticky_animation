import Layout from "@/components/layout/layout";
import Modal from "@/components/Modal/Modal";
import Lol from "@/components/Scrolling/main";
import Claude from "@/components/claude/index";
import Timer from "@/components/timer/main";
import Drag from "@/components/Drag/main";
import Hover from "@/components/Hover/main";
import Velocity from "@/components/Velocity/main";
import Pin from "@/components/pinning/main";
import Button from "@/components/Button/main";
import Tut from "@/components/Tutorial/main";
import Mask from "@/components/mask/mian";
import { Variants, motion } from "framer-motion";
import Grid from "@/components/grid/grdi";
import Cover from "@/components/Cover/Cover";
import Twitter from "@/components/Twitter/man";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Index = () => {
  return (
    <div className={inter.className}>
      {/* <Layout />
      <Lol />
      <Modal />
      <Claude />
      <Timer initialSeconds={1000} /> */}
      {/* <Drag /> */}
      {/* <Hover /> */}
      {/* <Velocity /> */}
      {/* <Pin /> */}
      {/* <Button /> */}
      {/* <Tut /> */}
      {/* <Mask /> */}
      {/* <div className="bg-gray-300 cen">Home is home</div> */}
      {/* <Grid /> */}
      {/* <Cover /> */}
      <Twitter />
    </div>
  );
};
export default Index;
