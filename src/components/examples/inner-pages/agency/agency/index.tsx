import BreadcrumbThree from "@/components/examples/common/breadcrumb/BreadcrumbThree";
import HeaderFour from "@/layouts/examples/headers/HeaderFour";
import AgencyArea from "./AgencyArea";
import FooterFour from "@/layouts/examples/footers/FooterFour";
import FancyBanner from "@/components/examples/common/FancyBanner";

const Agency = () => {
  return (
    <>
      <HeaderFour />
      <BreadcrumbThree
        title="Agency"
        link="#"
        link_title="Pages"
        sub_title="Agency"
        style={true}
      />
      <AgencyArea />
      <FancyBanner />
      <FooterFour />
    </>
  );
};

export default Agency;
