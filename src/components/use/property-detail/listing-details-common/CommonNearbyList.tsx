interface DataType {
  title: string;
  count: string;
}
[];
import { PropPropertyDetail } from '@/libs/type/property.type';
const list_data: DataType[] = [
  { title: 'Hospital:', count: '1.7km' },
  { title: 'Shopping Mall:', count: '1.1km' },
  { title: 'Police Station:', count: '1.2km' },
  { title: 'Bus Station:', count: '1.1km' },
];

const CommonNearbyList: React.FC<PropPropertyDetail> = ({ property }) => {
  return (
    <>
      <h4 className="mb-20">What’s Nearby</h4>

      <ul className="style-none d-flex flex-wrap justify-content-between nearby-list-item">
        {property.nearby_new.map((list, i) => (
          <li key={i}>
            {list.title + ' :'}
            <span className="fw-500 color-dark">
              {list.value ? list.value : '1km'}
            </span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CommonNearbyList;
