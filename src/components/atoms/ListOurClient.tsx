'use client';

import Image, { StaticImageData } from 'next/image';
import Slider from 'react-slick';

import client1 from '@/assets/images/client/akuo.jpeg';
import client2 from '@/assets/images/client/majoris2.png';
import client3 from '@/assets/images/client/nexter.png';
import client4 from '@/assets/images/client/sinarmas-land.png';
import client5 from '@/assets/images/client/tony-blair.png';
import client6 from '@/assets/images/client/westcon.png';
import client7 from '@/assets/images/client/Logo_Erajaya.png';
import client8 from '@/assets/images/client/logimark.png';
import client9 from '@/assets/images/client/ascendas.png';
import client10 from '@/assets/images/client/evonik.jpg';
import client11 from '@/assets/images/client/gudangkripto.png';
import client12 from '@/assets/images/client/lotteria.png';
import client13 from '@/assets/images/client/teltonika.webp';
import client14 from '@/assets/images/client/fwd.png';
import client15 from '@/assets/images/client/ideatax.png';

const clientData: StaticImageData[] = [
  client1,
  client2,
  client3,
  client4,
  client5,
  client6,
  client7,
  client8,
  client9,
  client10,
  client11,
  client12,
  client13,
  client14,
  client15,
];

const setting = {
  dots: false,
  arrows: false,
  centerPadding: '0px',
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};

const ListOurClient = () => {
  return (
    <Slider {...setting} className="partner-logo-one">
      {clientData.map((brand, i) => (
        <div key={i} className="item">
          <Image src={brand} alt="" />
        </div>
      ))}
    </Slider>
  );
};

export default ListOurClient;
