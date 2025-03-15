import FooterFour from "@/layouts/examples/footers/FooterFour";
import FancyBanner from "@/components/examples/common/FancyBanner";
import ListingFourArea from "./ListingFourArea";
import HeaderOne from "@/layouts/examples/headers/HeaderOne";

const ListingSix = () => {
  return (
    <>
      <HeaderOne style={true} />
      <ListingFourArea />
      <FancyBanner />
      <FooterFour />
    </>
  );
};

export default ListingSix;
