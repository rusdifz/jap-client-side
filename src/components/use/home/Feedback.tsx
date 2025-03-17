'use client';

import Image from 'next/image';
import { Rating } from 'react-simple-star-rating';
// import Link from 'next/link';
import Slider from 'react-slick';
import { useRef } from 'react';

import { feedbackData } from '@/libs/dummy-data/feedback-data';

import titleShape_1 from '@/assets/images/shape/title_shape_01.svg';
import titleShape_2 from '@/assets/images/shape/shape_37.svg';
import feedbackShape_1 from '@/assets/images/shape/shape_42.svg';
import feedbackShape_2 from '@/assets/images/shape/shape_43.svg';

const setting = {
  dots: false,
  arrows: false,
  centerPadding: '0px',
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const Feedback = ({ style }: any) => {
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
    <div
      className={`feedback-section-four position-relative overflow-hidden z-1 pt-50 lg-pt-20 ${
        style ? '' : 'pb-110 lg-pb-80'
      }`}
    >
      <div className={`container ${style ? '' : 'container-large'}`}>
        <div className="position-relative z-1">
          <div className="row">
            <div className="col-xl-6 col-lg-8">
              <div className="title-one pe-xxl-5 mb-30 xl-mb-40 wow fadeInUp">
                <h3>
                  Client{' '}
                  <span>
                    Feedback{' '}
                    <Image src={titleShape_1} alt="" className="lazy-img" />
                  </span>
                </h3>
                <p className={`fs-20 mt-xs`}>
                  Client satisfaction speaks louder than our words. Hear from
                  them.
                </p>
              </div>
            </div>
          </div>

          <Slider {...setting} ref={sliderRef} className="feedback-slider-two">
            {feedbackData.map((item: any) => (
              <div key={item.id} className="item">
                <div className={`feedback-block-four ps-lg-4 pe-lg-4`}>
                  <div className="d-flex align-items-center">
                    <Image
                      src={item.thumb}
                      alt=""
                      className="rounded-circle avatar"
                    />
                    <div className="ps-3">
                      <h6 className="fs-20 m0">{item.title}</h6>
                      <span className="fs-16">{item.country}</span>
                    </div>
                  </div>
                  <blockquote>&quot;{item.desc}&quot;</blockquote>
                  <ul className="rating style-none d-flex">
                    <li>
                      <Rating initialValue={5} size={20} readonly={true} />
                    </li>
                  </ul>
                  <Image src={item.quote_icon} alt="" className="icon" />
                </div>
              </div>
            ))}
          </Slider>

          <ul className="slider-arrows slick-arrow-two d-flex justify-content-center style-none md-mt-30">
            <li onClick={handlePrevClick} className="prev_c slick-arrow">
              <i className="bi bi-arrow-left"></i>
            </li>
            <li onClick={handleNextClick} className="next_c slick-arrow">
              <i className="bi bi-arrow-right"></i>
            </li>
          </ul>
        </div>
      </div>
      {!style && (
        <>
          <Image
            src={feedbackShape_1}
            alt=""
            className="lazy-img shapes shape_01 wow fadeInDown"
            data-wow-delay="0.2s"
          />
          <Image
            src={feedbackShape_2}
            alt=""
            className="lazy-img shapes shape_02 wow fadeInUp"
          />
        </>
      )}
    </div>
  );
};

export default Feedback;
