import FooterFour from "@/layouts/examples/footers/FooterFour";
import FancyBanner from "@/components/examples/common/FancyBanner";
import ListingTwoArea from "./ListingTwoArea";
import HeaderOne from "@/layouts/examples/headers/HeaderOne";

const ListingTwo = () => {
  return (
    <>
      <HeaderOne style={true} />
      <ListingTwoArea style={false} />
      <FancyBanner />
      <FooterFour />
    </>
  );
};

export default ListingTwo;
