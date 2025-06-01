'use client';

import ReactPaginate from 'react-paginate';
import Link from 'next/link';
import Image from 'next/image';
import { Skeleton, Empty } from 'antd';

import { PropertyStatusEnum } from '@/libs/enums';
import { IPagination, IProperties } from '@/libs/interfaces';
import { formatCurrency } from '@/libs/helper/convert-currency';

type Props = {
  properties: IProperties[];
  pagination: IPagination;
  isLoading: boolean;
  handlePageClick: (e: any) => void;
  style: boolean;
};

const ResultListArea: React.FC<Props> = ({
  properties,
  pagination,
  isLoading,
  handlePageClick,
  style,
}) => {
  const dataLoad = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <div
      className={`property-listing-six pb-170 xl-pb-120 ${
        style
          ? 'pt-150 xl-pt-100'
          : 'pt-110 md-pt-80 mt-150 xl-mt-120 bg-pink-two'
      }`}
    >
      <div className="container">
        <div className="listing-header-filter d-sm-flex justify-content-between align-items-center mb-40 lg-mb-3">
          {/* area showing */}
          <div>
            Showing{' '}
            <span className="color-dark fw-500">
              {properties.length > 0
                ? pagination.page == pagination.total_page
                  ? pagination.total
                  : properties.length * pagination.page
                : 0}
            </span>
            of
            <span className="color-dark fw-500">
              {properties.length > 0 ? pagination.total : 0}
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
        ) : properties.length > 0 ? (
          <div>
            <div className="row gx-xxl-6">
              {properties.map((property: IProperties, index: number) => (
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
                            {formatCurrency(
                              `IDR ${property.price.rent_sqm.toString()}`,
                            )}
                          </strong>
                        </li>
                      </ul>

                      <div className="pl-footer top-border d-flex align-items-center justify-content-between" />

                      <div>
                        <span
                          className=""
                          style={{ color: '#c43820', fontWeight: 500 }}
                        >
                          {property.property_type[0]}
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
