interface DataType {
  id: number;
  page: string;
  //   thumb: StaticImageData;
  thumb: string;
  title: string;
  desc: string;
}

const agent_data: DataType[] = [
  {
    id: 1,
    page: 'home_1',
    //  thumb: agentThumb_2,
    thumb: '/assets/images/default-image/activity/1.jpeg',
    title: '',
    desc: '',
  },
  {
    id: 2,
    page: 'home_1',
    //  thumb: agentThumb_3,
    thumb: '/assets/images/default-image/activity/3.jpeg',
    title: '',
    desc: '',
  },
  {
    id: 3,
    page: 'home_1',
    //  thumb: agentThumb_4,
    thumb: '/assets/images/default-image/activity/4.jpeg',
    title: '',
    desc: '',
  },
  {
    id: 4,
    page: 'home_1',
    //  thumb: agentThumb_5,
    thumb: '/assets/images/default-image/activity/5.jpeg',
    title: '',
    desc: '',
  },
];

export default agent_data;
