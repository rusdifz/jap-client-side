// import Image from 'next/image';
// import Link from 'next/link';
// import icon_1 from '@/assets/images/icon/icon_47.svg';

import { PropPropertyDetail } from '@/libs/type/property.type';

const Banner: React.FC<PropPropertyDetail> = ({ property }: any) => {
  return (
    <div className="row">
      <h3>Wisma Nusantara</h3>
      <div className="col-md-9">
        <div className="d-flex flex-wrap mt-10">
          <div className="list-type text-uppercase me-3 bg-white text-dark fw-500">
            FOR SELL
          </div>

          <div className="address">
            {/* <i className="bi bi-geo-alt"/> {property.address} */}
            <i className="bi bi-geo-alt" /> Jakarta Selatan
          </div>
        </div>
      </div>
      <div className="col-md-3 ms-auto">
        <div>
          {/* <div className="">
            <Image src={icon_1} alt="" className="lazy-img icon" />
          </div>
          <div className="ml-10">
            <span className="fs-20 color-dark">
              {property.spesification.property_size} sqm
              100 sqm
            </span>
          </div> */}
          Start From Rp. 100/sqm/month
        </div>
      </div>
    </div>
  );
};

export default Banner;
