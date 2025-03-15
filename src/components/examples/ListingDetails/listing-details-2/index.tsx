import HeaderOne from "@/layouts/examples/headers/HeaderOne";
import ListingDetailsTwoArea from "./ListingDetailsTwoArea";
import FancyBanner from "@/components/examples/common/FancyBanner";
import FooterFour from "@/layouts/examples/footers/FooterFour";

const ListingDetailsOne = () => {
  return (
    <>
      <HeaderOne style={true} />
      <ListingDetailsTwoArea />
      <FancyBanner />
      <FooterFour />
    </>
  );
};

export default ListingDetailsOne;
