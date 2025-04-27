'use client';

import { useSelector } from 'react-redux';
import { useState } from 'react';

import { selectOffice } from '@/redux/features/officeSlice';
import { IProperty } from '@/libs/interfaces';

import Amenities from '@/components/organisms/property-detail/Amenities';
import BannerTop from '@/components/organisms/property-detail/Banner';

import Location from '@/components/organisms/property-detail/Location';
import MediaGalleryDekstop from '@/components/organisms/property-detail/MediaGalleryDekstop';
import MediaGalleryMobile from '@/components/organisms/property-detail/MediaGalleryMobile';
import MediaVideoYoutube from '@/components/organisms/property-detail/MediaVideo';
import PropertyFeatures from '@/components/organisms/property-detail/PropertyFeatures';
import SimilarProperty from '@/components/organisms/property-detail/SimiliarProperty';
import TableUnit from '@/components/organisms/property-detail/TableUnit';

const DetailResultBody = () => {
  const office: IProperty = useSelector(selectOffice);

  function Description(htmlContent: any) {
    return (
      <div dangerouslySetInnerHTML={{ __html: htmlContent.htmlContent }} />
    );
  }

  const tab_title: string[] = ['Detail', 'Amenities', 'Location', 'Units'];

  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: any) => {
    setActiveTab(index);
  };

  const renderIconTabNav = (tabName: string) => {
    if (tabName.toLocaleLowerCase() === 'detail') {
      return <i className="bi bi-building-fill" />;
    } else if (tabName.toLocaleLowerCase() === 'amenities') {
      return <i className="bi bi-info-square" />;
    } else if (tabName.toLocaleLowerCase() === 'location') {
      return <i className="bi bi-geo-alt" />;
    } else {
      return <i className="bi bi-person-workspace" />;
    }
  };

  const renderContent = () => {
    if (activeTab === 0) {
      return <PropertyFeatures property={office} />;
    } else if (activeTab === 1) {
      return <Amenities property={office} />;
    } else if (activeTab === 2) {
      return <Location property={office} />;
    } else {
      return <TableUnit property={office} />;
    }
  };

  console.log('property detail', office);

  return (
    <div className="listing-details-one theme-details-one mt-120 lg-mt-100 pb-150 xl-pb-120">
      <div className="container">
        <BannerTop property={office} />
        <MediaGalleryDekstop property={office} />
        <MediaGalleryMobile property={office} />
        <div className="property-overview mb-30 bg-white border-10">
          <h4 className="mb-15">About {office.name}</h4>
          <Description htmlContent={office.description} />
        </div>

        <div>
          <nav className="pricing-nav-one d-flex justify-content-center">
            <div className="nav nav-tabs" role="tablist">
              {tab_title.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => handleTabClick(index)}
                  className={`nav-link ${activeTab === index ? 'active' : ''}`}
                  id="buy-tab"
                  type="button"
                >
                  {renderIconTabNav(tab)} {tab}
                </button>
              ))}
            </div>
          </nav>
        </div>

        {/* area content */}
        {renderContent()}

        {/* area video */}
        {office.url_youtube && (
          <div className="container">
            <div className="row border-top">
              <div className="col-lg-8">
                <MediaVideoYoutube property={office} />
              </div>
            </div>
          </div>
        )}

        {/* area similiar property by location */}
        <div className="container border-top mt-50">
          <SimilarProperty location={office.location} />
        </div>
      </div>
    </div>
  );
};

export default DetailResultBody;
