import BreadcrumbThree from "@/components/examples/common/breadcrumb/BreadcrumbThree";
import HeaderFour from "@/layouts/examples/headers/HeaderFour";
import FooterFour from "@/layouts/examples/footers/FooterFour";
import ProjectArea from "./ProjectArea";
import FancyBannerCommon from "@/components/examples/common/FancyBanner";
import FancyBanner from "../project-one/FancyBanner";

const ProjectThree = () => {
  return (
    <>
      <HeaderFour />
      <BreadcrumbThree
        title="Our Projects"
        link="#"
        link_title="Pages"
        sub_title="Projects"
        style={false}
      />
      <ProjectArea />
      <FancyBanner />
      <FancyBannerCommon />
      <FooterFour />
    </>
  );
};

export default ProjectThree;
