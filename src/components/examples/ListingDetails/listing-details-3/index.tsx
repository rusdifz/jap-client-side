import HeaderOne from "@/layouts/examples/headers/HeaderOne";
import ListingDetailsThreeArea from "./ListingDetailsThreeArea";
import FancyBanner from "@/components/examples/common/FancyBanner";
import FooterFour from "@/layouts/examples/footers/FooterFour";

const ListingDetailsThree = () => {
  return (
    <>
      <HeaderOne style={true} />
      <ListingDetailsThreeArea />
      <FancyBanner />
      <FooterFour />
    </>
  );
};

export default ListingDetailsThree;
