import FooterFour from "@/layouts/examples/footers/FooterFour";
import FancyBanner from "@/components/examples/common/FancyBanner";
import ListingElevenArea from "./ListingElevenArea";
import HeaderOne from "@/layouts/examples/headers/HeaderOne";

const ListingEleven = () => {
  return (
    <>
      <HeaderOne style={true} />
      <ListingElevenArea />
      <FancyBanner />
      <FooterFour />
    </>
  );
};

export default ListingEleven;
