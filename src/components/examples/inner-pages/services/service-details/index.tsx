import FooterFour from "@/layouts/examples/footers/FooterFour";
import ServiceDetailsArea from "./ServiceDetailsArea";
import FancyBanner from "@/components/examples/common/FancyBanner";
import BreadcrumbOne from "@/components/examples/common/breadcrumb/BreadcrumbOne";
import HeaderOne from "@/layouts/examples/headers/HeaderOne";

const ServiceDetails = () => {
  return (
    <>
      <HeaderOne style={true} />
      <BreadcrumbOne
        title="Service Details"
        link="#"
        link_title="Service"
        sub_title="Buy Home"
        style={true}
      />
      <ServiceDetailsArea />
      <FancyBanner />
      <FooterFour />
    </>
  );
};

export default ServiceDetails;
