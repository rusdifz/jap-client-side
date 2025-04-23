import Address from './Address';
import ListClient from './Client';
import BannerTop from './BannerTop';
import Feedback from './Feedback';

import SectionAboutUs from './AboutUs';
import SectionCategory from './Category';
// import SearchAreaTwo from '../property-list/SearchAreaNew';

const Home = () => {
  return (
    <>
      <BannerTop />
      {/* <SearchAreaTwo /> */}
      <SectionCategory />
      <SectionAboutUs />
      <Feedback style={true} />
      <ListClient />
      <Address />

      {/* <a
        href="https://wa.me/6281234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="btn whatsapp-float d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-whatsapp" aria-hidden="true" />
      </a> */}
    </>
  );
};

export default Home;
