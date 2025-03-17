import HeaderOne from '@/layouts/use/headers/HeaderProperties';
import ListBody from './ListBody';
import FancyBanner from '@/components/examples/common/FancyBanner';
import FooterFour from '@/layouts/examples/footers/FooterFour';

const ListProperty = () => {
  return (
    <>
      {/* <HeaderOne style={true} /> */}
      <ListBody />
      <FancyBanner />
      {/* <FooterFour /> */}
    </>
  );
};

export default ListProperty;
