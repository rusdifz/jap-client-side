'use client';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';

import bannerAvatar_1 from '@/assets/images/media/img_33.jpg';
import bannerAvatar_2 from '@/assets/images/media/img_34.jpg';
import bannerAvatar_3 from '@/assets/images/media/img_35.jpg';
import bannerAvatar_4 from '@/assets/images/media/img_36.jpg';
import Slider from 'react-slick';
import DropdownFour from '@/components/examples/search-dropdown/home-dropdown/DropdownFour';
import DropdownSix from '@/components/examples/search-dropdown/home-dropdown/DropdownSix';
import DropdownHome from './SearchDropdown';

const banner_avatar: StaticImageData[] = [
  bannerAvatar_1,
  bannerAvatar_2,
  bannerAvatar_3,
  bannerAvatar_4,
];

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

const HeroBanner = () => {
  return (
    <div className="hero-banner-four position-relative z-1 pt-150 xl-pt-120 md-pt-60 pb-150 xl-pb-120 md-pb-100">
      <Slider {...setting} className="hero-slider-one m0">
        <div className="item m0">
          <div
            className="hero-img"
            style={{
              backgroundImage: `url(/assets/images/banner/banner-image-3.jpg)`,
            }}
          ></div>
        </div>
        <div className="item m0">
          <div
            className="hero-img"
            style={{
              backgroundImage: `url(/assets/images/banner/banner-image-12.jpg)`,
            }}
          ></div>
        </div>
        <div className="item m0">
          <div
            className="hero-img"
            style={{
              backgroundImage: `url(/assets/images/banner/banner-image-9.jpg)`,
            }}
          ></div>
        </div>
      </Slider>

      <div className="container position-relative z-1">
        <div className="row">
          <div className="col-lg-9 wow fadeInLeft">
            <div className="mt-30 mb-0">
              <h3 className="hero-heading fw-500 wow fadeInUp">
                Featured Office
              </h3>
            </div>
          </div>

          <div className="row">
            <div className="col-xxl-12 mb-20">
              <DropdownSix />
              {/* <DropdownHome style={true} /> */}
            </div>
          </div>
          {/* <div className="row">
            <div className="col-xxl-10 m-auto">
              <div
                className="search-wrapper-one layout-one mt-350 xl-mt-150 lg-mt-100 position-relative wow fadeInUp mb-10"
                data-wow-delay="0.2s"
              >
                <div className="bg-wrapper mt-100">
                  <DropdownHome style={true} />
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
