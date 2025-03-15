import FooterFour from "@/layouts/examples/footers/FooterFour";
import HeaderFour from "@/layouts/examples/headers/HeaderFour";
import FancyBanner from "@/components/examples/common/FancyBanner";
import ListingSevenArea from "./ListingSevenArea";

const ListingSix = () => {
  return (
    <>
      <HeaderFour />
      <ListingSevenArea style={false} />
      <FancyBanner />
      <FooterFour />
    </>
  );
};

export default ListingSix;
