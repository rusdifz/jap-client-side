import BreadcrumbThree from "@/components/examples/common/breadcrumb/BreadcrumbThree";
import HeaderFour from "@/layouts/examples/headers/HeaderFour";
import FooterFour from "@/layouts/examples/footers/FooterFour";
import ProjectArea from "./ProjectArea";
import FancyBanner from "@/components/examples/common/FancyBanner";

const ProjectFour = () => {
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
      <FooterFour />
    </>
  );
};

export default ProjectFour;
