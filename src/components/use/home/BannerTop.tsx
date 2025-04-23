'use client';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';

import bannerAvatar_1 from '@/assets/images/media/img_33.jpg';
import bannerAvatar_2 from '@/assets/images/media/img_34.jpg';
import bannerAvatar_3 from '@/assets/images/media/img_35.jpg';
import bannerAvatar_4 from '@/assets/images/media/img_36.jpg';
import Slider from 'react-slick';
// import DropdownFour from '@/components/search-dropdown/home-dropdown/DropdownFour';
// import DropdownSix from '@/components/search-dropdown/home-dropdown/DropdownSix';
// import DropdownHome from './SearchDropdown';
import SearchDropdown from '../dropdown/SearchDropdown';

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

const BannerTop = () => {
  return (
    // <div className="hero-banner-four position-relative z-1 xl-pt-120 md-pt-60 pb-150 xl-pb-120 md-pb-100">
    <div className="hero-banner-four position-relative z-1 xl-pt-120 md-pt-60 pb-50 xl-pb-120 md-pb-20">
      <Slider {...setting} className="hero-slider-one m0">
        {/* <div className="item m0">
          <div
            className="hero-img"
            style={{
              backgroundImage: `url(/assets/images/banner/banner-image-3.jpg)`,
            }}
          />
        </div> */}
        <div className="item m0">
          <img
            // src="/assets/images/default-image/image_03.jpg"
            // src="/assets/images/banner/banner-image-3.jpg"
            alt=""
            width={1000}
            height={1000}
            style={{
              // width: '5000px',
              // height: '1000px',
              // objectPosition: 'center',
              backgroundImage: `url(/assets/images/default-image/image_03.jpg)`,
            }}
            className="hero-img"
          />
        </div>
        {/* <div className="item m0"> */}
        {/* <div
            className="hero-img"
            style={{
              // backgroundImage: `url(/assets/images/banner/banner-image-9.jpg)`,
              backgroundImage: `url(/assets/images/default-image/image_02.jpg)`,
              objectFit: 'contain',
            }}
          /> */}
        {/* <Image
            src="/assets/images/default-image/image_02.jpg"
            alt=""
            width={1000}
            height={2000}
            className="hero-img"
          />
         
        </div> */}
      </Slider>

      <div className="container flex z-1">
        <div className="row pt-150">
          <h1 className="hero-heading font-garamond wow fadeInUp">
            {/* Featured Office */}
          </h1>
        </div>
        <div className="row pb-5 mt-100">
          <SearchDropdown />
        </div>
      </div>
    </div>
  );
};

export default BannerTop;
