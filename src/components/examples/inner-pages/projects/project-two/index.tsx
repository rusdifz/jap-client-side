import BreadcrumbOne from "@/components/examples/common/breadcrumb/BreadcrumbOne";
import HeaderOne from "@/layouts/examples/headers/HeaderOne";
import FooterFour from "@/layouts/examples/footers/FooterFour";
import FancyBanner from "../project-one/FancyBanner";
import ProjectArea from "./ProjectArea";
import FancyBannerCommon from "@/components/examples/common/FancyBanner";

const ProjectOne = () => {
  return (
    <>
      <HeaderOne style={true} />
      <BreadcrumbOne
        title="Our Projects"
        link="#"
        link_title="Pages"
        sub_title="Project"
        style={true}
      />
      <ProjectArea />
      <FancyBanner />
      <FancyBannerCommon />
      <FooterFour />
    </>
  );
};

export default ProjectOne;
