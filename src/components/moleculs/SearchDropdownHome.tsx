'use client';

import NiceSelect from '@/ui/NiceSelect';
import { useState } from 'react';

import {
  optionsLocation,
  optionsProperty,
  optionsPropertyStatus,
} from '@/libs/const';

import UseSearchOffice from '@/hooks/UseSearchOffice';
import { useRouter } from 'next/router';
// const router = useRouter();

const SearchDropdownHome = () => {
  const { setLocation, setOfficeType, setPropertyStatus, setKeyword } =
    UseSearchOffice();

  const handleSubmitFormNew = () => {
    // router.push('/properties');
    window.location.href = '/properties';
  };

  return (
    <>
      <div className="search-wrapper-one layout-two mt-150 xl-mt-150 lg-mt-100 position-relative wow fadeInUp">
        <div className="bg-wrapper border-1 rounded-3 m-auto">
          <div className="tab-content">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                // searchHandler(e);
                handleSubmitFormNew();
              }}
            >
              <div className="row gx-0 align-items-center">
                <div className="col-xl-2 col-lg-3 col-md-6">
                  <div className="input-box-one border-left border-lg-0">
                    <div className="labelNew">Search Keyword</div>
                    <input
                      type="text"
                      placeholder="search here..."
                      className="type-input"
                      name="keyword"
                      onChange={(e) => {
                        setKeyword(e.target.value);
                      }}
                    />
                  </div>
                </div>

                <div className="col-xl-3 col-lg-3">
                  <div className="input-box-one border-left">
                    <div className="labelNew">I’m looking to...</div>
                    <NiceSelect
                      className="nice-select fw-normal"
                      options={optionsProperty}
                      defaultCurrent={1}
                      onChange={(e) => {
                        setOfficeType(e.target.value);
                      }}
                      name="select"
                      placeholder=""
                    />
                  </div>
                </div>

                {/* area type property */}
                <div className="col-xl-2 col-lg-3">
                  <div className="input-box-one border-left">
                    <div className="labelNew">Property Type</div>
                    <NiceSelect
                      className="nice-select fw-normal"
                      options={optionsPropertyStatus}
                      defaultCurrent={0}
                      onChange={(e) => {
                        setPropertyStatus(e.target.value);
                      }}
                      name=""
                      placeholder=""
                    />
                  </div>
                </div>

                {/* area type location */}
                <div className="col-xl-2 col-lg-3">
                  <div className="input-box-one border-left">
                    <div className="labelNew">Location</div>
                    <NiceSelect
                      className="nice-select fw-normal"
                      options={optionsLocation}
                      defaultCurrent={0}
                      onChange={(e) => {
                        setLocation(e.target.value);
                      }}
                      name=""
                      placeholder=""
                    />
                  </div>
                </div>

                {/* area type search */}

                <div className="col-xl-2">
                  <div className="input-box-one lg-mt-10">
                    <button className="fw-500 text-uppercase tran3s search-btn-four">
                      <span>Search</span>
                      <i className="fa-light fa-magnifying-glass"></i>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchDropdownHome;
