'use client';

import Fancybox from '@/components/common/Fancybox';
import { PropPropertyDetail } from '@/libs/type/property.type';
import Image from 'next/image';

const MediaGalleryDekstop: React.FC<PropPropertyDetail> = ({ property }) => {
  return (
    <div className="media-gallery-grid mb-40 mt-30 d-none d-lg-block">
      <div className="container">
        <div className="row">
          <div className="col-md-7 d-flex">
            <div className="position-relative w-100">
              <img
                className="media-bg rounded-3"
                src="https://www.sewakantor-update.com/wp-content/uploads/2018/04/Gama-Tower.jpg"
                width={100}
                height={100}
                style={{
                  height: '400px',
                }}
              />
            </div>
          </div>

          <div className="col-md-5">
            <div>
              <Fancybox
                options={{
                  Carousel: {
                    infinite: true,
                  },
                }}
              >
                <div className="row">
                  <div className="col-6 mb-20 ">
                    <a
                      href="/assets/images/listing/img_62.jpg"
                      className="media-bg rounded-3 w-100 "
                      data-fancybox
                      style={{
                        backgroundImage: `url(/assets/images/listing/img_62.jpg)`,
                        height: '190px',
                      }}
                    ></a>
                  </div>
                  <div className="col-6 mb-20">
                    <a
                      href="/assets/images/listing/img_63.jpg"
                      className="media-bg rounded-3"
                      data-fancybox
                      style={{
                        backgroundImage: `url(/assets/images/listing/img_63.jpg)`,
                        height: '190px',
                      }}
                    ></a>
                  </div>
                  <div className="col-6">
                    <a
                      href="/assets/images/listing/img_64.jpg"
                      className="media-bg rounded-3"
                      data-fancybox
                      style={{
                        backgroundImage: `url(/assets/images/listing/img_64.jpg)`,
                        height: '190px',
                      }}
                    ></a>
                  </div>
                  <div className="col-6">
                    <a
                      href="/assets/images/listing/img_65.jpg"
                      className="media-bg rounded-3"
                      data-fancybox
                      style={{
                        backgroundImage: `url(/assets/images/listing/img_64.jpg)`,
                        height: '190px',
                      }}
                    ></a>
                  </div>
                </div>
              </Fancybox>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaGalleryDekstop;
