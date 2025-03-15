import HeaderOne from "@/layouts/examples/headers/HeaderOne";
import ListingDetailsOneArea from "./ListingDetailsOneArea";
import FancyBanner from "@/components/examples/common/FancyBanner";
import FooterFour from "@/layouts/examples/footers/FooterFour";

const ListingDetailsOne = () => {
  return (
    <>
      <HeaderOne style={true} />
      <ListingDetailsOneArea />
      <FancyBanner />
      <FooterFour />
    </>
  );
};

export default ListingDetailsOne;
