import BreadcrumbThree from "@/components/examples/common/breadcrumb/BreadcrumbThree";
import FooterFour from "@/layouts/examples/footers/FooterFour";
import HeaderFour from "@/layouts/examples/headers/HeaderFour";
import BlogTwoArea from "./BlogTwoArea";
import FancyBanner from "@/components/examples/common/FancyBanner";

const BlogTwo = () => {
  return (
    <>
      <HeaderFour />
      <BreadcrumbThree
        title="Blog List"
        link="#"
        link_title="Pages"
        sub_title="Blog"
        style={false}
      />
      <BlogTwoArea />
      <FancyBanner />
      <FooterFour />
    </>
  );
};

export default BlogTwo;
