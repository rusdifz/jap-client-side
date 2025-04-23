import ListOurClient from '../common/ListBrand';

const OurClient = () => {
  return (
    <div className="partner-section-one mt-60">
      <div className="container">
        <h6 className="text-center fs-20 mb-10 lg-mb-20">
          50+ Company trusted by us.
        </h6>
      </div>
      <div className="bg-wrapper bg-white">
        <div className="container">
          <ListOurClient />
        </div>
      </div>
    </div>
  );
};

export default OurClient;
