import Layout from "@/components/layout/layout";
import Modal from "@/components/Modal/Modal";
import Lol from "@/components/Scrolling/main";
import Claude from "@/components/claude/index";
import Timer from "@/components/timer/main";

const Index = () => {
  return (
    <div>
      {/* <Layout /> */}
      {/* <Lol /> */}
      {/* <Modal /> */}
      {/* <Claude /> */}
      <Timer initialSeconds={1000} />
    </div>
  );
};
export default Index;
