import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { officeDetail } from '@/redux/features/officeSlice';

import { PropSlug } from '@/libs/type/property.type';

import FancyBanner from '@/components/examples/common/FancyBanner';
import FooterFour from '@/layouts/examples/footers/FooterFour';
import Header from '@/layouts/use/headers/Header';

import { ResponseAPI, IProperty } from '@/libs/interfaces';

import { fetchApiPropertyDetail } from '@/api/property.api';

import ResultBody from './ResultBody';
import FooterTwoUse from '@/layouts/use/footers/FooterTwo';

const PropertyDetail: React.FC<PropSlug> = ({ slug }) => {
  const dispatch = useDispatch();
  const [office, setOffice] = useState<IProperty>();

  useEffect(() => {
    async function getOffice() {
      const resp: ResponseAPI<IProperty> = await fetchApiPropertyDetail(slug);

      if (resp.data) {
        resp.data.koordinat_map.replace(' ', '%20');
        setOffice(resp.data);
        dispatch(officeDetail(resp.data));
      }
    }
    getOffice();
  }, []);

  if (!office) {
    return (
      <>
        <Header style={true} />
        <div className="p-4 text-center">Loading...</div>
        <FooterFour />
      </>
    );
  }

  return (
    <>
      <Header style={true} />
      <ResultBody />
      {/* <FancyBanner /> */}
      {/* <FooterFour /> */}
      <FooterTwoUse />
    </>
  );
};

export default PropertyDetail;
