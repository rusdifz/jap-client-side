import BreadcrumbOne from "@/components/examples/common/breadcrumb/BreadcrumbOne";
import HeaderOne from "@/layouts/examples/headers/HeaderOne";
import BLockFeatureOne from "./BLockFeatureOne";
import VideoBanner from "@/components/examples/homes/home-seven/VideoBanner";
import BLockFeatureFive from "@/components/examples/homes/home-one/BLockFeatureFive";
import Feedback from "@/components/examples/homes/home-five/Feedback";
import AgentArea from "@/components/examples/homes/home-one/AgentArea";
import Brand from "./Brand";
import FooterFour from "@/layouts/examples/footers/FooterFour";
import FancyBanner from "@/components/examples/common/FancyBanner";

const AboutUsOne = () => {
  return (
    <>
      <HeaderOne style={true} />
      <BreadcrumbOne title="About Agency" sub_title="About us" style={false} />
      <BLockFeatureOne />
      <VideoBanner />
      <BLockFeatureFive style={true} />
      <Feedback style={true} />
      <AgentArea style={false} />
      <Brand />
      <FancyBanner style={false} />
      <FooterFour />
    </>
  );
};

export default AboutUsOne;
