'use client';

import BannerTop from '@/components/organisms/about-us/BannerTop';
import SectionIntroduce from '@/components/organisms/about-us/SectionIntroduce';
import OurServices from '@/components/organisms/about-us/OurService';
import FotoArea from '@/components/organisms/about-us/FotoArea';
import OurPartners from '@/components/organisms/about-us/OurPartner';

const AboutUs = () => {
  return (
    <>
      <BannerTop />
      <SectionIntroduce />
      <OurServices style={false} />
      <FotoArea style={false} />
      <OurPartners style={false} />
    </>
  );
};

export default AboutUs;
