import BreadcrumbThree from "@/components/examples/common/breadcrumb/BreadcrumbThree";
import HeaderFour from "@/layouts/examples/headers/HeaderFour";
import FooterFour from "@/layouts/examples/footers/FooterFour";
import ProjectDetailsArea from "./ProjectDetailsArea";
import FancyBanner from "@/components/examples/common/FancyBanner";

const ProjectFour = () => {
  return (
    <>
      <HeaderFour />
      <BreadcrumbThree
        title="Single Projects"
        link="pricing_01"
        link_title="Project"
        sub_title="Vintage City"
        style={false}
      />
      <ProjectDetailsArea />
      <FancyBanner />
      <FooterFour />
    </>
  );
};

export default ProjectFour;
