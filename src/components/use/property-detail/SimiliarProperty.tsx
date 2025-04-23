'use client';

import property_data from '@/data/home-data/PropertyData';
import Image from 'next/image';
import Link from 'next/link';
import Slider from 'react-slick';

const setting = {
  dots: true,
  arrows: false,
  centerPadding: '0px',
  slidesToShow: 4,
  slidesToScroll: 2,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 2,
      },
    },
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
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const CommonSimilarProperty = () => {
  return (
    <div className="similar-property mt-50">
      <h4 className="mb-40">Similar Property</h4>
      <Slider {...setting} className="similar-listing-slider-one">
        {property_data
          .filter((items) => items.page == 'home_3_property_2')
          .map((item) => (
            <div key={item.id} className="item">
              <div
                className="listing-card-one shadow style-three border-20 mb-50"
                // style={{ height: '375px' }}
              >
                <div className="img-gallery p-15">
                  <div className="position-relative border-20 overflow-hidden">
                    <div className="tag bg-white text-dark fw-500 border-20">
                      {item.tag}
                    </div>
                    <Image
                      src={item.thumb ? item.thumb : ''}
                      className="w-100 border-10"
                      alt="..."
                    />
                    <Link
                      href="/listing_details_06"
                      className="btn-four inverse rounded-circle position-absolute"
                    >
                      <i className="bi bi-arrow-up-right"></i>
                    </Link>
                  </div>
                </div>
                <div className="property-info pe-4 ps-4">
                  <Link href="/listing_details_06" className="title tran3s">
                    {item.title}
                  </Link>
                  <div className="address m0 pb-5">{item.address}</div>
                  <div className="pl-footer m0 d-flex align-items-center justify-content-between">
                    <strong className="price fw-500 color-dark">
                      Rp. {item.price}
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default CommonSimilarProperty;
