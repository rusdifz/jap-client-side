import { LocationEnum, PropertyTypeEnum } from '@/libs/enums';

export const colThRowOne = [
  'No',
  'Name',
  'Address',
  'Koordinat Map',
  'Property Type',
  'Units',
  'Price',
  'Spesification',
  'Nearby',
  'Completion',
  'Amenities',
  'Actions',
];

export const colThPriceChild = [
  'Deposit',
  'Ground Floor',
  'Rent Sqm',
  'Overtime',
  'Service Charge',
  'Parking Charge',
];

export const colThOvertimePriceChild = ['Electricity', 'Lighting', 'AC'];

export const colThServiceChargeChild = ['Price', 'Info'];

export const colThParkingChild = [
  'Reserved Car',
  'Reserved Motorcycle',
  'Unreserved Car',
  'Unreserved Motorcycle',
];

export const colThSpecChild = [
  'Property Size',
  'Office Hours Weekday',
  'Office Hours Weekend',
  'Year Built',
  'Total Floor',
  'Size Floor',
  'Provider Internet',
];

export const colThUnitChild = [
  'Status',
  'Floor',
  'Size',
  'Condition',
  'Available',
  'Rent Sqm',
];

export const colThNearbyChild = ['Bus Station', 'Hospital', 'Police', 'Mall'];

export const resColSpan = (name: string) => {
  switch (name) {
    case 'Price':
      return 12;
    case 'Spesification':
      return colThSpecChild.length;
    case 'Nearby':
      return colThNearbyChild.length;
    case 'Units':
      return colThUnitChild.length;

    default:
      return 0;
  }
};

export const optionsProperty = Object.values(PropertyTypeEnum).map((prop) => {
  return { value: prop, text: prop };
});

export const optionsLocation = Object.values(LocationEnum).map((prop) => {
  return { value: prop, text: prop };
});

export const optionSort = [
  { value: 'newest', text: 'Newest' },
  { value: 'best_seller', text: 'Best Seller' },
  { value: 'best_match', text: 'Best Match' },
  { value: 'price_low', text: 'Price Low' },
  { value: 'price_high', text: 'Price High' },
];
