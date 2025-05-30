'use client';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { Spin, Result } from 'antd';

import { officeDetail } from '@/redux/features/officeSlice';
import { PropSlug } from '@/libs/type/property.type';
import Error from '@/components/atoms/Error';

import { IProperty, ResponseAPI } from '@/libs/interfaces';

import ResultBody from '@/components/templates/ResultPropertyDetail';

import useSWR from 'swr';
import { fetcher } from '@/libs/utils/fetcher';
import { fetchApiPropertyDetail } from '@/api/property.api';

const PropertyDetail: React.FC<PropSlug> = ({ slug }) => {
  const dispatch = useDispatch();

  // const { data, error, isLoading } = useSWR<ResponseAPI<IProperty>>(
  //   `/api/property/${slug}`,
  //   fetcher,
  // );

  const [property, setProperty] = useState<any>();
  const [isLoading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchApiPropertyDetail(slug)
      .then((resp) => {
        console.log('res', resp);
        setProperty(resp.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log('error get articles', err);
        setError(err.message);
        setProperty(null);
        setLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="position-relative z-1">
        <div className="empty-section position-relative z-1 ">
          <Spin spinning={true} size="large">
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

  // Mengatur data ke Redux saat data tersedia
  if (property) {
    dispatch(officeDetail(property));
  } else {
    return (
      <div className="position-relative z-1">
        <Error />
      </div>
    );
  }

  if (error) {
    console.log('error fetch property detail', error);

    return (
      <div className="position-relative z-1">
        <Error />
      </div>
    );
  }

  return (
    <div className="position-relative z-1">
      <ResultBody />
    </div>
  );
};
export default PropertyDetail;
