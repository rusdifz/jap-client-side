import BreadcrumbThree from "@/components/examples/common/breadcrumb/BreadcrumbThree";
import Brand from "@/components/examples/homes/home-five/Brand";
import FooterFour from "@/layouts/examples/footers/FooterFour";
import HeaderFour from "@/layouts/examples/headers/HeaderFour";
import BLockFeatureOne from "./BLockFeatureOne";
import BlockFeatureThree from "../service-one/BlockFeatureTwo";
import BLockFeatureTwo from "./BLockFeatureTwo";
import FancyBanner from "@/components/examples/common/FancyBanner";
import BLockFeatureThree from "./BLockFeatureThree";

const ServiceTwo = () => {
  return (
    <>
      <HeaderFour />
      <BreadcrumbThree
        title="Our Services"
        link="#"
        link_title="Pages"
        sub_title="Services"
        style={false}
      />
      <BLockFeatureOne />
      <Brand />
      <BLockFeatureThree />
      <BlockFeatureThree style={true} />
      <BLockFeatureTwo />
      <FancyBanner />
      <FooterFour />
    </>
  );
};

export default ServiceTwo;
