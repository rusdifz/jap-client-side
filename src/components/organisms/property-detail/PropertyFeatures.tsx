import { PropPropertyDetail } from '@/libs/type/property.type';

const PropertyFeatures: React.FC<PropPropertyDetail> = ({ property }) => {
  return (
    <div className="property-feature mb-50 mt-50 bg-white shadow border-20 p-30 ">
      <h5 className="mb-20">Property Features</h5>
      <div className="accordion-style-two mt-45">
        <div className="feature-list-two">
          <ul className="style-none d-flex flex-wrap justify-content-between">
            {property.property_feature[0].feature_list.map(
              (list: any, i: number) => (
                <li key={i}>
                  <span>{list.title} </span>{' '}
                  <span className="fw-500 color-dark"> {list.value}</span>
                </li>
              ),
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PropertyFeatures;
