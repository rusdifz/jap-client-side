import Image from 'next/image';
import Link from 'next/link';

import fancyShape_1 from '@/assets/images/shape/shape_44.svg';
import fancyShape_2 from '@/assets/images/shape/shape_45.svg';
import CommonLocation from '../property-detail/listing-details-common/CommonLocation';

const BannerBottom = () => {
  return (
    <div className="row">
      <div className="col-xl-8">
        <div className="property-location mb-50">
          {/* <CommonLocation /> */}
          <div className="bg-white shadow4 border-20 p-30">
            <div className="map-banner overflow-hidden border-15">
              <div className="gmap_canvas h-100 w-100 flex auto">
                <iframe
                  src={
                    'https://maps.google.com/maps?hl=en&q=Jakarta Asia Property&t=&z=12&ie=UTF8&iwloc=B&output=embed'
                  }
                  width="200"
                  height="10000"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-90 h-100"
                />
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}

        {/* <div className="bg-wrapper position-relative z-1 pt-85 lg-pt-70 pb-100 xl-pb-80 lg-pb-70">
          <div className="row">
            <div className="col-xl-7 col-lg-8 col-md-10 m-auto text-center">
              <h2 className="font-garamond text-white">
                Find the right for your Office
              </h2>
              <p className="fs-24 text-white mt-30 mb-45 lg-mb-30">
                We’ve more than 1,000 commercial properties across Indonesia.
              </p>
              <Link href="/about_us_01" className="btn-two">
                <span>Get Started</span>
              </Link>
            </div>
          </div>
          <Image
            src={fancyShape_1}
            alt=""
            className="lazy-img shapes shape_01 wow fadeInLeft"
            data-wow-delay="0.2s"
          />
          <Image
            src={fancyShape_2}
            alt=""
            className="lazy-img shapes shape_02 wow fadeInRight"
          />
        </div> */}
      </div>
    </div>
  );
};

export default BannerBottom;
