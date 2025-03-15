import BreadcrumbOne from "@/components/examples/common/breadcrumb/BreadcrumbOne";
import FooterFour from "@/layouts/examples/footers/FooterFour";
import HeaderOne from "@/layouts/examples/headers/HeaderOne";
import BlockFeatureOne from "./BlockFeatureOne";
import HomeBLockFeatureOne from "@/components/examples/homes/home-one/BLockFeatureOne";
import BlockFeatureTwo from "./BlockFeatureTwo";
import Feedback from "@/components/examples/homes/home-one/Feedback";
import FancyBanner from "./FancyBanner";
import BLockFeatureTwo from "@/components/examples/homes/home-four/BLockFeatureTwo";
import FancyBannerCommon from "@/components/examples/common/FancyBanner";

const ServiceOne = () => {
  return (
    <>
      <HeaderOne style={true} />
      <BreadcrumbOne
        title="Our Services"
        link="#"
        link_title="Pages"
        sub_title="Services"
        style={false}
      />
      <BlockFeatureOne />
      <HomeBLockFeatureOne />
      <BlockFeatureTwo style={false} />
      <FancyBanner />
      <Feedback />
      <BLockFeatureTwo style={true} />
      <FancyBannerCommon />
      <FooterFour />
    </>
  );
};

export default ServiceOne;
