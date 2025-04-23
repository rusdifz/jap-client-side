import { StaticImageData } from 'next/image';

import serviceIcon_1 from '@/assets/images/icon/icon_69.svg';
import serviceIcon_2 from '@/assets/images/icon/icon_70.svg';
import serviceIcon_3 from '@/assets/images/icon/icon_71.svg';

interface DataType {
  id: number;
  icon: string;
  title: string;
  desc: string;
  data_delay_time?: string;
}
[];

export const partnertData: DataType[] = [
  {
    id: 1,
    icon: '/assets/images/default-image/mebo-concept.jpeg',
    title: 'Mebo Concept ',
    desc: 'We are a company engaged in the planning and execution of Interior and Architectural design. We believe that every space built carries a certain ambiance that both influences and is influenced by the lives within it. Therefore, we are committed to creating spaces that bring life to their surroundings through art, functionality, and efficiency, resulting in beauty and comfort.',
  },
  {
    id: 2,
    icon: '/assets/images/default-image/jtc-corp.png',
    title: 'Tax Consultant',
    desc: `JTC Corp one of Indonesian professional’s Tax and Accounting consultants.  On the basis of professionalism and fast experiences in the Consultant industry, JTC Corp. offers commitment and dedication from a dynamic team of professionals and provides personalized services to our valued clients and customers covering all aspects of tax and accounting consultancies.
            From its strength in the scope of businesses and services, JTC Corp. aims to build up a solid reputation for quality consulting.`,
    data_delay_time: '0.1s',
  },
  {
    id: 3,
    icon: '/assets/images/default-image/mebo-concept.jpeg',
    title: 'Raz Developer',
    desc: `RAZ TECH is one of Indonesia’s professional IT consultants. Leveraging professionalism and extensive experience in the technology industry, RAZ TECH delivers unwavering commitment through a dynamic team of IT experts, offering tailored solutions for clients across all aspects of IT consultancy.
            With expertise in IT infrastructure, cybersecurity, and digital transformation, RAZ TECH is dedicated to building a solid reputation as a trusted partner for innovative, high-quality technology consulting services.`,
    data_delay_time: '0.2s',
  },
  //   {
  //     id: 4,
  //     page: 'service_1',
  //     icon: serviceIcon_1,
  //     title: 'Landed-Houses / Townhouses',
  //     btn: 'Buy Home',
  //     desc: 'Explore homy’s 2 million+ homes and uncover your ideal living space.',
  //   },
  //   {
  //     id: 5,
  //     page: 'service_1',
  //     icon: serviceIcon_2,
  //     title: 'Apartments / Condominium',
  //     btn: 'Rent Home',
  //     desc: "Discover a rental you'll love on homy, thanks to 35+ filters.",
  //     data_delay_time: '0.1s',
  //   },
  //   {
  //     id: 6,
  //     page: 'service_1',
  //     icon: serviceIcon_3,
  //     title: 'Property Managements',
  //     btn: 'Sell Home',
  //     desc: 'List, sell, thrive – with our top-notch real estate agency.',
  //     data_delay_time: '0.2s',
  //   },
];
