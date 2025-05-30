import { formatCurrency } from '@/libs/helper/convert-currency';
import { PropPropertyDetail } from '@/libs/type/property.type';

const Banner: React.FC<PropPropertyDetail> = ({ property }) => {
  return (
    <div className="row">
      <h3>{property.name}</h3>
      <div className="col-md-9">
        <div className="d-flex flex-wrap mt-10">
          <div className="list-type text-uppercase me-3 bg-white text-dark fw-500">
            FOR {property.property_status}
          </div>

          <div className="address">
            <i className="bi bi-geo-alt" /> {property.address}
            {/* <i className="bi bi-geo-alt" /> Jakarta Selatan */}
          </div>
        </div>
      </div>
      <div className="col-md-3 ms-auto">
        <div>
          Start From{' '}
          {formatCurrency(`Rp. ${property.price.rent_sqm.toString()}`)}
          /sqm/month
        </div>
      </div>
    </div>
  );
};

export default Banner;

{
  /* <div className="">
            <Image src={icon_1} alt="" className="lazy-img icon" />
          </div>
          <div className="ml-10">
            <span className="fs-20 color-dark">
              {property.spesification.property_size} sqm
              100 sqm
            </span>
          </div> */
}
