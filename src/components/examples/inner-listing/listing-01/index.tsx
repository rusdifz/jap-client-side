import FooterFour from "@/layouts/examples/footers/FooterFour";
import ListingOneArea from "./ListingOneArea";
import FancyBanner from "@/components/examples/common/FancyBanner";
import HeaderOne from "@/layouts/examples/headers/HeaderOne";

const ListingOne = () => {
  return (
    <>
      <HeaderOne style={true} />
      <ListingOneArea />
      <FancyBanner />
      <FooterFour />
    </>
  );
};

export default ListingOne;
