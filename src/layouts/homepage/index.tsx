import ListClient from '@/components/organisms/HomeOurClient';
import BannerTop from '@/components/organisms/BannerTop';
import Feedback from '@/components/organisms/HomeFeedback';

import AboutUs from '@/components/organisms/HomeAboutUs';
import Address from '@/components/organisms/HomeAddress';
import Category from '@/components/organisms/HomeCategory';
// import SearchAreaTwo from '../property-list/SearchAreaNew';

const Home = () => {
  return (
    <>
      <BannerTop />
      {/* <SearchAreaTwo /> */}
      <Category />
      <AboutUs />
      <Feedback style={true} />
      <ListClient />
      <Address />
    </>
  );
};

export default Home;
