import { PropPropertyDetail } from '@/libs/type/property.type';
import { selectOffice } from '@/redux/features/officeSlice';
import { useSelector } from 'react-redux';

const Amenities: React.FC<PropPropertyDetail> = ({ property }) => {
  return (
    <div className="mb-50 mt-50 bg-white shadow border-20 p-30 ">
      <h5 className="mb-20">Available Facilities</h5>
      <p className="fs-20 lh-lg pb-25">
        Risk management & compliance, when approached strategically, have the
        potential
      </p>
      <ul className="style-none d-flex flex-wrap justify-content-between list-style-two">
        {property.amenities.map((list: any, i: number) => (
          <li key={i}>{list}</li>
        ))}
      </ul>
    </div>
  );
};

export default Amenities;
