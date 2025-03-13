interface DataType {
  id: number;
  title: string;
  feature_list: {
    title: string;
    value: string;
  }[];
}
[];

// "spesification": {
//             "property_size": "200 m² - 1343 m²",
//             "office_hours_weekday": "08.00 AM - 05.00 PM WIB",
//             "office_hours_weekend": null,
//             "year_built": 2015
//         },

const property_feature_list: DataType[] = [
  {
    id: 1,
    title: 'Property Details',
    feature_list: [
      { title: 'Property Size:', value: '03' },
      { title: 'Office Hour Weekday:', value: 'Semi furnished' },
      { title: 'Bathrooms:', value: '02' },
      { title: 'Year Built:', value: '2010' },
      { title: 'Floor:', value: 'Ground' },
      { title: 'Garage:', value: '03' },
      { title: 'Ceiling Height:', value: '3.2m' },
      { title: 'Property Type:', value: 'Apartment' },
      { title: 'Renovation:', value: '3.2m' },
      { title: 'Status:', value: 'For Sale' },
    ],
  },
  {
    id: 2,
    title: 'Nearby',
    feature_list: [
      {
        title: '',
        value: '',
      },
    ],
  },
  {
    id: 3,
    title: 'Amenities',

    feature_list: [
      {
        title: '',
        value: '',
      },
    ],
  },
  //   {
  //     id: 2,
  //     title: 'Unit Available',
  //     feature_list: [
  //       {
  //         title: '',
  //         value: '',
  //       },
  //     ],
  //   },
  // {
  //    id: 3,
  //    title: "Outdoor Features",
  //    feature_list: [
  //       { title: "Garage:", value: "Yes", },
  //       { title: "Parking:", value: "Yes", },
  //       { title: "Garden:", value: "30m2", },
  //       { title: "Disabled Access:", value: "Ramp", },
  //       { title: "Swimming Pool:", value: "--", },
  //       { title: "Fence:", value: "--", },
  //       { title: "Security:", value: "3 Cameras", },
  //       { title: "Pet Friendly:", value: "Yes", },
  //    ],
  // }
];

export default property_feature_list;
