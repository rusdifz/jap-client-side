// import { StaticImageData } from 'next/image';

// import agentThumb_1 from '@/assets/images/default-image/activity/1.jpeg';
// import agentThumb_2 from '@/assets/images/default-image/activity/2.jpeg';
// import agentThumb_3 from '@/assets/images/default-image/activity/3.jpeg';
// import agentThumb_4 from '@/assets/images/default-image/activity/4.jpeg';
// import agentThumb_5 from '@/assets/images/default-image/activity/5.jpeg';

interface DataType {
  id: number;
  page: string;
  //   thumb: StaticImageData;
  thumb: string;
  title: string;
  desc: string;
}

const agent_data: DataType[] = [
  //   {
  //     id: 1,
  //     page: 'home_1',
  //     //  thumb: agentThumb_1,
  //     thumb: '/assets/images/default-image/activity/1.jpeg',
  //     title: 'Mark Filo',
  //     desc: 'CEO & Founder',
  //   },
  {
    id: 2,
    page: 'home_1',
    //  thumb: agentThumb_2,
    thumb: '/assets/images/default-image/activity/2.jpeg',
    title: 'Chris Matial',
    desc: 'Retailer',
  },
  {
    id: 3,
    page: 'home_1',
    //  thumb: agentThumb_3,
    thumb: '/assets/images/default-image/activity/3.jpeg',
    title: 'Jubayer Al Hasan',
    desc: 'Marketing Expert',
  },
  {
    id: 4,
    page: 'home_1',
    //  thumb: agentThumb_4,
    thumb: '/assets/images/default-image/activity/4.jpeg',
    title: 'Jannatul Ferdaus',
    desc: 'Broker',
  },
  {
    id: 5,
    page: 'home_1',
    //  thumb: agentThumb_5,
    thumb: '/assets/images/default-image/activity/5.jpeg',
    title: 'Chris Matial',
    desc: 'Broker',
  },
  //   {
  //     id: 6,
  //     page: 'home_1',
  //     //  thumb: agentThumb_5,
  //     thumb: '/assets/images/default-image/activity/6.jpeg',
  //     title: 'Chris Matial',
  //     desc: 'Broker',
  //   },
];

export default agent_data;
