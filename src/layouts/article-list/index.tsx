import BreadcrumbOne from '@/components/atoms/breadcrumb/BreadcrumbOne';
import BlogArea from '@/components/organisms/Blogs';
// import FancyBanner from '@/components/moleculs/FancyBanner';

const BlogThree = () => {
  return (
    <>
      <BreadcrumbOne
        title="Article Publication"
        link="#"
        link_title="Update"
        style={true}
      />
      <BlogArea />
      {/* <FancyBanner /> */}
    </>
  );
};

export default BlogThree;
