import Image from 'next/image';
import fancyShape from '@/assets/images/shape/shape_30.svg';
import Link from 'next/link';

const FancyBannerTwo = () => {
  return (
    <div className="fancy-banner-five position-relative z-1 pt-50 lg-pt-70 pb-110 lg-pb-70 mt-170 xl-mt-120 mt-50 xl-mt-120 mb-50">
      <div className="container">
        <div className="row">
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
              {/* <ul className="style-none contact-info">
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
              </ul> */}
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
          {/* <div className="col-xl-8 m-auto text-center">
                  <div className="title-one mb-40 lg-mb-20">
                     <h2 className="font-garamond fs-xl text-white">Any Inquiry? Feel free To contact Us.</h2>
                  </div>
                  <Link href="/contact" className="btn-nine text-uppercase"><span>SEND MESSAGE</span></Link>
               </div> */}
        </div>
      </div>
      {/* <Image src={fancyShape} alt="" className="lazy-img shapes shape_01" /> */}
    </div>
  );
};

export default FancyBannerTwo;
