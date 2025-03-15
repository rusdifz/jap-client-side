import FooterFour from "@/layouts/examples/footers/FooterFour";
import HeaderFour from "@/layouts/examples/headers/HeaderFour";
import FancyBanner from "@/components/examples/common/FancyBanner";
import ListingEightArea from "./ListingEightArea";

const ListingEight = () => {
  return (
    <>
      <HeaderFour />
      <ListingEightArea style={false} />
      <FancyBanner />
      <FooterFour />
    </>
  );
};

export default ListingEight;
