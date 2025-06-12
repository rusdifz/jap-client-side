'use client';

import Link from 'next/link';
import Slider from 'react-slick';
import React, { useRef, useEffect, useState } from 'react';

import { fetchApiMasterLocation } from '@/api/master-location.api';
import { Skeleton } from 'antd';

const setting = {
  infinite: true,
  speed: 300,
  slidesToShow: 6,
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

const HomeSectionCategory = () => {
  const [popularLocations, setPopularLocation] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const dataLoad = Array.from({ length: 6 }, (_, i) => i + 1);

  useEffect(() => {
    fetchApiMasterLocation()
      .then((resp) => {
        setPopularLocation(resp.data);
        setLoading(false);
        console.log('res popular location', resp.data);
      })
      .catch((err) => {
        console.log('error get feedback', err);
        setPopularLocation([]);
        setLoading(false);
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
    <div className="block-feature-three mt-40 xl-mt-100 md-mt-20">
      {loading && (
        <div className="container">
          <div className="title-one text-center mb-20 xl-mb-10 md-mb-30 wow fadeInUp">
            <h4>Explore Popular Location</h4>
          </div>

          <Slider
            {...setting}
            ref={sliderRef}
            className="property-location-slider-one width-50"
          >
            {dataLoad.map((_, index) => (
              <div key={index} className="item-first">
                <div
                  className="location-card-new position-relative z-1 d-flex align-items-center md-h-[200px]"
                  style={{
                    height: '300px',
                    backgroundImage: '',
                  }}
                >
                  <div className="content text-center w-100 tran3s">
                    <Skeleton active />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      )}

      {popularLocations.length > 0 && (
        <div className="container">
          <div className="title-one text-center mb-20 xl-mb-10 md-mb-30 wow fadeInUp">
            <h4>Explore Popular Location</h4>
          </div>
          <Slider
            {...setting}
            ref={sliderRef}
            className="property-location-slider-one width-50"
          >
            {popularLocations.map((item: any) => (
              <div key={item.id} className="item-first">
                <div
                  className={`location-card-new position-relative z-1 d-flex align-items-center md-h-[200px] lazy-img`}
                  style={{
                    height: '300px',
                    // width: '200px',
                    backgroundImage:
                      item.url_image && item.url_image !== ''
                        ? `url(${item.url_image})`
                        : `url(https://res.cloudinary.com/servicebizimage/image/upload/v1745684894/Jardine%20Asia%20Pasific/Popular%20Location/gxqieczyqughgi60gc38.png)`,
                  }}
                >
                  <div className="content text-center w-100 tran3s">
                    <h5 className="text-white font-garamond fw-normal">
                      {item.location_name}
                    </h5>
                  </div>
                  <Link
                    href={`/properties?location=${item.location_name}`}
                    className="stretched-link"
                  ></Link>
                </div>
              </div>
            ))}
          </Slider>

          {popularLocations.length > 6 && (
            <ul className="slider-arrows slick-arrow-one d-flex justify-content-between style-none position-relative">
              <li onClick={handlePrevClick} className="prev_a slick-arrow">
                <i className="fa-sharp fa-light fa-angle-left"></i>
              </li>
              <li onClick={handleNextClick} className="next_a slick-arrow">
                <i className="fa-sharp fa-light fa-angle-right"></i>
              </li>
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default HomeSectionCategory;
