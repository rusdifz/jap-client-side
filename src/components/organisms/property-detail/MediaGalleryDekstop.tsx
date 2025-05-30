'use client';

import Fancybox from '@/components/moleculs/Fancybox';
import { IMedia } from '@/libs/interfaces';
import { PropPropertyDetail } from '@/libs/type/property.type';
import Image from 'next/image';

const MediaGalleryDekstop: React.FC<PropPropertyDetail> = ({ property }) => {
  console.log('props', property);

  const mainImage =
    property.images.length > 0
      ? property.images[0].full_url
      : 'https://www.sewakantor-update.com/wp-content/uploads/2018/04/Gama-Tower.jpg';

  const images: IMedia[] =
    property.images.length > 0 ? property.images.slice(1) : [];

  return (
    <div className="media-gallery-grid mb-40 mt-30 d-none d-lg-block">
      <div className="container">
        <div className="row">
          <div className="col-md-7 d-flex">
            <div className="position-relative w-100">
              <img
                alt=""
                className="media-bg rounded-3"
                src={mainImage}
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
                  {images.length > 0 ? (
                    images.map((dt, index) => (
                      <div key={index} className="col-6 mb-20">
                        <a
                          href={
                            dt.full_url ?? '/assets/images/listing/img_62.jpg'
                          }
                          className="media-bg rounded-3 w-100 "
                          data-fancybox
                          style={{
                            backgroundImage: dt.full_url
                              ? `url(${dt.full_url})`
                              : `url(/assets/images/listing/img_62.jpg)`,
                            // backgroundImage: `url(https://www.sewakantor-update.com/wp-content/uploads/2018/04/Gama-Tower.jpg)`,
                            height: '190px',
                          }}
                        />
                      </div>
                    ))
                  ) : (
                    <>
                      <div className="col-6 mb-20">
                        <a
                          href="/assets/images/listing/img_62.jpg"
                          className="media-bg rounded-3 w-100 "
                          data-fancybox
                          style={{
                            backgroundImage: `url(/assets/images/listing/img_62.jpg)`,
                            height: '190px',
                          }}
                        />
                      </div>
                      <div className="col-6">
                        <a
                          href="/assets/images/listing/img_63.jpg"
                          className="media-bg rounded-3"
                          data-fancybox
                          style={{
                            backgroundImage: `url(/assets/images/listing/img_63.jpg)`,
                            height: '190px',
                          }}
                        />
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
                        />
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
                        />
                      </div>
                    </>
                  )}
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
