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

export const CategoryData = [
  {
    id: 1,
    area: 'Jakarta Pusat',
    url_image:
      'https://res.cloudinary.com/servicebizimage/image/upload/v1745684894/Jardine%20Asia%20Pasific/Popular%20Location/gxqieczyqughgi60gc38.png',
  },
  {
    id: 2,
    area: 'Kuningan',
    url_image:
      'https://res.cloudinary.com/servicebizimage/image/upload/v1745684893/Jardine%20Asia%20Pasific/Popular%20Location/twvw9yjmlqdksssvypvw.png',
  },
  {
    id: 3,
    area: 'Bali Area',
    url_image:
      'https://res.cloudinary.com/servicebizimage/image/upload/v1745684894/Jardine%20Asia%20Pasific/Popular%20Location/gxqieczyqughgi60gc38.png',
  },
  {
    id: 4,
    area: 'Thamrin',
    url_image:
      'https://res.cloudinary.com/servicebizimage/image/upload/v1745684893/Jardine%20Asia%20Pasific/Popular%20Location/twvw9yjmlqdksssvypvw.png',
  },
  {
    id: 5,
    area: 'Sudirman',
    url_image:
      'https://res.cloudinary.com/servicebizimage/image/upload/v1745684894/Jardine%20Asia%20Pasific/Popular%20Location/gxqieczyqughgi60gc38.png',
  },
  {
    id: 6,
    area: 'SCBD',
    url_image:
      'https://res.cloudinary.com/servicebizimage/image/upload/v1745684893/Jardine%20Asia%20Pasific/Popular%20Location/twvw9yjmlqdksssvypvw.png',
  },
];

// className={`location-card-new position-relative z-1 d-flex align-items-center ${item.item_bg} md-h-[200px]`}
