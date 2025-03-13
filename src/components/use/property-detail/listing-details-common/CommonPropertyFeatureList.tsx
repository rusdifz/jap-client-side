import { PropPropertyDetail } from '@/libs/type/property.type';
import property_feature_list from '@/data/inner-data/PropertyFeatureListData';
import Badge from '@/ui/badge/Badge';
import { Table, TableBody, TableCell, TableHeader, TableRow } from '@/ui/table';
import feature_data from '@/data/home-data/FeatureData';

const CommonPropertyFeatureList: React.FC<PropPropertyDetail> = ({
  property,
}) => {
  // const property_feature_list: DataType[] = [
  //   {
  //     id: 1,
  //     title: 'Property Details',
  //     feature_list: [
  //       { title: 'Property Size:', value: '03' },
  //       { title: 'Office Hour Weekday:', value: 'Semi furnished' },
  //       { title: 'Bathrooms:', value: '02' },
  //       { title: 'Year Built:', value: '2010' },
  //       { title: 'Floor:', value: 'Ground' },
  //       { title: 'Garage:', value: '03' },
  //       { title: 'Ceiling Height:', value: '3.2m' },
  //       { title: 'Property Type:', value: 'Apartment' },
  //       { title: 'Renovation:', value: '3.2m' },
  //       { title: 'Status:', value: 'For Sale' },
  //     ],
  //   },
  //   {
  //     id: 2,
  //     title: 'Nearby',
  //     feature_list: [
  //       {
  //         title: '',
  //         value: '',
  //       },
  //     ],
  //   },
  //   {
  //     id: 3,
  //     title: 'Amenities',

  //     feature_list: [
  //       {
  //         title: '',
  //         value: '',
  //       },
  //     ],
  //   },

  let listProperty: any = [
    {
      id: 1,
      title: 'Detail Description',
      feature_list: [
        { title: 'Office Hour Weekday:', value: '08.00 AM - 06.00 PM' },
        { title: 'Office Hour Weekend:', value: '08.00 AM - 01.00 PM' },
        { title: 'Year Built:', value: 1997 },
        { title: 'Number of Floor:', value: 20 },
        { title: 'Size Floor:', value: '900 Sqm' },
        { title: 'Property Type:', value: 'Office' },
        { title: 'Completion', value: '1997' },
      ],
    },
    {
      id: 2,
      title: 'Nearby',
    },
    {
      id: 3,
      title: 'Amenities',
      feature_list: [{ title: 'Property Size:', value: '03' }],
    },
    {
      id: 3,
      title: 'Available Units',
      feature_list: [{ title: 'Property Size:', value: '03' }],
    },
  ];

  listProperty = listProperty.map((dt: any) => {
    if (dt.id === 1) {
    } else if (dt.id === 2) {
      dt['feature_list'] = property.nearby_new;
    } else {
      // dt['feature_list'] = property.amenities.map
    }

    return dt;
  });
  console.log('list', listProperty);

  return (
    <div className="accordion" id="accordionTwo">
      {listProperty.map((item: any) => (
        <div key={item.id} className="accordion-item">
          <h2 className="accordion-header">
            <button
              className={`accordion-button ${item.id === 1 ? '' : 'collapsed'}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${item.id}`}
              aria-expanded="false"
              aria-controls={`collapse${item.id}`}
            >
              {item.title}
            </button>
          </h2>

          <div
            id={`collapse${item.id}`}
            className={`accordion-collapse collapse ${
              item.id === 1 ? 'show' : ''
            }`}
            data-bs-parent="#accordionTwo"
          >
            <div className="accordion-body">
              <div className="feature-list-two">
                {item.title === 'Amenities' ? (
                  <ul className="style-none d-flex flex-wrap justify-content-between list-style-two">
                    {property.amenities.map((list: any, i: number) => (
                      <li key={i}>{list}</li>
                    ))}
                  </ul>
                ) : (
                  <ul className="style-none d-flex flex-wrap justify-content-between">
                    {item.feature_list.map((list: any, i: number) => (
                      <li key={i}>
                        <span>{list.title} </span>{' '}
                        <span className="fw-500 color-dark">
                          {' '}
                          {list.value ? list.value : '1km'}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* <div key={1} className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#collapse${1}`}
            aria-expanded="false"
            aria-controls={`collapse${1}`}
          >
            Property Details
          </button>
        </h2>

        <div
          id={`collapse${1}`}
          className="accordion-collapse collapse show"
          data-bs-parent="#accordionTwo"
        >
          <div className="accordion-body">
            <div className="feature-list-two">
              <ul className="style-none d-flex flex-wrap justify-content-between">
                <li key={0}>
                  <span>Property Size </span>{' '}
                  <span className="fw-500 color-dark">
                    {property.spesification.property_size}
                  </span>
                </li>

                <li key={1}>
                  <span>Total Unit</span>{' '}
                  <span className="fw-500 color-dark">
                    {property.units.length}
                  </span>
                </li>

                <li key={2}>
                  <span>Year Built</span>{' '}
                  <span className="fw-500 color-dark">
                    {property.spesification.year_built}
                  </span>
                </li>

                <li key={3}>
                  <span>Parking Reserved Car</span>{' '}
                  <span className="fw-500 color-dark">
                    {property.price.parking_charge.reserved.car}
                  </span>
                </li>

                <li key={4}>
                  <span>Parking Reserved Motor</span>{' '}
                  <span className="fw-500 color-dark">
                    {property.price.parking_charge.reserved.motorcycle}
                  </span>
                </li>

                <li key={5}>
                  <span>Parking Unreserved Car</span>{' '}
                  <span className="fw-500 color-dark">
                    {property.price.parking_charge.unreserved.car}
                  </span>
                </li>

                <li key={6}>
                  <span>Parking Unreserved Motorcycle</span>{' '}
                  <span className="fw-500 color-dark">
                    {property.price.parking_charge.unreserved.motorcycle}
                  </span>
                </li>

                <li key={7}>
                  <span>property Hours Weekday</span>{' '}
                  <span className="fw-500 color-dark">
                    {property.spesification.office_hours_weekday}
                  </span>
                </li>

                <li key={7}>
                  <span>property Hours Weekend</span>{' '}
                  <span className="fw-500 color-dark">
                    {property.spesification.office_hours_weekend}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div> */}

      {/* <div key={2} className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#collapse${2}`}
            aria-expanded="false"
            aria-controls={`collapse${2}`}
          >
            Leasing Terms
          </button>
        </h2>

        <div
          id={`collapse${2}`}
          className="accordion-collapse collapse"
          data-bs-parent="#accordionTwo"
        >
          <div className="accordion-body">
            <div className="feature-list-two">
              <ul className="style-none d-flex flex-wrap justify-content-between">
                <li key={0}>
                  <span>Rate Unit </span>{' '}
                  <span className="fw-500 color-dark">
                    {property.units.length > 0
                      ? property.units[0].leasing_terms.rate_unit
                      : '200.000'}
                  </span>
                </li>

                <li key={1}>
                  <span>Rate Sqm</span>{' '}
                  <span className="fw-500 color-dark">
                    {property.units.length > 0
                      ? property.units[0].leasing_terms.rate_sqm
                      : '50'}{' '}
                    sqm
                  </span>
                </li>

                <li key={2}>
                  <span>Service Charge</span>{' '}
                  <span className="fw-500 color-dark">
                    {property.units.length > 0
                      ? property.units[0].leasing_terms.service_charge
                      : 'include/bulan'}
                  </span>
                </li>

                <li key={3}>
                  <span>Service Charge Info</span>{' '}
                  <span className="fw-500 color-dark">
                    {property.units.length > 0
                      ? property.units[0].leasing_terms.service_charge_info
                      : 'Electricity for lighting and AC is separately metered'}
                  </span>
                </li>

                <li key={4}>
                  <span>Security Deposit</span>{' '}
                  <span className="fw-500 color-dark">
                    {property.units.length > 0
                      ? property.units[0].leasing_terms.security_deposit
                      : 'Rp. 200.000'}
                  </span>
                </li>

                <li key={5}>
                  <span>Minimum Lease Terms</span>{' '}
                  <span className="fw-500 color-dark">
                    {property.units.length > 0
                      ? property.units[0].leasing_terms.minimum_lease_term
                      : 'Rp. 200.000'}
                  </span>
                </li>

                <li key={6}>
                  <span>Terms Of Payment</span>{' '}
                  <span className="fw-500 color-dark">
                    {property.units.length > 0
                      ? property.units[0].leasing_terms.term_of_payment
                      : 'Rp. 200.000'}
                  </span>
                </li>

                <li key={7}>
                  <span>Electricity Cost</span>{' '}
                  <span className="fw-500 color-dark">
                    {property.units.length > 0
                      ? property.units[0].leasing_terms.electricity_cost
                      : 'Rp. 200.000'}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div> */}
      {/* 
      {property.units.length > 0 && (
        <div key={3} className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${3}`}
              aria-expanded="false"
              aria-controls={`collapse${3}`}
            >
              Available Unit
            </button>
          </h2>

          <div
            id={`collapse${3}`}
            className="accordion-collapse collapse"
            data-bs-parent="#accordionTwo"
          >
            <div className="accordion-body">
              <div className="feature-list-two overflow-x-auto">
                <Table>
                  <TableHeader className="border border-t border-gray-300 border-y bg-gray-50 dark:border-white/[0.05] dark:bg-white/[0.05]">
                    <TableRow>
                      <TableCell
                        isHeader
                        className="px-1 text-start text-base font-medium text-gray-600 mr-10"
                      >
                        <center>Unit name</center>
                      </TableCell>

                      <TableCell
                        isHeader
                        className="px-5 py-3 text-start text-base font-medium text-gray-600 dark:text-white/90"
                      >
                        Size
                      </TableCell>

                      <TableCell
                        isHeader
                        className="px-5 py-3 text-start text-base font-medium text-gray-600 dark:text-white/90"
                      >
                        Condition
                      </TableCell>

                      <TableCell
                        isHeader
                        className="px-5 py-3 text-start text-base font-medium text-gray-600 dark:text-white/90"
                      >
                        Rent
                      </TableCell>

                      <TableCell
                        isHeader
                        className="px-5 py-3 text-start text-base font-medium text-gray-600 dark:text-white/90"
                      >
                        Type
                      </TableCell>

                      <TableCell
                        isHeader
                        className="px-4 py-3 text-start text-base font-medium text-gray-600 dark:text-white/90"
                      >
                        Availability
                      </TableCell>
                    </TableRow>
                  </TableHeader>

                  <TableBody className="border divide-y divide-gray-100 dark:divide-white/[0.05] border-b border-gray-50">
                    {property.units.map((item) => (
                      <TableRow key={item.unit_id}>
                        <TableCell className="px-1 py-3 text-gray-700 text-start text-theme-sm dark:text-gray-400 mr-20">
                          {item.unit_name}
                        </TableCell>

                        <TableCell className="px-5 py-3 text-gray-700 text-start text-theme-sm dark:text-gray-400">
                          {item.spesification.area_size}
                        </TableCell>

                        <TableCell className="px-5 py-3 text-gray-700 text-start text-theme-sm dark:text-gray-400">
                          {item.spesification.condition}
                        </TableCell>

                        <TableCell className="px-5 py-3 text-gray-700 text-start text-theme-sm dark:text-gray-400">
                          {item.leasing_terms.rate_unit}
                        </TableCell>

                        <TableCell className="px-5 py-3 text-gray-700 text-start text-theme-sm dark:text-gray-400">
                          <Badge
                            size="sm"
                            color={item.status === 'Lease' ? 'primary' : 'info'}
                          >
                            {item.status}
                          </Badge>
                        </TableCell>

                        <TableCell className="px-4 py-3 text-gray-700 text-start text-theme-sm dark:text-gray-400">
                          {item.available ? 'Available' : 'Rent'}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default CommonPropertyFeatureList;
