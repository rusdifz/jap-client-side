import { LocationEnum } from '../enums';

export const Contoh = [
  {
    id: 1,
    page: 'home_1_feature_2',
    item_bg: 'card-1',
    title: 'Kelowna',
    desc: '1,230 Properties',
  },
];

export const CategoryLP = Object.values(LocationEnum).map((location, index) => {
  const id = index + 1;
  return {
    id,
    title: location + ' Area',
    item_bg: `card-${id}`,
    desc: '',
  };
});
