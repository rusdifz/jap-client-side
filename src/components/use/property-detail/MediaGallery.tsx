'use client';

import { PropPropertyDetail } from '@/libs/type/property.type';
import { pascalToKebab } from '@/libs/helper';

import Image, { StaticImageData } from 'next/image';
import Slider from 'react-slick';
import { useRef } from 'react';

import galleryThumb_1 from '@/assets/images/listing/img_57.jpg';
import galleryThumb_2 from '@/assets/images/listing/img_58.jpg';
import galleryThumb_3 from '@/assets/images/listing/img_59.jpg';
import galleryThumb_4 from '@/assets/images/listing/img_60.jpg';

import gallery1 from '@/assets/images/property-location/thamrin/menara-cakrawala/1.png';
import gallery2 from '@/assets/images/property-location/thamrin/menara-cakrawala/2.png';
import gallery3 from '@/assets/images/property-location/thamrin/menara-cakrawala/3.png';
import gallery4 from '@/assets/images/property-location/thamrin/menara-cakrawala/4.png';

// const gallery_data: StaticImageData[] = [
//   galleryThumb_1,
//   galleryThumb_2,
//   galleryThumb_3,
//   galleryThumb_4,
// ];
const gallery_data: StaticImageData[] = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
];

const setting = {
  dots: false,
  arrows: false,
  centerPadding: '0px',
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  autoplay: true,
  autoplaySpeed: 3000,
};

const MediaGallery: React.FC<PropPropertyDetail> = ({ property, style }) => {
  const sliderRef = useRef<Slider | null>(null);

  const handlePrevClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNextClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const images = [
    {
      id: 1,
      path: `/assets/images/property-location/${pascalToKebab(
        property.location,
      )}/${property.slug}/1.png`,
    },
    {
      id: 2,
      path: `/assets/images/property-location/${pascalToKebab(
        property.location,
      )}/${property.slug}/2.png`,
    },
    {
      id: 3,
      path: `/assets/images/property-location/${pascalToKebab(
        property.location,
      )}/${property.slug}/3.png`,
    },
  ];

  return (
    <div className="media-gallery position-relative mt-0 xl-mt-10 lg-mt-10">
      {/* // <div className="hero-banner-three position-relative z-1 pt-50 lg-pt-50 pb-170 xl-pb-50 lg-pb-50"> */}
      <Slider {...setting} ref={sliderRef} className="media-slider-two">
        {images.map((gallery, i) => (
          <div key={i} className="item">
            <Image
              src={gallery.path}
              alt=""
              className="image-aja"
              width={100}
              height={100}
            />
          </div>
        ))}
      </Slider>
      <ul className="slider-arrows d-flex justify-content-between style-none">
        <li onClick={handlePrevClick} className="prev_c slick-arrow">
          <i className="bi bi-arrow-left"></i>
        </li>
        <li onClick={handleNextClick} className="next_c slick-arrow">
          <i className="bi bi-arrow-right"></i>
        </li>
      </ul>
    </div>
  );
};

export default MediaGallery;

{
  /* <div className="carousel-inner">
  {big_carousel.map((carousel, index) => (
    <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
      <div className="image-container">
        <Image
          src={`/assets/images/property-location/${pascalToKebab(
            property.location,
          )}/${property.slug}/${index + 1}.png`}
          alt=""
          fill
          className="image"
        />
      </div>
    </div>
  ))}
</div>; */
}
