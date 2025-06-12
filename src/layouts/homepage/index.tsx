import ListClient from '@/components/organisms/HomeOurClient';

import Feedback from '@/components/organisms/HomeFeedback';

import AboutUs from '@/components/organisms/HomeAboutUs';
import Address from '@/components/organisms/HomeAddress';
import Category from '@/components/organisms/HomeCategory';
import BannerTopHome from '@/components/organisms/BannerTopHome';

const Home = () => {
  return (
    <>
      <BannerTopHome />
      <Category />
      <AboutUs />
      <Feedback style={true} />
      <ListClient />
      <Address />
    </>
  );
};

export default Home;
