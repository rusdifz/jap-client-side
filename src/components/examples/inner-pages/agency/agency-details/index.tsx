import BreadcrumbThree from "@/components/examples/common/breadcrumb/BreadcrumbThree";
import HeaderFour from "@/layouts/examples/headers/HeaderFour";
import FooterFour from "@/layouts/examples/footers/FooterFour";
import AgencyDetailsArea from "./AgencyDetailsArea";
import FancyBanner from "@/components/examples/common/FancyBanner";

const AgencyDetails = () => {
  return (
    <>
      <HeaderFour />
      <BreadcrumbThree
        title="Agency Details"
        link="agency"
        link_title="Agency"
        sub_title="Rainbow Housing"
        style={false}
      />
      <AgencyDetailsArea style={false} />
      <FancyBanner />
      <FooterFour />
    </>
  );
};

export default AgencyDetails;
