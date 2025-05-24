'use client';

import { useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate';
import Link from 'next/link';
import Image from 'next/image';
import { Skeleton, Empty } from 'antd';
import {
  selectLoadingOffice,
  selectOffices,
} from '@/redux/features/officeSlice';

// import NiceSelect from '@/ui/NiceSelect';
// import featureIcon_1 from '@/assets/images/icon/icon_04.svg';

// import noImageProperty from '@/assets/images/default-image/no-image.jpg';
// import imageProperty from '@/assets/images/category-dummy/cat-1.png';
// import featureIcon_2 from '@/assets/images/icon/icon_05.svg';
// import featureIcon_3 from '@/assets/images/icon/icon_06.svg';

import UseSearchOffice from '@/hooks/UseSearchOffice';

// import { optionSort } from '@/libs/const/property.const';
// import { IOfficeList } from '@/libs/interfaces/property.interface';
import { PropertyStatusEnum } from '@/libs/enums';
import { IProperties } from '@/libs/interfaces';
// import { pascalToKebab } from '@/libs/helper';

const ResultListArea = ({ style }: any) => {
  const dataLoad = Array.from({ length: 12 }, (_, i) => i + 1);

  const {
    pagination,
    sortOptionNew,
    handleSortNewChange,
    handlePageClick,
    isLoading,
  } = UseSearchOffice();

  const offices = useSelector(selectOffices);
  const isLoadingAgain = useSelector(selectLoadingOffice);

  console.log('load search result', isLoading);
  console.log('load dispach', isLoadingAgain);

  return (
    <div
      className={`property-listing-six pb-170 xl-pb-120 ${
        style
          ? 'pt-50 xl-pt-100'
          : 'pt-110 md-pt-80 mt-150 xl-mt-120 bg-pink-two'
      }`}
    >
      <div className="container">
        <div className="listing-header-filter d-sm-flex justify-content-between align-items-center mb-40 lg-mb-3">
          {/* area showing */}
          <div>
            Showing{' '}
            <span className="color-dark fw-500">
              {offices.length > 0
                ? pagination.page == pagination.total_page
                  ? pagination.total
                  : offices.length * pagination.page
                : 0}
            </span>
            of
            <span className="color-dark fw-500">
              {offices.length > 0 ? pagination.total : 0}
            </span>
            results
          </div>

          {/* buat sort data */}
          {/* <div className="d-flex align-items-center xs-mt-20">
            <div className="short-filter d-flex align-items-center">
              <div className="fs-16 me-2">Short by:</div>
              <NiceSelect
                className="nice-select"
                options={optionSort}
                defaultCurrent={sortOptionNew}
                onChange={handleSortNewChange}
                name=""
                placeholder=""
              />
            </div>

            <Link
              href={`/${style ? 'listing_12' : 'listing_04'}`}
              className="tran3s layout-change rounded-circle ms-auto ms-sm-3"
              data-bs-toggle="tooltip"
              title="Switch To List View"
            >
              <i className="fa-regular fa-bars"></i>
            </Link>
          </div> */}
          {/* buat sort data */}
        </div>

        {/* buat list data */}

        {isLoading ? (
          // <Skeleton />
          <div>
            <div className="row gx-xxl-6">
              {dataLoad.map((property, index: number) => (
                <div
                  key={index}
                  className="col-lg-3 col-md-6  d-flex mb-50 wow fadeInUp"
                  data-wow-delay={'0,' + index + 1}
                >
                  <div
                    className={`listing-card-one shadow border-25  ${
                      style ? 'border-layout' : ''
                    }`}
                  >
                    <div className="property-info p-25">
                      <Skeleton />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : offices.length > 0 ? (
          <div>
            <div className="row gx-xxl-6">
              {offices.map((property: IProperties, index: number) => (
                <div
                  key={property.property_id}
                  className="col-lg-3 col-md-6  d-flex mb-50 wow fadeInUp"
                  data-wow-delay={'0,' + index + 1}
                >
                  <div
                    className={`listing-card-one shadow border-25  ${
                      style ? 'border-layout' : ''
                    }`}
                  >
                    <div className="img-gallery">
                      <div className="position-relative overflow-hidden">
                        <div
                          className={`tag border-30 ${
                            property.property_status == PropertyStatusEnum.LEASE
                              ? 'sale'
                              : 'rent'
                          }`}
                        >
                          {property.property_status}
                        </div>

                        <div className="carousel-inner">
                          <div key={index} className={`carousel-item active`}>
                            <Link
                              href={'properties/' + property.slug}
                              className="d-block"
                            >
                              <Image
                                src={
                                  property.images.length > 0
                                    ? property.images[0].full_url
                                    : '/assets/images/category-dummy/cat-1.png'
                                }
                                width={100}
                                height={100}
                                alt=""
                                className="image-aja"
                              />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="property-info p-25">
                      <ul className="style-none feature d-flex flex-wrap align-items-center justify-content-between">
                        <li className="d-flex align-items-center">
                          <Image
                            src={'/assets/images/icon/icon_04.svg'}
                            alt=""
                            width={17}
                            height={17}
                            className="lazy-img icon me-2"
                          />
                          <span
                            className="ms-2 fs-14"
                            style={{ fontWeight: 700 }}
                          >
                            {property.spesification?.property_size}/sqm
                          </span>
                        </li>

                        <li className="d-flex align-items-center">
                          <strong className="color-dark">
                            IDR {property.price.rent_sqm}
                          </strong>
                        </li>
                      </ul>

                      <div className="pl-footer top-border d-flex align-items-center justify-content-between" />

                      <div>
                        <span
                          className=""
                          style={{ color: '#c43820', fontWeight: 500 }}
                        >
                          {property.property_type}
                        </span>
                      </div>

                      <Link
                        href={'properties/' + property.slug}
                        className="title-one"
                        style={{ fontWeight: 650, fontSize: 22 }}
                      >
                        {property.name}
                      </Link>
                      <div className="address">{property.location}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* buat list data */}
            <div className="pt-50 md-pt-20 text-center">
              <ReactPaginate
                breakLabel="..."
                nextLabel={<i className="fa-regular fa-chevron-right"></i>}
                onPageChange={handlePageClick}
                pageRangeDisplayed={pagination.total_page}
                pageCount={pagination.total_page}
                previousLabel={<i className="fa-regular fa-chevron-left"></i>}
                renderOnZeroPageCount={null}
                className="pagination-two d-inline-flex align-items-center justify-content-center style-none"
                forcePage={pagination.page - 1}
              />
            </div>
          </div>
        ) : (
          <div className="h-200">
            {' '}
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ResultListArea;
