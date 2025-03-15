import BreadcrumbOne from "@/components/examples/common/breadcrumb/BreadcrumbOne";
import FooterFour from "@/layouts/examples/footers/FooterFour";
import HeaderOne from "@/layouts/examples/headers/HeaderOne";
import BlogThreeArea from "./BlogThreeArea";
import FancyBanner from "@/components/examples/common/FancyBanner";

const BlogThree = () => {
  return (
    <>
      <HeaderOne style={true} />
      <BreadcrumbOne
        title="Blog Full Width"
        link="#"
        link_title="Pages"
        sub_title="Blog"
        style={true}
      />
      <BlogThreeArea />
      <FancyBanner />
      <FooterFour />
    </>
  );
};

export default BlogThree;
