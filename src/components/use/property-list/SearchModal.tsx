import Link from 'next/link';

import PriceRange from '@/components/examples/common/PriceRange';
import NiceSelect from '@/ui/NiceSelect';

import {
  // FeaturesData,
  amenities,
  optionsLocation,
  optionsProperty,
} from '@/libs/const';
import { LocationEnum, PropertyTypeEnum } from '@/libs/enums';
import { ChangeEvent, FormEvent } from 'react';

type Props = {
  locationNew: string | LocationEnum | null;
  officeType: string | null | PropertyTypeEnum;
  selectedAmenitiesNew: string[];
  keyword: string;
  handleLocationNewChange: (
    event: ChangeEvent<HTMLSelectElement> | any,
  ) => void;
  handleOfficeTypeChange: (event: ChangeEvent<HTMLSelectElement> | any) => void;
  handleAmenityNewChange: (event: ChangeEvent<HTMLSelectElement> | any) => void;
  handleKeywordChange: (event: ChangeEvent<HTMLSelectElement> | any) => void;
  handleSubmitForm: (event: FormEvent | any) => void;
  resetFilters: () => void;
};

const SearchModalDropdown: React.FC<Props> = ({
  selectedAmenitiesNew,
  keyword,
  handleLocationNewChange,
  handleOfficeTypeChange,
  handleAmenityNewChange,
  handleKeywordChange,
  resetFilters,
  handleSubmitForm,
}) => {
  const handleResetFilter = () => {
    resetFilters();
  };

  return (
    <div
      className="modal fade"
      id="advanceFilterModal"
      tabIndex={-1}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 m-auto">
              <div className="modal-content">
                <button
                  type="button"
                  className="btn-close ms-auto mt-20 me-4"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <i className="fa-regular fa-xmark"></i>
                </button>

                <div className="advance-search-panel">
                  <div className="main-bg border-0">
                    <form onSubmit={handleSubmitForm}>
                      <div className="row gx-lg-5">
                        {/* area property type */}
                        <div className="col-md-6">
                          <div className="input-box-one mb-35">
                            <div className="label">I’m looking to...</div>
                            <NiceSelect
                              className="nice-select fw-normal"
                              options={optionsProperty}
                              defaultCurrent={0}
                              onChange={handleOfficeTypeChange}
                              name=""
                              placeholder=""
                            />
                          </div>
                        </div>

                        {/* area location */}
                        <div className="col-md-6">
                          <div className="input-box-one mb-35">
                            <div className="label">Location</div>
                            <NiceSelect
                              className="nice-select location fw-normal"
                              options={optionsLocation}
                              defaultCurrent={0}
                              onChange={handleLocationNewChange}
                              name=""
                              placeholder=""
                            />
                          </div>
                        </div>

                        {/* area search*/}
                        <div className="col-md-6">
                          <div className="input-box-one mb-35">
                            <div className="label">Keyword</div>
                            <input
                              type="text"
                              placeholder="buy, home, loft, apartment"
                              className="type-input"
                              onChange={handleKeywordChange}
                            />
                          </div>
                        </div>

                        {/* area option fitur*/}
                        <div className="col-12">
                          <h6 className="block-title fw-bold mb-30">
                            Amenities
                          </h6>
                          <ul className="style-none d-flex flex-wrap justify-content-between filter-input">
                            {amenities.map((list, i) => (
                              <li key={i}>
                                <input
                                  type="checkbox"
                                  name="Amenities"
                                  value={list}
                                  checked={selectedAmenitiesNew.includes(list)}
                                  onChange={handleAmenityNewChange}
                                />
                                <label>{list}</label>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="col-md-6">
                          {/* <h6 className="block-title fw-bold mt-45 mb-20">
                            Price range
                          </h6>
                          <div className="price-ranger">
                            <div className="price-input d-flex align-items-center justify-content-between pt-5">
                              <div className="field d-flex align-items-center">
                                <input
                                  type="number"
                                  className="input-min"
                                  value={priceValue[0]}
                                  onChange={() => handlePriceChange}
                                />
                              </div>
                              <div className="divider-line"></div>
                              <div className="field d-flex align-items-center">
                                <input
                                  type="number"
                                  className="input-max"
                                  value={priceValue[0]}
                                  onChange={() => handlePriceChange}
                                />
                              </div>
                              <div className="currency ps-1">USD</div>
                            </div>
                          </div>
                          <PriceRange
                            MAX={maxPrice}
                            MIN={0}
                            STEP={1}
                            values={priceValue}
                            handleChanges={handlePriceChange}
                          /> */}

                          {/* button search*/}
                          {/* <div className="col-12">
                            <button className="fw-500 text-uppercase tran3s apply-search w-100 mt-40 mb-25">
                              <i className="fa-light fa-magnifying-glass"></i>
                              <span>Search</span>
                            </button>
                          </div> */}

                          {/* button reset filter*/}
                          <div className="col-12">
                            <div className="d-flex justify-content-between form-widget">
                              <a
                                onClick={handleResetFilter}
                                style={{ cursor: 'pointer' }}
                                className="tran3s"
                              >
                                <i className="fa-regular fa-arrows-rotate"></i>
                                <span>Reset Filter</span>
                              </a>
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
        </div>
      </div>
    </div>
  );
};

export default SearchModalDropdown;
