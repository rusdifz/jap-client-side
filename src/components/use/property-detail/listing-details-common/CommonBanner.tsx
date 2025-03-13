import Image from 'next/image';

import { PropPropertyDetail } from '@/libs/type/property.type';

import icon_1 from '@/assets/images/icon/icon_47.svg';
import Link from 'next/link';

const CommonBanner: React.FC<PropPropertyDetail> = ({
  property,
  style_3,
}: any) => {
  return (
    <div className="row">
      <div className="col-lg-6">
        <h3 className="property-titlee">{property.name}</h3>
        <div className="d-flex flex-wrap mt-10">
          <div
            className={`list-type text-uppercase mt-15 me-3 ${
              style_3 ? 'bg-white text-dark fw-500' : 'text-uppercase border-20'
            }`}
          >
            FOR LEASE
          </div>
          <div className="address mt-15">
            <i className="bi bi-geo-alt"></i> {property.address}
          </div>

          <div className="d-flex flex-wrap mt-10 ml-35">
            <Image src={icon_1} alt="" className="lazy-img icon" />
          </div>
          <div className="mt-15 ml-10">
            {/* <i className="bi bi-geo-alt"></i>{' '}
            {property.spesification.property_size} sqm */}
            {/* <Image src={icon_1} alt="" className="lazy-img icon" /> */}
            <span className="fs-20 color-dark">
              {property.spesification.property_size}
            </span>
          </div>
        </div>
      </div>
      <div className="col-lg-6 text-lg-end">
        <div className="d-inline-block md-mt-10">
          <div className="price color-dark fw-500">
            Rp. {property.price.rent_sqm}/sqm/month
          </div>
          {/* <div className="est-price fs-20 mt-25 mb-35 md-mb-30">
            Est. Payment{' '}
            <span className="fw-500 color-dark">
              Rp.{' '}
              {office.units.length > 0
                ? office.units[0].leasing_terms.rate_sqm
                : '200'}
              /mo*
            </span>
          </div> */}
          {/* <ul className="style-none d-flex align-items-right action-btns">
            <li className="me-auto fw-500 color-dark">
              <i className="fa-sharp fa-regular fa-share-nodes me-2"></i>
              Share
            </li>

            <li>
              <Link
                href="#"
                className={`d-flex align-items-center justify-content-center tran3s ${
                  style_3 ? '' : 'rounded-circle'
                }`}
              >
                <i className="fa-light fa-heart"></i>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className={`d-flex align-items-center justify-content-center tran3s ${
                  style_3 ? '' : 'rounded-circle'
                }`}
              >
                <i className="fa-light fa-bookmark"></i>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className={`d-flex align-items-center justify-content-center tran3s ${
                  style_3 ? '' : 'rounded-circle'
                }`}
              >
                <i className="fa-light fa-circle-plus"></i>
              </Link>
            </li>
          </ul> */}
        </div>
      </div>
    </div>
  );
};

export default CommonBanner;
