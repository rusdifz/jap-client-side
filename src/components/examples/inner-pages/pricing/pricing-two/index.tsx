import BreadcrumbThree from "@/components/examples/common/breadcrumb/BreadcrumbThree";
import FooterFour from "@/layouts/examples/footers/FooterFour";
import HeaderFour from "@/layouts/examples/headers/HeaderFour";
import PricingTwoArea from "./PricingTwoArea";
import FancyBanner from "@/components/examples/common/FancyBanner";

const PricingTwo = () => {
  return (
    <>
      <HeaderFour />
      <BreadcrumbThree
        title="Pricing Plan"
        link="#"
        link_title="Pages"
        sub_title="Pricing"
        style={false}
      />
      <PricingTwoArea />
      <FancyBanner />
      <FooterFour />
    </>
  );
};

export default PricingTwo;
