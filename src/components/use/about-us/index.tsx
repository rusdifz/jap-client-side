import BreadcrumbTwo from "@/components/examples/common/breadcrumb/BreadcrumbTwo";

import BLockFeatureOne from "./BLockFeatureOne";
import BLockFeatureTwo from "./BLockFeatureTwo";
import Feedback from "@/components/examples/homes/home-six/Feedback";
import Brand from "./Brand";
import FancyBanner from "./FancyBanner";
import FooterTwo from "@/layouts/examples/footers/FooterTwo";
import Header from "@/layouts/use/headers/Header";

const AboutUs = () => {
  return (
    <>
      <Header style_1={true} style_2={false} />
      <BreadcrumbTwo title="About Agency" sub_title="About us" />
      <BLockFeatureOne />
      <BLockFeatureTwo />
      <Feedback />
      <Brand />
      <FancyBanner />
      <FooterTwo />
    </>
  );
};

export default AboutUs;
