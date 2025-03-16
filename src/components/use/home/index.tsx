import BannerTop from './BannerTop';
import BannerBottom from './BannerBottom';

import SectionFeature from './SectionFeature';

import Brand from './Brand';

import Feedback from './Feedback';

import Header from '@/layouts/use/headers/Header';
import SectionAboutUs from './AboutUs';
import SectionCategory from './Category';
import Category2 from './Category2';
import FooterTwoUse from '@/layouts/use/footers/FooterTwo';
import HeaderFour from '@/layouts/examples/headers/HeaderFour';
import HeroBanner from './NewBanner';
// import FancyBannerOne from "./BannerBottom";

const Home = () => {
  return (
    <>
      {/* <Header style_1={true} style_2={false} /> */}
      {/* <HeaderFour /> */}
      {/* <BannerTop /> */}
      <HeroBanner />
      <SectionCategory />
      {/* <Category2 /> */}
      {/* <SectionFeature /> */}
      <SectionAboutUs />
      <Feedback style={true} />
      <Brand />
      {/* <BannerBottom /> */}
      <FooterTwoUse />
    </>
  );
};

export default Home;
