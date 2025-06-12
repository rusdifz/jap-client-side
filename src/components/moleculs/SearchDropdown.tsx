'use client';

import NiceSelect from '@/ui/NiceSelect';
import { FormEvent, useState } from 'react';

import {
  optionsLocation,
  optionsProperty,
  optionsPropertyStatus,
} from '@/libs/const';

import UseSearchOffice from '@/hooks/UseSearchOffice';
import {
  LocationEnum,
  PropertyStatusEnum,
  PropertyTypeEnum,
} from '@/libs/enums';

// const tab_title: string[] = ['Lease', 'Sale'];

type TableProps = {
  location: LocationEnum | any;
  setLocation: any;
  propertyType: PropertyTypeEnum | any;
  setPropertyType: any;
  propertyStatus: string | any;
  setPropertyStatus: any;
  keyword: string | undefined;
  setKeyword: any;
  handleSubmitForm: (e: FormEvent) => void;
};

const SearchDropdown: React.FC<TableProps> = ({
  location,
  setLocation,
  propertyType,
  setPropertyType,
  propertyStatus,
  setPropertyStatus,
  keyword,
  setKeyword,
  handleSubmitForm,
}) => {
  console.log('keyword', keyword);

  return (
    <>
      <div className="search-wrapper-one layout-two mt-150 xl-mt-150 lg-mt-100 position-relative wow fadeInUp">
        <div className="bg-wrapper border-1 rounded-3 m-auto">
          <div className="tab-content">
            <form onSubmit={handleSubmitForm}>
              <div className="row gx-0 align-items-center">
                <div className="col-xl-2 col-lg-3 col-md-6">
                  <div className="input-box-one border-left border-lg-0">
                    <div className="labelNew">Search Keyword</div>
                    <input
                      type="text"
                      placeholder={'Nama Gedung....'}
                      className="type-input"
                      name="keyword"
                      defaultValue={keyword}
                      onChange={(e) => {
                        setKeyword(e.target.value);
                      }}
                    />
                  </div>
                </div>

                <div className="col-xl-2 col-lg-2">
                  <div className="input-box-one border-left">
                    <div className="labelNew">I’m looking to...</div>
                    <NiceSelect
                      className="nice-select fw-normal"
                      options={optionsProperty}
                      defaultCurrent={propertyType ?? 0}
                      onChange={(e) => {
                        setPropertyType(e.target.value);
                      }}
                      name="select"
                      placeholder={propertyType ?? PropertyTypeEnum.OFFICE}
                    />
                  </div>
                </div>

                {/* area type property */}
                <div className="col-xl-2 col-lg-2">
                  <div className="input-box-one border-left">
                    <div className="labelNew">Property Type</div>
                    <NiceSelect
                      className="nice-select fw-normal"
                      options={optionsPropertyStatus}
                      defaultCurrent={propertyStatus ?? 0}
                      onChange={(e) => {
                        setPropertyStatus(e.target.value);
                      }}
                      name=""
                      placeholder={propertyStatus ?? PropertyStatusEnum.SALE}
                    />
                  </div>
                </div>

                {/* area type location */}
                <div className="col-xl-3 col-lg-3">
                  <div className="input-box-one border-left">
                    <div className="labelNew">Location</div>
                    <NiceSelect
                      className="nice-select fw-normal"
                      options={optionsLocation}
                      defaultCurrent={location ?? 1}
                      onChange={(e) => {
                        setLocation(e.target.value);
                      }}
                      name=""
                      placeholder={location ?? 'All Area'}
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

export default SearchDropdown;
