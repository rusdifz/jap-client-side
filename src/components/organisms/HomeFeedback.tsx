'use client';

import Image from 'next/image';
import { Rating } from 'react-simple-star-rating';
import Slider from 'react-slick';
import { useEffect, useRef, useState } from 'react';

import defaultProfile from '@/assets/images/default-image/user/user_1.jpg';
import quoteIcon from '@/assets/images/icon/icon_29.svg';
import titleShape_1 from '@/assets/images/shape/title_shape_01.svg';
import feedbackShape_1 from '@/assets/images/shape/shape_42.svg';
import feedbackShape_2 from '@/assets/images/shape/shape_43.svg';

import { IFeedback } from '@/libs/interfaces';
import { fetchApiFeedbackList } from '@/api/feedback.api';

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

const HomeSectionFeedback = ({ style }: any) => {
  const [feedbacks, setFeedbacks] = useState<IFeedback[]>([]);

  useEffect(() => {
    fetchApiFeedbackList({ page: 1, limit: 5 })
      .then((resp) => {
        setFeedbacks(resp.data);
        console.log('res feedback', resp.data);
      })
      .catch((err) => {
        console.log('error get feedback', err);
        setFeedbacks([]);
      });
  }, []);

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

          {/* section feedback client */}
          <Slider {...setting} ref={sliderRef} className="feedback-slider-two">
            {feedbacks.map((item) => (
              <div key={item.feedback_id} className="item">
                <div className="feedback-block-four ps-lg-4 pe-lg-4">
                  <div className="d-flex align-items-center">
                    <Image
                      src={
                        item.profile_image && item.profile_image !== ''
                          ? item.profile_image
                          : '/assets/images/default-image/profile-default.jpg'
                      }
                      alt=""
                      className="rounded-circle avatar"
                      width={200}
                      height={200}
                    />

                    <div className="ps-3">
                      <h6 className="fs-20 m0">{item.profile_name}</h6>
                      <span className="fs-16"> Indonesia </span>
                    </div>
                  </div>

                  <blockquote>
                    &quot; {item.comment.replace('<p>', '').replace('</p>', '')}{' '}
                    &quot;
                  </blockquote>
                  <ul className="rating style-none d-flex">
                    <li>
                      <Rating initialValue={5} size={20} readonly={true} />
                    </li>
                  </ul>
                  <Image src={quoteIcon} alt="" className="icon" />
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

export default HomeSectionFeedback;
