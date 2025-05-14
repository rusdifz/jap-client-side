'use client';

import Image, { StaticImageData } from 'next/image';
import Slider from 'react-slick';
import { useRef } from 'react';

import { PropPropertyDetail } from '@/libs/type/property.type';

import galleryThumb_1 from '@/assets/images/listing/img_57.jpg';
import galleryThumb_2 from '@/assets/images/listing/img_58.jpg';
import galleryThumb_3 from '@/assets/images/listing/img_59.jpg';
import galleryThumb_4 from '@/assets/images/listing/img_60.jpg';

const gallery_data: StaticImageData[] = [
  galleryThumb_1,
  galleryThumb_2,
  galleryThumb_3,
  galleryThumb_4,
];

const setting = {
  dots: false,
  infinite: true,
  arrows: false,
  centerPadding: '0px',
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  autoplay: true,
  autoplaySpeed: 2000,
};

const MediaGalleryMobile: React.FC<PropPropertyDetail> = ({ property }) => {
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

  return (
    <div className="media-gallery position-relative mt-30 mb-30 d-block d-lg-none">
      <Slider {...setting} ref={sliderRef} className="media-slider-two">
        {property.images.length > 0
          ? property.images.map((gallery, i) => (
              <div key={i} className="item">
                <img
                  src={gallery.full_url}
                  alt=""
                  className="w-100"
                  width={100}
                  height={100}
                />
              </div>
            ))
          : gallery_data.map((gallery, i) => (
              <div key={i} className="item">
                <Image src={gallery} alt="" className="w-100" />
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

export default MediaGalleryMobile;
