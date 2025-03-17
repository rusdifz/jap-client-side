'use client';
import Image from 'next/image';
import Link from 'next/link';
import Slider from 'react-slick';
import React, { useRef } from 'react';

import { CategoryLP } from '@/libs/dummy-data/category-landing-page';

import titleShape from '@/assets/images/shape/title_shape_02.svg';

const setting = {
  // width: '50px',
  // height: '100px',
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
    <div className="block-feature-three mt-40 xl-mt-100">
      <div className="container">
        <div className="title-one text-center mb-20 xl-mb-10 md-mb-30 wow fadeInUp">
          <h4>Explore Popular Location</h4>
        </div>

        <Slider
          {...setting}
          ref={sliderRef}
          className="property-location-slider-one width-50"
        >
          {CategoryLP.map((item: any) => (
            <div key={item.id} className="item-first">
              <div
                className={`location-card-new position-relative z-1 d-flex align-items-end ${item.item_bg}`}
              >
                <div className="content text-center w-100 tran3s">
                  <h5 className="text-white font-garamond fw-normal">
                    {item.title}
                  </h5>
                  <p className="text-white font-garamondt fw-light">
                    {item.desc}
                  </p>
                </div>
                <Link href="/properties" className="stretched-link"></Link>
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
