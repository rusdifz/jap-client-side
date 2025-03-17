'use client';

import { selectOffices } from '@/redux/features/officeSlice';
import { useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate';
import Link from 'next/link';
import Image from 'next/image';

import NiceSelect from '@/ui/NiceSelect';
import featureIcon_1 from '@/assets/images/icon/icon_04.svg';
// import featureIcon_2 from '@/assets/images/icon/icon_05.svg';
// import featureIcon_3 from '@/assets/images/icon/icon_06.svg';

import kinoThumbnail from '@/assets/images/offices-jap/kino-tower-alam-sutera/1.png';
import plazaSummareconThumbnail from '@/assets/images/offices-jap/plaza-summarecon-tangerang/1.png';
import propertyThumb_8 from '@/assets/images/listing/img_26.jpg';
import img1 from '@/assets/images/property-location/thamrin/menara-cakrawala/1.png';

import UseSearchOffice from '@/hooks/UseSearchOffice';

import { optionSort } from '@/libs/const/property.const';
// import { IOfficeList } from '@/libs/interfaces/property.interface';
import { PropertyStatusEnum } from '@/libs/enums';
import { IProperties } from '@/libs/interfaces';
import { pascalToKebab } from '@/libs/helper';

const ResultListArea = ({ style }: any) => {
  const {
    pagination,
    setPagination,
    sortOptionNew,
    handleSortNewChange,
    handlePageClick,
  }: any = UseSearchOffice();

  const offices = useSelector(selectOffices);

  const thumbnail = () => {
    return '';
  };

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
            Showing <span className="color-dark fw-500">{pagination.page}</span>{' '}
            of{' '}
            {/* <span className="color-dark fw-500">{offices.length > 0 ? pagination.total_page : 0}</span>{" "} */}
            <span className="color-dark fw-500">{pagination.total_page}</span>{' '}
            results
          </div>

          {/* buat sort data */}
          <div className="d-flex align-items-center xs-mt-20">
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
          </div>
          {/* buat sort data */}
        </div>

        {/* buat list data */}
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

                    {/* <div id={`carousel${index}`} className="carousel slide"> */}
                    <div className="carousel-inner">
                      <div
                        key={index}
                        className={`carousel-item active`}
                        // data-bs-interval="1000000"
                      >
                        <Link
                          href={'properties/' + property.slug}
                          className="d-block"
                        >
                          <Image
                            src={`/assets/images/property-location/${pascalToKebab(
                              property.location?.toString(),
                            )}/${property.slug}/1.png`}
                            // layout="responsive"
                            width={100}
                            height={100}
                            alt=""
                            className="image-aja"
                          />
                        </Link>
                      </div>
                    </div>
                    {/* </div> */}
                  </div>
                </div>

                <div className="property-info p-25">
                  <ul className="style-none feature d-flex flex-wrap align-items-center justify-content-between">
                    <li className="d-flex align-items-center">
                      <Image
                        src={featureIcon_1}
                        alt=""
                        className="lazy-img icon me-2"
                      />
                      <span className="fs-14" style={{ fontWeight: 700 }}>
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
                      style={{ color: '#6bb2ef', fontWeight: 550 }}
                    >
                      {' '}
                      {property.property_type}
                    </span>
                  </div>

                  <Link
                    href={'properties/' + property.slug}
                    className="title-one"
                    style={{ fontWeight: 700, fontSize: 25 }}
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
          />
        </div>
      </div>
    </div>
  );
};

export default ResultListArea;

{
  /* <Link
href={'properties/' + property.slug}
className="title tran3s"
>
{property.name}
</Link>
<div className="address">{property.location}</div>
<ul className="style-none feature d-flex flex-wrap align-items-center justify-content-between">
<li className="d-flex align-items-center">
  <Image
    src={featureIcon_1}
    alt=""
    className="lazy-img icon me-2"
  />
  <span className="fs-16">
    {property.spesification?.property_size} sqm
  </span>
</li>
</ul>
<div className="pl-footer top-border d-flex align-items-center justify-content-between">
<strong className="price fw-500 color-dark">
  Rp {property.price.rent_sqm}
</strong>
<Link
  href={'properties/' + property.slug}
  className="btn-four rounded-circle"
>
  <i className="bi bi-arrow-up-right"></i>
</Link>
</div> */
}
