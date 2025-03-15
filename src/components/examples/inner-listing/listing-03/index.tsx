import FooterFour from "@/layouts/examples/footers/FooterFour";
import FancyBanner from "@/components/examples/common/FancyBanner";
import ListingThreeArea from "./ListingThreeArea";
import HeaderOne from "@/layouts/examples/headers/HeaderOne";

const ListingSix = () => {
  return (
    <>
      <HeaderOne style={true} />
      <ListingThreeArea style={false} />
      <FancyBanner />
      <FooterFour />
    </>
  );
};

export default ListingSix;
