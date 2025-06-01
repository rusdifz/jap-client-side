'use client';

import Slider from 'react-slick';
import SearchDropdown from '../moleculs/SearchDropdown';
import Image from 'next/image';
import { LocationEnum, PropertyTypeEnum } from '@/libs/enums';
import { FormEvent } from 'react';

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

type Props = {
  location: LocationEnum | any;
  setLocation: any;
  propertyType: PropertyTypeEnum | any;
  setPropertyType: any;
  propertyStatus: string | any;
  setPropertyStatus: any;
  keyword: string;
  setKeyword: any;
  handleSubmitForm: (e: FormEvent) => void;
};

const BannerTop: React.FC<Props> = ({
  location,
  setLocation,
  propertyType,
  setPropertyType,
  propertyStatus,
  setPropertyStatus,
  keyword,
  setKeyword,
  handleSubmitForm,
}) => {
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
          />
        </div>
        <div className="item m-0">
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
        </div>
      </Slider>

      <div className="container flex z-1">
        <div className="row pb-5 mt-100 l-pb-5">
          <SearchDropdown
            location={location}
            setLocation={setLocation}
            propertyType={propertyType}
            setPropertyType={setPropertyType}
            propertyStatus={propertyStatus}
            setPropertyStatus={setPropertyStatus}
            keyword={keyword}
            setKeyword={setKeyword}
            handleSubmitForm={handleSubmitForm}
          />
        </div>
      </div>
    </div>
  );
};

export default BannerTop;
