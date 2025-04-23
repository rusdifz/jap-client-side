import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Spin, Result } from 'antd';

import { officeDetail } from '@/redux/features/officeSlice';
import { PropSlug } from '@/libs/type/property.type';
import Error from '@/components/use/common/error';

// import FancyBanner from '@/components/common/FancyBanner';
// import FooterFour from '@/layouts/examples/footers/FooterFour';
// import Header from '@/layouts/use/headers/Header';

import { ResponseAPI, IProperty } from '@/libs/interfaces';
import { fetchApiPropertyDetail } from '@/api/property.api';

import ResultBody from './ResultBody';
// import FooterTwoUse from '@/layouts/use/footers/FooterTwo';

const PropertyDetail: React.FC<PropSlug> = ({ slug }) => {
  const dispatch = useDispatch();
  const [office, setOffice] = useState<IProperty>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchApiPropertyDetail(slug)
      .then((resp) => {
        resp.data.koordinat_map.replace(' ', '%20');
        setOffice(resp.data);
        dispatch(officeDetail(resp.data));
        setLoading(false);
      })
      .catch((err) => {
        setOffice(undefined);
        setLoading(false);
      });
  }, [slug]);
  // console.log('office', office);

  if (loading) {
    return (
      <div className="position-relative z-1">
        <div className="empty-section position-relative z-1 ">
          <Spin spinning={loading} size="large">
            <Result
              status="404"
              title=""
              subTitle="epmty please wait"
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
      {/* {loading && !office && (
        <div className="empty-section position-relative z-1 ">
          <Spin spinning={loading} size="large">
            <Result
              status="404"
              title=""
              subTitle="epmty please wait"
              className="min-h-screen h-500"
            />
          </Spin>
        </div>
      )}

      {!office ? <Error /> : <ResultBody />} */}
      <ResultBody />
    </div>

    //
  );
};
export default PropertyDetail;
