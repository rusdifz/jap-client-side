import BreadcrumbThree from "@/components/examples/common/breadcrumb/BreadcrumbThree";
import HeaderFour from "@/layouts/examples/headers/HeaderFour";
import FooterFour from "@/layouts/examples/footers/FooterFour";
import AgencyDetailsArea from "../../agency/agency-details/AgencyDetailsArea";
import FancyBanner from "@/components/examples/common/FancyBanner";

const AgentDetails = () => {
  return (
    <>
      <HeaderFour />
      <BreadcrumbThree
        title="Agent Details"
        link="agent"
        link_title="Agent"
        sub_title="Mathews Firlo"
        style={false}
      />
      <AgencyDetailsArea style={true} />
      <FancyBanner />
      <FooterFour />
    </>
  );
};

export default AgentDetails;
