'use client';
import Image from 'next/image';
import Link from 'next/link';
import Slider from 'react-slick';
import React, { useRef } from 'react';

import feature_data from '@/data/home-data/FeatureData';
import { CategoryLP } from '@/libs/dummy-data/category-landing-page';

// import ThamrinThumb from '@/assets/images/property-location/thamrin/menara-cakrawala/1.png';
import titleShape from '@/assets/images/shape/title_shape_02.svg';

const setting = {
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: '0',
  dots: false,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const SectionCategory = () => {
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
  console.log('catge', CategoryLP);

  return (
    <div className="block-feature-three mt-50 xl-mt-120">
      <div className="container">
        <div className="title-one text-center mb-50 xl-mb-10 md-mb-30 wow fadeInUp">
          <h3>
            Explore Popular{' '}
            <span>
              Location <Image src={titleShape} alt="" className="lazy-img" />
            </span>
          </h3>
        </div>

        <Slider
          {...setting}
          ref={sliderRef}
          className="property-location-slider-one"
        >
          {CategoryLP.map((item: any) => (
            <div key={item.id} className="item-first">
              <div
                className={`location-card-new position-relative z-1 d-flex align-items-end ${item.item_bg}`}
              >
                <div className="content text-center w-100 tran3s">
                  <h5 className="text-white fw-normal">{item.title}</h5>
                  <p className="text-white fw-light">{item.desc}</p>
                </div>
                <Link href="/listing_01" className="stretched-link"></Link>
              </div>
            </div>
          ))}
        </Slider>

        <ul className="slider-arrows slick-arrow-one d-flex justify-content-between style-none position-relative">
          <li onClick={handlePrevClick} className="prev_a slick-arrow">
            <i className="fa-sharp fa-light fa-angle-left"></i>
          </li>
          <li onClick={handleNextClick} className="next_a slick-arrow">
            <i className="fa-sharp fa-light fa-angle-right"></i>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SectionCategory;
