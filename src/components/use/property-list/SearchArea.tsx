'use client';

import { ChangeEvent, FormEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import NiceSelect from '@/ui/NiceSelect';
import titleShape from '@/assets/images/shape/title_shape_02.svg';
import bannerImg from '@/assets/images/assets/ils_07.svg';
import BannerImage from '@/assets/images/property-location/banner-image1.jpg';
import { LocationEnum, PropertyTypeEnum } from '@/libs/enums';

import SearchModalDropdown from './SearchModal';
import { optionsLocation, optionsProperty } from '@/libs/const';
import UseSearchOffice from '@/hooks/UseSearchOffice';

const SearchArea = () => {
  const {
    locationNew,
    officeType,
    selectedAmenitiesNew,
    keyword,
    handleLocationNewChange,
    handleOfficeTypeChange,
    handleAmenityNewChange,
    handleKeywordChange,
    handleSubmitForm,
    resetFilters,
  }: any = UseSearchOffice();

  return (
    <>
      <div className="inner-banner-one inner-banner bg-pink z-1 pt-160 lg-pt-140 pb-140 xl-pb-100 md-pb-80 position-relative">
        <div className="container">
          <div className="title-one text-center mb-55 xl-mb-30 lg-mb-20 wow fadeInUp">
            <h3 color="#F8F8FF">
              Find Your{' '}
              <span>
                Office
                {/* <Image src={titleShape} alt="" className="lazy-img" /> */}
              </span>
            </h3>
            <p className="fs-24 mt-xs">
              We’ve more than 100 commercial properties across Indonesia.
            </p>
          </div>

          <div className="row">
            <div className="col-xxl-10 m-auto">
              <div className="search-wrapper-one layout-one bg position-relative">
                <div className="bg-wrapper border-0">
                  <form onSubmit={handleSubmitForm}>
                    <div className="row gx-0 align-items-center">
                      {/* area option type */}
                      <div className="col-lg-4">
                        <div className="input-box-one border-left">
                          <div className="label">I’m looking to...</div>
                          <NiceSelect
                            className="nice-select"
                            options={optionsProperty}
                            defaultCurrent={0}
                            onChange={handleOfficeTypeChange}
                            name=""
                            placeholder=""
                          />
                        </div>
                      </div>

                      {/* area location type */}
                      <div className="col-xl-5 col-lg-4">
                        <div className="input-box-one border-left">
                          <div className="label">Location</div>
                          <NiceSelect
                            className="nice-select location"
                            options={optionsLocation}
                            defaultCurrent={0}
                            onChange={handleLocationNewChange}
                            name=""
                            placeholder=""
                          />
                        </div>
                      </div>

                      {/* area button search */}
                      <div className="col-xl-3 col-lg-4">
                        <div className="input-box-one md-mt-10">
                          <div className="d-flex align-items-center justify-content-center justify-content-lg-end">
                            <Link
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#advanceFilterModal"
                              className="search-modal-btn sm rounded-circle tran3s text-uppercase fw-500 d-inline-flex align-items-center justify-content-center me-3"
                            >
                              <i className="fa-light fa-sliders-up"></i>
                            </Link>

                            <button className="fw-500 text-uppercase tran3s search-btn w-auto m0">
                              Search
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Image
          src={BannerImage}
          alt=""
          className="lazy-img shapes w-100 illustration"
        />
      </div>

      <SearchModalDropdown
        locationNew={locationNew}
        officeType={officeType}
        selectedAmenitiesNew={selectedAmenitiesNew}
        keyword={keyword}
        handleLocationNewChange={handleLocationNewChange}
        handleOfficeTypeChange={handleOfficeTypeChange}
        handleAmenityNewChange={handleAmenityNewChange}
        handleKeywordChange={handleKeywordChange}
        resetFilters={resetFilters}
        handleSubmitForm={handleSubmitForm}
      />
    </>
  );
};

export default SearchArea;
