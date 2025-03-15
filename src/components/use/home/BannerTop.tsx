'use client';
import Image from 'next/image';
import Slider from 'react-slick';

// import titleShape from '@/assets/images/shape/shape_34.svg';
import bannerShape_1 from '@/assets/images/shape/shape_35.svg';
import bannerShape_2 from '@/assets/images/shape/shape_36.svg';
// import BannerImage from '@/assets/images/property-location/banner-image1.jpg';

import DropdownHome from './SearchDropdown';

const setting = {
  dots: false,
  arrows: false,
  centerPadding: '0px',
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  fade: true,
  autoplaySpeed: 7000,
};

const BannerTop = () => {
  return (
    <div className="hero-banner-three position-relative z-1 pt-30 lg-pt-50 pb-30 xl-pb-20 lg-pb-20">
      <Slider {...setting} className="hero-slider-one m0">
        <div className="item m0">
          <div
            className="hero-img"
            style={{
              backgroundImage: `url(/assets/images/property-location/detabek/green-office-park-6/1.png)`,
            }}
          ></div>
        </div>
        <div className="item m0">
          <div
            className="hero-img"
            style={{
              backgroundImage: `url(/assets/images/property-location/banner-image1.jpg)`,
            }}
          ></div>
        </div>
        <div className="item m0">
          <div
            className="hero-img"
            style={{
              backgroundImage: `url(/assets/images/property-location/thamrin/menara-cakrawala/1.png)`,
            }}
          ></div>
        </div>
      </Slider>

      <div className="container position-relative z-2">
        <div className="row">
          <div className="col-lg-10 m-auto">
            <h3 className="hero-heading text-center text-white font-garamond fw-500 wow fadeInUp">
              <span>Featured Office</span>
            </h3>
            <p
              className="fs-24 text-white text-center pt-5 md-pt-10 pb-55 lg-pb-40 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              We’ve more than 100 commercial properties across Indonesia.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-xxl-10 m-auto">
            <div
              className="search-wrapper-one layout-one position-relative wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div className="bg-wrapper mt-70">
                <DropdownHome style={true} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Image src={bannerShape_1} alt="" className="lazy-img shapes shape_01" />
      <Image src={bannerShape_2} alt="" className="lazy-img shapes shape_02" />
    </div>
  );
};

export default BannerTop;
