import BreadcrumbThree from "@/components/examples/common/breadcrumb/BreadcrumbThree";
import HeaderFour from "@/layouts/examples/headers/HeaderFour";
import FooterFour from "@/layouts/examples/footers/FooterFour";
import CompareArea from "./CompareArea";
import FancyBanner from "@/components/examples/common/FancyBanner";

const Compare = () => {
  return (
    <>
      <HeaderFour />
      <BreadcrumbThree
        title="Compare"
        link="#"
        link_title="Pages"
        sub_title="Compare"
        style={false}
      />
      <CompareArea />
      <FancyBanner />
      <FooterFour />
    </>
  );
};

export default Compare;
