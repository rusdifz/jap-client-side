import Image from 'next/image';

import { PropPropertyDetail } from '@/libs/type/property.type';

import icon_1 from '@/assets/images/icon/icon_47.svg';
import Link from 'next/link';

const CommonBanner: React.FC<PropPropertyDetail> = ({
  property,
  style_3,
}: any) => {
  return (
    <div className="row mt-50 ">
      <div className="col-lg-6">
        {/* <span className="fs-16" style={{ fontWeight: 700 }}>
              {property.property_type}
            </span>
            <div
              className={`list-type text-uppercase mt-15 me-3 ${
                style_3
                  ? 'bg-white text-dark fw-500'
                  : 'text-uppercase border-20'
              }`}
            >
              FOR LEASE
            </div> */}

        {/* <span className="address" style={{ fontWeight: 550 }}>
          {' '}
          {property.property_type} anjay
        </span> */}

        <div className="d-flex flex-wrap mt-10 mb-10">
          <div
            className={` position-relative overflow-hidden pt-1 list-type text-uppercase text-center me-3 ${
              style_3 ? 'bg-white text-dark fw-500' : 'text-uppercase border-20'
            }`}
          >
            {property.property_status}
          </div>

          {/* <span
            className="fs-19 ml-10 pt-10 justify-content"
            style={{ fontWeight: 700 }}
          >
            {property.property_type}
          </span> */}

          <div className="d-flex flex-wrap ml-10">
            <Image src={icon_1} alt="" className="lazy-img icon" />
          </div>
          <div className=" ml-10 pt-5">
            <span className="fs-20 color-dark">
              {property.spesification.property_size} sqm
            </span>
          </div>
        </div>

        {/* <h4 className="property-titlee mt-20">{property.name}</h4> */}

        <span className="property-title"> {property.name} </span>
        <div className="d-flex flex-wrap mt-10">
          <div className="address">
            <i className="bi bi-geo-alt"></i> {property.address}
          </div>
        </div>
      </div>
      <div className="col-lg-6 text-lg-end">
        <div className="d-inline-block md-mt-10">
          <div className="price color-dark fw-500" style={{ fontSize: '30px' }}>
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
