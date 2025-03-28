import Image, { StaticImageData } from 'next/image';

import icon_1 from '@/assets/images/icon/icon_47.svg';
import icon_2 from '@/assets/images/icon/icon_48.svg';
import icon_3 from '@/assets/images/icon/icon_49.svg';
import icon_4 from '@/assets/images/icon/icon_50.svg';
import icon_5 from '@/assets/images/icon/icon_51.svg';
import icon_loc from '@/assets/images/icon/icon_10.svg';
import { PropPropertyDetail } from '@/libs/type/property.type';

interface DataType {
  id: number;
  icon: StaticImageData;
  title: string;
}
[];

const CommonPropertyOverview: React.FC<PropPropertyDetail> = ({ property }) => {
  return (
    <ul className="style-none d-flex flex-wrap align-items-center justify-content-between">
      {/* {property_overview_data.map((item) => (
        <li key={item.id}>
          <Image src={item.icon} alt="" className="lazy-img icon" />
          <span className="fs-20 color-dark">{item.title}</span>
        </li>
      ))} */}

      <li key={1}>
        <Image src={icon_1} alt="" className="lazy-img icon" />
        <span className="fs-20 color-dark">
          {property.spesification.property_size}
        </span>
      </li>

      <li key={2}>
        <Image src={icon_5} alt="" className="lazy-img icon" />
        <span className="fs-20 color-dark">{property.property_type}</span>
      </li>

      <li key={3}>
        <Image src={icon_loc} alt="" className="lazy-img icon" />

        <span className="fs-20 color-dark">{property.location}</span>
      </li>
    </ul>
  );
};

export default CommonPropertyOverview;
