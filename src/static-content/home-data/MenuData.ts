interface MenuItem {
  id: number;
  title: string;
  class_name?: string;
  link: string;
  has_dropdown: boolean;
  sub_menus?: {
    link: string;
    title: string;
  }[];
  menu_column?: {
    id: number;
    mega_title: string;
    mega_menus: {
      link: string;
      title: string;
    }[];
  }[];
}
[];

const menu_data: MenuItem[] = [
  {
    id: 1,
    has_dropdown: false,
    title: 'Home',
    link: '/',
  },
  {
    id: 2,
    has_dropdown: false,
    title: 'Properties',
    link: '/properties',
    // link: '#',
  },
  {
    id: 3,
    has_dropdown: false,
    title: 'Articles',
    // link: '/articles',
    link: '#',
  },
  {
    id: 4,
    has_dropdown: true,
    title: 'Profile',
    link: '#',
    sub_menus: [
      {
        link: '#',
        // link: '/about-us',
        title: 'About Us',
      },
      {
        // link: '/service_details',
        link: '#',
        title: 'Our Service',
      },
    ],
  },
  {
    id: 5,
    has_dropdown: false,
    title: '+62-821-1178-2867',
    link: 'https://wa.me/6282111782867?text=Hello%20I%20need%20more%20information',
  },
];
export default menu_data;
