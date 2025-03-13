// import { IOfficeDetail } from '@/libs/interfaces/property.interface';
import { PropPropertyDetail } from '@/libs/type/property.type';
import { selectOffice } from '@/redux/features/officeSlice';
import { useSelector } from 'react-redux';

const ammenities_data: string[] = [
  'A/C & Heating',
  'Garages',
  'Garden',
  'Disabled Access',
  'Swimming Pool',
  'Parking',
  'Wifi',
  'Pet Friendly',
  'Ceiling Height',
  'Fireplace',
  'Play Ground',
  'Elevator',
];

const CommonAmenities: React.FC<PropPropertyDetail> = ({ property }) => {
  return (
    <>
      <h4 className="mb-20">Amenities</h4>
      <p className="fs-20 lh-lg pb-25">
        Risk management & compliance, when approached strategically, have the
        potential
      </p>
      <ul className="style-none d-flex flex-wrap justify-content-between list-style-two">
        {property.amenities.map((list: any, i: number) => (
          <li key={i}>{list}</li>
        ))}
      </ul>
    </>
  );
};

export default CommonAmenities;
