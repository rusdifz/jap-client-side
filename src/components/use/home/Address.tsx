import FaqTwo from '@/components/examples/common/faq/FaqTwo';
import Image from 'next/image';
import Link from 'next/link';

import faqShape from '@/assets/images/shape/shape_29.svg';
import footerLogo_1 from '@/assets/images/logo/logo_jap.png';
import footerShape_1 from '@/assets/images/shape/shape_46.svg';
import footerShape_2 from '@/assets/images/shape/shape_47.svg';
import footerIcon_1 from '@/assets/images/icon/icon_30.svg';
import footerIcon_2 from '@/assets/images/icon/icon_31.svg';
import footer_data from '@/data/home-data/FooterData';

interface ContentType {
  title: string;
  desc_1: string;
  desc_2: string;
  email: string;
  number: string;
  icon: string[];
  icon_link: string[];
}

const footer_content: ContentType = {
  title: 'Our Newsletter',
  desc_1: 'Get instant news by subscribe to our newsletter',
  desc_2:
    'World Trade Center, Level 11st Jl. Jendral Sudirman  Kav  29-31  Jakarta Selatan – Indonesia 12920',
  email: 'infosewakantorjakarta@gmail.com',
  number: '+62-821-1178-2867',
  icon: ['youtube', 'tiktok', 'instagram'],
  icon_link: [
    'https://youtube.com/@jakartasiaproperty?si=orvP7QZX4dc-k2ue',
    'https://www.tiktok.com/@sewakantorjakarta?_t=ZS-8uMvyc1aCsK&_r=1',
    'https://www.instagram.com/jakartaasiaproperty?igsh=MXB1OTRqYWZvenMzMA==',
  ],
};

const { title, desc_1, desc_2, email, number, icon, icon_link } =
  footer_content;

const Address = () => {
  return (
    <div className="fancy-banner-maps position-relative z-1 mt-50 xl-mt-120 mb-50">
      <div className="container">
        <div className="row">
          {}
          <div className="col-lg-6 wow fadeInLeft m-auto">
            <div className="title-footer-maps mb-40 lg-mb-20">
              <h4 className="font-garamond">Get In Touch With Us</h4>
              <p className="fs-13 pt-10">
                World Trade Center 5,
                <br />
                11th Floor
                <br />
                Jl. Jendral Sudirman Kav 29-31
                <br />
                Jakarta Selatan, Indonesia 12920
              </p>
              <ul className="style-none contact-info">
                <li className="d-flex align-items-center">
                  <Image src={footerIcon_1} alt="" width="20" />
                  <Link href="#">{email}</Link>
                </li>
                <li className="d-flex align-items-center">
                  <Image src={footerIcon_2} alt="" width="20" />
                  <Link href="https://wa.me/6282111782867?text=Hello%20I%20need%20more%20information">
                    {number}
                  </Link>
                </li>
              </ul>
              <ul className="style-none d-flex align-items-center social-icon">
                {icon.map((icon, i) => (
                  <li key={i}>
                    <Link
                      href={icon_link[i]}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className={`fa-brands fa-${icon}`}></i>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-lg-6 wow fadeInLeft m-auto">
            <iframe
              src={
                'https://maps.google.com/maps?hl=en&q=Jakarta Asia Property&t=&z=12&ie=UTF8&iwloc=B&output=embed'
              }
              //   width="600"
              //   height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              //   referrerPolicy="no-referrer-when-downgrade"
              className="footer-maps"
            />
          </div>
          {}
        </div>
      </div>
      {/* <Image src={faqShape} alt="" className="lazy-img shapes shape_01" /> */}
    </div>
  );
};

export default Address;
