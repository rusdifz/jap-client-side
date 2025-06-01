'use client';

import {
  LocationEnum,
  PropertyStatusEnum,
  PropertyTypeEnum,
} from '@/libs/enums';
import BannerTop from '../organisms/BannerTop';
import ResultListArea from './ResultArea';
import { FormEvent, useEffect, useState } from 'react';
import { IPagination, IProperties, ResponseAPI } from '@/libs/interfaces';
import { fetchApiProperties } from '@/api/property.api';
import { ReqPropertiesDTO } from '@/libs/dto/request';

type Props = {
  keywordParams: string;
  locationParams: LocationEnum | string;
  propertyTypeParams: PropertyTypeEnum | string;
  propertyStatusParams: PropertyStatusEnum | string;
};

const ListBody: React.FC<Props> = ({
  keywordParams,
  locationParams,
  propertyTypeParams,
  propertyStatusParams,
}) => {
  const [pagination, setPagination] = useState<IPagination>({
    page: 1,
    total: 0,
    total_page: 1,
  });
  const [properties, setProperties] = useState<IProperties[]>([]);
  const [isLoading, setLoading] = useState(true);

  //for select options filter
  const [keyword, setKeyword] = useState<string>('');
  const [location, setLocation] = useState<any>();
  const [propertyType, setPropertyType] = useState<any>();
  const [propertyStatus, setPropertyStatus] = useState<any>();

  const [sortOption, setSortOption] = useState<string>('');

  useEffect(() => {
    console.log('keyword', keywordParams);
    console.log('location params', locationParams);
    console.log('property type', propertyTypeParams);
    console.log('property status', propertyStatusParams);

    if (keywordParams) {
      setKeyword(keywordParams);
    }

    if (locationParams) {
      setLocation(locationParams);
    } else {
      setLocation('Thamrin');
      console.log('location in ', location);
    }

    if (propertyTypeParams) {
      setPropertyType(propertyTypeParams);
    }

    if (propertyStatusParams) {
      setPropertyStatus(propertyStatusParams);
    }

    const propsFilter: ReqPropertiesDTO = {
      page: 1,
      limit: 12,
      keyword: keyword ?? '',
      location: location ?? '',
      property_type: propertyType ?? undefined,
      property_status: propertyStatus ?? undefined,
    };

    console.log('filter props', propsFilter);

    fetchApiProperties(propsFilter)
      .then((resp) => {
        setPagination(resp.pagination);
        setProperties(resp.data);
        setLoading(false);
        setLocation('Thamrin');
        // dispatch(fetchPaginationOffices(resp.pagination));
        // dispatch(fetchOfficesList(resp.data));
        // dispatch(setLoadingOffice(false));
        console.log('location res ', location);
      })
      .catch((err) => {
        console.log('error get initiate office list');
        setLoading(false);
        setProperties([]);
      });
  }, []);

  const handlePageClick = async (event: any) => {
    setLoading(true);

    const newPage = event.selected + 1;

    let propsFilter: ReqPropertiesDTO = {
      page: newPage,
      limit: 12,
    };

    // if (sortOption.length > 0) {
    //   propsFilter.sort = sortOption;
    // }

    if (location !== null || location == 'All Area') {
      propsFilter.location =
        location === LocationEnum.ALL_AREA ? null : location;
    } else {
      propsFilter.location = undefined;
    }

    if (propertyType && propertyType !== '') {
      propsFilter.property_type = propertyType;
    } else {
      propsFilter.property_type = undefined;
    }

    if (keyword && keyword !== '') {
      propsFilter.search_keyword = keyword;
    } else {
      propsFilter.search_keyword = undefined;
    }

    try {
      const resp: ResponseAPI<IProperties[]> = await fetchApiProperties(
        propsFilter,
      );

      if (!resp.error) {
        setLoading(false);
        setPagination(resp.pagination);
        setProperties(resp.data);
      }
    } catch (error: any) {
      setPagination({
        page: 1,
        total: 0,
        total_page: 1,
      });
      setLoading(false);
      setProperties([]);
      throw new Error(error);
    }
  };

  const handleSubmitForm = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    let propsFilter: ReqPropertiesDTO = {
      page: pagination.page,
      limit: 12,
    };

    // if (sortOption.length > 0) {
    //   propsFilter.sort = sortOption;
    // }

    if (location !== null || location == 'All Area') {
      propsFilter.location =
        location === LocationEnum.ALL_AREA ? null : location;
    } else {
      propsFilter.location = undefined;
    }

    if (propertyType && propertyType !== '') {
      propsFilter.property_type = propertyType;
    } else {
      propsFilter.property_type = undefined;
    }

    if (keyword && keyword !== '') {
      propsFilter.search_keyword = keyword;
    } else {
      propsFilter.search_keyword = undefined;
    }

    try {
      const resp: ResponseAPI<IProperties[]> = await fetchApiProperties(
        propsFilter,
      );

      if (!resp.error) {
        setLoading(false);
        setPagination(resp.pagination);
        setProperties(resp.data);
      }
    } catch (error: any) {
      setPagination({
        page: 1,
        total: 0,
        total_page: 1,
      });
      setLoading(false);
      setProperties([]);
      throw new Error(error);
    }
  };

  return (
    <>
      <BannerTop
        location={location}
        setLocation={setLocation}
        propertyType={propertyType}
        setPropertyType={setPropertyType}
        propertyStatus={propertyStatus}
        setPropertyStatus={setPropertyStatus}
        keyword={keyword}
        setKeyword={setKeyword}
        handleSubmitForm={handleSubmitForm}
      />
      <ResultListArea
        properties={properties}
        pagination={pagination}
        isLoading={isLoading}
        handlePageClick={handlePageClick}
        style={true}
      />
    </>
  );
};

export default ListBody;
