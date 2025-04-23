// import BreadcrumbTwo from '@/components/common/breadcrumb/BreadcrumbTwo';

import SectionIntroduce from './SectionIntroduce';
// import BLockFeatureTwo from './BLockFeatureTwo';
// import Feedback from '@/components/homes/home-six/Feedback';
// import Brand from './Brand';
// import FancyBanner from './FancyBanner';
// import FooterTwo from '@/layouts/examples/footers/FooterTwo';
// import Header from '@/layouts/headers/Header';

import BannerTop from './BannerTop';
import FotoArea from './FotoArea';
import OurServices from './OurService';
import OurPartners from './OurPartner';

const AboutUs = () => {
  return (
    <>
      <BannerTop />
      <SectionIntroduce />
      {/* <BLockFeatureTwo /> */}
      <OurServices style={false} />

      <FotoArea style={false} />

      <OurPartners style={false} />
      {/* <BLockFeatureOne />
      <BLockFeatureTwo />
      <Feedback />
      <Brand /> */}
      {/* <FancyBanner /> */}
      {/* <FooterTwo /> */}
    </>
  );
};

export default AboutUs;
