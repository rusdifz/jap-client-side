import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Spin, Result } from 'antd';

import { officeDetail } from '@/redux/features/officeSlice';
import { PropSlug } from '@/libs/type/property.type';
import Error from '@/components/use/common/error';

import { IProperty } from '@/libs/interfaces';
import { fetchApiPropertyDetail } from '@/api/property.api';

import ResultBody from './ResultBody';

const PropertyDetail: React.FC<PropSlug> = ({ slug }) => {
  const [office, setOffice] = useState<IProperty>();
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  // const office: IProperty = useSelector(selectOffice);
  useEffect(() => {
    fetchApiPropertyDetail(slug)
      .then((resp) => {
        resp.data.koordinat_map = resp.data.koordinat_map.replace(' ', '%20');
        setOffice(resp.data);
        dispatch(officeDetail(resp.data));
        setLoading(false);
      })
      .catch((err) => {
        console.error('Gagal memuat properti:', err);
        setOffice(undefined);
        setLoading(false);
      });
  }, [slug, dispatch]);

  if (loading) {
    return (
      <div className="position-relative z-1">
        <div className="empty-section position-relative z-1 ">
          <Spin spinning={loading} size="large">
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

  if (!loading && !office) {
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
