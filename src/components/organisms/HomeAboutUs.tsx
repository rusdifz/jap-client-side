'use client';

import Image from 'next/image';
import Link from 'next/link';

import Faq from '@/components/use/common/Faq';
import Count from '@/components/common/Count';

import titleShape from '@/assets/images/shape/title_shape_03.svg';

const HomeSectionAboutUs = () => {
  return (
    <div className="bg-rusdi block-feature-thirteen pt-20 xl-pt-40 lg-pt-55 pb-70 xl-pb-25 lg-pb-25 mt-80 mb-20 xl-mb-30 xl-mt-50">
      <div className="position-relative z-1">
        <div className="container container-large">
          <div className="row">
            <div className="col-xl-5 col-lg-6 ms-auto order-lg-last wow fadeInRight">
              <div className="pb-5 xl-pb-50 position-relative z-1">
                {}
                <div className="title-one mb-55 lg-mb-20">
                  <h3>
                    Find Your{' '}
                    <span>
                      Perfect
                      <Image src={titleShape} alt="" className="lazy-img" />
                    </span>{' '}
                    Match Easily.
                  </h3>
                </div>
                <div className="accordion-style-three">
                  <div className="accordion" id="accordionThree">
                    <Faq />
                  </div>
                </div>
                <div className="d-inline-flex flex-wrap align-items-center mt-70 xl-mt-50 lg-mt-30">
                  <Link
                    href="/about-us"
                    className="btn-five md rounded-0 mt-20 me-5"
                  >
                    <span>More Details</span>
                  </Link>
                </div>
                {}
              </div>
            </div>
          </div>
        </div>

        <div className="media-gallery wow fadeInLeft">
          <div
            className="bg"
            style={{
              backgroundImage: `url(/assets/images/banner/banner-image-3.jpg)`,
            }}
          >
            <div className="card-style-three p0">
              <div className="bg-wrapper text-center">
                <h3>
                  <Count number={7} />+
                </h3>
                <p>
                  Years Experience <br />
                  with proud.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSectionAboutUs;
