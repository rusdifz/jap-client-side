'use client';

// import Link from 'next/link';
import Slider from 'react-slick';
// import DropdownFour from '@/components/search-dropdown/home-dropdown/DropdownFour';
// import DropdownSix from '@/components/search-dropdown/home-dropdown/DropdownSix';
// import DropdownHome from './SearchDropdown';
import SearchDropdown from '../use/dropdown/SearchDropdown';
import Image from 'next/image';

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
          <Image
            alt=""
            src=""
            width={1000}
            height={1000}
            style={{
              backgroundImage: `url(/assets/images/banner/banner-image-13.jpg)`,
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
