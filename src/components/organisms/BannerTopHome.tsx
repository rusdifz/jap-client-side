'use client';

import Slider from 'react-slick';
import SearchDropdown from '../moleculs/SearchDropdown';
import Image from 'next/image';
import SearchDropdownHome from '../moleculs/SearchDropdownHome';

const setting = {
  dots: false,
  arrows: false,
  centerPadding: '0px',
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  fade: true,
  autoplaySpeed: 5000,
};

const BannerTopHome = () => {
  return (
    <div className="hero-banner-four position-relative z-1 xl-pt-120 md-pt-60 pb-50 xl-pb-120 md-pb-20">
      <Slider {...setting} className="hero-slider-one m0">
        <div className="item m-0">
          <Image
            alt=""
            src={''}
            width={1000}
            height={1000}
            style={{
              objectFit: 'fill',
              objectPosition: 'center',
              backgroundImage: `url(/assets/images/banner/banner-image-13.jpg)`,
            }}
            className="hero-img lazy-img"
            loading="lazy"
          />
        </div>
        {/* <div className="item m-0">
          <Image
            alt=""
            src="/assets/images/banner/banner-image-9.jpg"
            width={1000}
            height={1000}
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
            }}
            className="hero-img lazy-img"
          />
        </div> */}
      </Slider>

      <div className="container flex z-1">
        <div className="row pt-150">
          {/* <h1 className="hero-heading font-garamond wow fadeInUp">
            Featured Office
          </h1> */}
        </div>
        <div className="row pb-5 mt-100">
          <SearchDropdownHome />
        </div>
      </div>
    </div>
  );
};

export default BannerTopHome;
