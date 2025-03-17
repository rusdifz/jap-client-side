// import BannerTop from './BannerTopOld';
// import BannerBottom from './BannerBottom';

// import SectionFeature from './SectionFeature';

import Brand from './Brand';

import Feedback from './Feedback';

// import Header from '@/layouts/use/headers/Header';
import BannerTop from './BannerTop';
import SectionAboutUs from './AboutUs';
import SectionCategory from './Category';
// import Category2 from './Category2';
// import FooterTwoUse from '@/layouts/use/footers/FooterTwo';
// import BannerBottom from './BannerBottom';
import Address from './Address';
import Footer from '@/layouts/use/footers/Footer';

const Home = () => {
  return (
    <>
      <BannerTop />
      <SectionCategory />
      <SectionAboutUs />
      <Feedback style={true} />
      <Brand />
      <Address />
      {/* <Footer /> */}
    </>
  );
};

export default Home;
