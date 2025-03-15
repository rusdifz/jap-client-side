import BreadcrumbThree from "@/components/examples/common/breadcrumb/BreadcrumbThree";
import HeaderFour from "@/layouts/examples/headers/HeaderFour";
import FooterFour from "@/layouts/examples/footers/FooterFour";
import AgentArea from "./AgentArea";
import FancyBanner from "@/components/examples/common/FancyBanner";

const Agent = () => {
  return (
    <>
      <HeaderFour />
      <BreadcrumbThree
        title="Our Agent"
        link="#"
        link_title="Pages"
        sub_title="Agents"
        style={true}
      />
      <AgentArea />
      <FancyBanner />
      <FooterFour />
    </>
  );
};

export default Agent;
