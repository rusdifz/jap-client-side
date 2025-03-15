import BreadcrumbThree from "@/components/examples/common/breadcrumb/BreadcrumbThree";
import FooterFour from "@/layouts/examples/footers/FooterFour";
import HeaderFour from "@/layouts/examples/headers/HeaderFour";
import BlogOneArea from "./BlogOneArea";
import FancyBanner from "@/components/examples/common/FancyBanner";

const BlogOne = () => {
  return (
    <>
      <HeaderFour />
      <BreadcrumbThree
        title="Blog Grid"
        link="#"
        link_title="Pages"
        sub_title="Blog"
        style={false}
      />
      <BlogOneArea />
      <FancyBanner />
      <FooterFour />
    </>
  );
};

export default BlogOne;
