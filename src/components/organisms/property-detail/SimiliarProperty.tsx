'use client';

import Image from 'next/image';
import Link from 'next/link';
import Slider from 'react-slick';
import useSWR from 'swr';
import { Spin, Result } from 'antd';

import { fetcher } from '@/libs/utils/fetcher';
import Error from '@/components/atoms/Error';

import property3Thumb_3 from '@/assets/images/listing/img_15.jpg';
import { IProperties, ResponseAPI } from '@/libs/interfaces';
import { useEffect, useState } from 'react';
import { ReqPropertiesDTO } from '@/libs/dto/request';
import { fetchApiProperties } from '@/api/property.api';
import { formatCurrency } from '@/libs/helper/convert-currency';

const setting = {
  dots: true,
  arrows: false,
  centerPadding: '0px',
  slidesToShow: 4,
  slidesToScroll: 2,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

interface Props {
  location: string;
}

const CommonSimilarProperty = ({ location }: Props) => {
  console.log('location prop', location);

  const url = `/api/property?page=1&limit=5&location=${location}`;

  // const { data, error, isLoading } = useSWR<ResponseAPI<IProperties[]>>(
  //   url,
  //   fetcher,
  // );

  const [isLoading, setLoading] = useState(true);
  const [propertiesSimiliar, setPropertiesSimiliar] = useState<any[]>([]);

  useEffect(() => {
    // setLocation(LocationEnum.THAMRIN);
    let propsFilter: ReqPropertiesDTO = {
      page: 1,
      limit: 12,
      location: location,
    };

    setLoading(true);
    fetchApiProperties(propsFilter)
      .then((resp) => {
        setLoading(false);
        setPropertiesSimiliar(resp.data);
      })
      .catch((err) => {
        console.log('error get initiate office list');
        setLoading(false);
        setPropertiesSimiliar([]);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="position-relative z-1">
        <div className="empty-section position-relative z-1 h-[]">
          <Spin spinning={true} size="small">
            <Result
              status="info"
              title="Memuat Data..."
              subTitle="Silakan tunggu sebentar"
              className="min-h-screen h-500"
            />
          </Spin>
        </div>
      </div>
    );
  }

  if (!propertiesSimiliar) {
    console.log('error fetch property detail');
    return (
      <div className="position-relative z-1">
        <Error />
      </div>
    );
  }

  return (
    <div className="similar-property mt-50">
      <h4 className="mb-40">Similar Property</h4>
      {propertiesSimiliar.length > 0 && (
        <Slider {...setting} className="similar-listing-slider-one">
          {propertiesSimiliar.map((item: IProperties) => (
            <div key={item.property_id} className="item">
              <div className="listing-card-one shadow style-three border-20 mb-50">
                <div className="img-gallery p-15">
                  <div className="position-relative border-20 overflow-hidden">
                    <div className="tag bg-white text-dark fw-500 border-20">
                      {item.property_status}
                    </div>
                    {/* <Image
                    // src={item.thumb ? item.thumb : ''}
                    src={property3Thumb_3}
                    className="w-100 border-10"
                    alt="..."
                  /> */}
                    <img
                      src={
                        item.images.length > 0
                          ? item.images[0].full_url
                          : '/assets/images/listing/img_15.jpg'
                      }
                      width={100}
                      height={100}
                      style={{ height: 220, width: 100 }}
                      className="w-100 border-10"
                      alt="..."
                    />
                    <Link
                      href={`/properties/${item.slug}`}
                      className="btn-four inverse rounded-circle position-absolute"
                    >
                      <i className="bi bi-arrow-up-right"></i>
                    </Link>
                  </div>
                </div>
                <div className="property-info pe-4 ps-4">
                  <Link
                    href={`/properties/${item.slug}`}
                    className="title tran3s"
                  >
                    {item.name}
                  </Link>
                  <div className="address m0 pb-5">{item.location}</div>
                  <div className="pl-footer m0 d-flex align-items-center justify-content-between">
                    {/* <strong className="price fw-500 color-dark">
                    Start from Rp. {item.price.rent_sqm}
                  </strong> */}
                    <p>
                      <b>
                        Start from{' '}
                        {formatCurrency(
                          `Rp. ${item.price.rent_sqm.toString()}`,
                        )}{' '}
                      </b>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default CommonSimilarProperty;
