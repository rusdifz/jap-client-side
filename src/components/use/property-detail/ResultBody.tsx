'use client';

import { useSelector } from 'react-redux';
import { selectOffice } from '@/redux/features/officeSlice';
import NiceSelect from '@/ui/NiceSelect';
import MediaGallery from './MediaGallery';
import Review from '@/components/examples/inner-pages/agency/agency-details/Review';
import Sidebar from './Sidebar';

import BannerTop from './listing-details-common/CommonBanner';
import CommonPropertyOverview from './listing-details-common/CommonPropertyOverview';
import CommonPropertyFeatureList from './listing-details-common/CommonPropertyFeatureList';
import CommonAmenities from './listing-details-common/CommonAmenities';
import CommonPropertyVideoTour from './listing-details-common/CommonPropertyVideoTour';
import CommonPropertyFloorPlan from './listing-details-common/CommonPropertyFloorPlan';
import CommonNearbyList from './listing-details-common/CommonNearbyList';
import CommonSimilarProperty from './listing-details-common/CommonSimilarProperty';
import CommonProPertyScore from './listing-details-common/CommonProPertyScore';
import CommonLocation from './listing-details-common/CommonLocation';
import CommonReviewForm from './listing-details-common/CommonReviewForm';

// import { IOfficeDetail } from '@/libs/interfaces/property.interface';
import { IProperty } from '@/libs/interfaces';
const DetailResultBody = () => {
  const office: IProperty = useSelector(selectOffice);

  return (
    <div className="listing-details-one theme-details-one bg-pink pt-180 lg-pt-150 pb-150 xl-pb-120">
      <div className="container">
        <MediaGallery property={office} />

        <BannerTop property={office} />

        {/* <div className="property-feature-list bg-white shadow4 border-20 p-40 mt-50 mb-60">
          <h4 className="sub-title-one mb-40 lg-mb-20">Property Overview</h4>
          <CommonPropertyOverview property={office} />
        </div> */}

        {/* <div className="row">  */}
        {/* <div className="col-xl-8 mt-80"> */}
        <div className="col-xl-12 mt-80 flex">
          <div className="property-overview mb-50 bg-white shadow4 border-20 p-40">
            <h4 className="mb-20">Description</h4>
            <p className="fs-20 lh-lg">{office?.description}</p>
          </div>

          <div className="property-feature-accordion bg-white shadow4 border-20 p-40 mb-50">
            <h4 className="mb-20">Property Features</h4>
            {/* <p className="fs-20 lh-lg">
                Risk management and compliance, when approached strategically,
                have the potential to go beyond mitigating threats.
              </p> */}
            <div className="accordion-style-two mt-45">
              <CommonPropertyFeatureList property={office} />
            </div>
          </div>

          {/* <div className="property-amenities bg-white shadow4 border-20 p-40 mb-50">
            <CommonAmenities property={office} />
          </div> */}

          {/* <div className="property-video-tour mb-50">
            <CommonPropertyVideoTour />
          </div> */}

          {/* <CommonPropertyFloorPlan style={false} /> */}

          {/* <div className="property-nearby bg-white shadow4 border-20 p-40 mb-50">
            <CommonNearbyList property={office} />
          </div> */}

          {/* <CommonSimilarProperty /> */}
          {/* <div className="property-score bg-white shadow4 border-20 p-40 mb-50">
              <CommonProPertyScore />
            </div> */}

          <div className="property-location mb-50">
            <CommonLocation property={office} />
          </div>

          {/* <div className="review-panel-one bg-white shadow4 border-20 p-40 mb-50">
              <div className="position-relative z-1">
                <div className="d-sm-flex justify-content-between align-items-center mb-10">
                  <h4 className="m0 xs-pb-30">Reviews</h4>
                  <NiceSelect
                    className="nice-select"
                    options={[
                      { value: '01', text: 'Newest' },
                      { value: '02', text: 'Best Seller' },
                      { value: '03', text: 'Best Match' },
                    ]}
                    defaultCurrent={0}
                    onChange={selectHandler}
                    name=""
                    placeholder=""
                  />
                </div>
                <Review style={true} />
              </div>
            </div>
            <div className="review-form bg-white shadow4 border-20 p-40">
              <CommonReviewForm />
            </div> */}
        </div>
        {/* <Sidebar /> */}
      </div>
      {/* </div> */}
    </div>
  );
};

export default DetailResultBody;
