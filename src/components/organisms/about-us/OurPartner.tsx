import Image from 'next/image';
import { partnertData } from '@/libs/static-content/our-partner-data';

const OurPartners = ({ style }: any) => {
  return (
    <div
      className={`block-feature-seventeen ${
        style ? 'dark-bg' : 'bg-rusdi'
      } position-relative z-1 pt-50 xl-pt-30 pb-50 xl-pb-30 item-center text-center justify-center"`}
    >
      <div className="container item-center text-center justify-center">
        <div className="row item-center text-center justify-center">
          <div className="col-xl-8 m-auto">
            <div className="title-one text-center item-center wow fadeInUp mb-30 lg-mb-20">
              <h3 className="text-center">Our Partner</h3>
            </div>
          </div>
        </div>
        <div className="row gx-xxl-5">
          {partnertData.map((item) => (
            <div
              key={item.id}
              className="col-lg-3  d-flex mt-40 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              {/* items-center justify-center text-center */}
              <div className="card-style-ten ">
                <Image
                  // src="/assets/images/default-image/mebo-concept.jpeg"
                  src={item.icon}
                  alt=""
                  className=""
                  width={100}
                  height={100}
                  style={{ maxWidth: 200, width: '150px', height: '150px' }}
                />

                <div className="mt-30">
                  <h6>{item.title}</h6>
                  <p>{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurPartners;
