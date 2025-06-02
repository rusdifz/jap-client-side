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
  keywordParams: string | undefined;
  locationParams: LocationEnum | string | undefined;
  propertyTypeParams: PropertyTypeEnum | string | undefined;
  propertyStatusParams: PropertyStatusEnum | string | undefined;
};

const ListBody: React.FC<Props> = ({
  keywordParams,
  locationParams,
  propertyTypeParams,
  propertyStatusParams,
}) => {
  const [pagination, setPagination] = useState<IPagination>({
    page: 1,
    total: 1,
    total_page: 1,
  });
  const [properties, setProperties] = useState<IProperties[]>([]);
  const [isLoading, setLoading] = useState(true);

  //for select options filter
  const [keyword, setKeyword] = useState<string | undefined>(keywordParams);
  const [location, setLocation] = useState<any>(locationParams);
  const [propertyType, setPropertyType] = useState<any>(propertyTypeParams);
  const [propertyStatus, setPropertyStatus] =
    useState<any>(propertyStatusParams);

  const [sortOption, setSortOption] = useState<string>('');

  useEffect(() => {
    setKeyword(keywordParams || undefined);
    setLocation(locationParams || LocationEnum.THAMRIN);
    setPropertyType(propertyTypeParams || null);
    setPropertyStatus(propertyStatusParams || null);
  }, [keywordParams, locationParams, propertyTypeParams, propertyStatusParams]);

  useEffect(() => {
    setKeyword(keywordParams || '');

    setPropertyType(propertyTypeParams || null);
    setPropertyStatus(propertyStatusParams || null);

    if (locationParams === 'All Area') {
      locationParams = undefined;
    } else {
      setLocation(locationParams || LocationEnum.THAMRIN);
    }

    const propsFilter: ReqPropertiesDTO = {
      page: 1,
      limit: 12,
      keyword: keywordParams,
      location: locationParams,
      property_type: propertyTypeParams,
      property_status: propertyStatusParams,
    };

    fetchApiProperties(propsFilter)
      .then((resp) => {
        setPagination(resp.pagination);
        setProperties(resp.data);
        setLoading(false);
        // dispatch(fetchPaginationOffices(resp.pagination));
        // dispatch(fetchOfficesList(resp.data));
        // dispatch(setLoadingOffice(false));
      })
      .catch((err) => {
        console.log('error get initiate office list');
        setLoading(false);
        setProperties([]);
      });
  }, [keywordParams, locationParams, propertyTypeParams, propertyStatusParams]);

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
