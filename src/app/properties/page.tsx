'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import ListProperty from '@/components/property-list';
import Wrapper from '@/layouts/Wrapper';

import { ReqPropertiesDTO } from '@/libs/dto/request';
import { LocationEnum } from '@/libs/enums';

import {
  fetchOfficesList,
  fetchPaginationOffices,
  setLoadingOffice,
} from '@/redux/features/officeSlice';
import UseSearchOffice from '@/hooks/UseSearchOffice';

import { fetchApiProperties } from '@/api/property.api';

interface SearchParams {
  location?: string;
  office_type?: string;
  property_status?: string;
}

const index = () => {
  // const index = ({ searchParams }: { searchParams: SearchParams }) => {
  const searchParams = useSearchParams();
  const locationParams = searchParams.get('location') || ''; // Default ke string kosong
  const officeTypeParams = searchParams.get('office_type') || ''; // Default ke string kosong
  const propertyStatusParams = searchParams.get('property_status') || ''; // Default ke string kosong

  const dispatch = useDispatch();

  // const location = searchParams.location || ''; // Default ke string kosong
  // const officeType = searchParams.office_type || ''; // Default ke string kosong
  // const propertyStatus = searchParams.property_status || ''; // Default ke string kosong
  // console.log('search paras', location);

  const {
    // location,
    sortOptionNew,
    setLocation,
    setOfficeType,
    setPropertyStatus,
    setLoading,
    setPagination,
    isLoading,
  } = UseSearchOffice();

  // useEffect(() => {
  //   let propsFilter: ReqPropertiesDTO = {
  //     page: 1,
  //     limit: 12,
  //   };

  //   if (sortOptionNew.length > 0) {
  //     propsFilter.sort = sortOptionNew;
  //   }

  //   if (locationParams) {
  //     propsFilter.location = locationParams;
  //     setLocation(locationParams);
  //   } else {
  //     propsFilter.location = undefined;
  //   }

  //   if (officeTypeParams) {
  //     propsFilter.property_type = officeTypeParams;
  //     setOfficeType(officeTypeParams);
  //   } else {
  //     propsFilter.property_type = undefined;
  //   }

  //   if (propertyStatusParams) {
  //     propsFilter.property_status = propertyStatusParams;
  //     setPropertyStatus(propertyStatusParams);
  //   } else {
  //     propsFilter.property_status = undefined;
  //   }

  //   setLoading(true);
  //   dispatch(setLoadingOffice(true));
  //   fetchApiProperties(propsFilter)
  //     .then((resp) => {
  //       console.log('this dapat', resp.data);

  //       setLoading(false);
  //       setPagination(resp.pagination);
  //       dispatch(fetchOfficesList(resp.data));
  //       dispatch(setLoadingOffice(false));
  //       console.log('is loading', isLoading);
  //     })
  //     .catch((err) => {
  //       console.log('error get initiate office list', err);
  //       setLoading(false);
  //       dispatch(setLoadingOffice(false));
  //     });
  // }, []);

  // if (location) {
  //   console.log('loca', location);

  //   setLocation(location);
  // }

  // if (officeType) {
  //   setOfficeType(officeType);
  // }

  // if (propertyStatus) {
  //   setPropertyStatus(propertyStatus);
  // }

  return (
    <Wrapper>
      <ListProperty />
    </Wrapper>
  );
};

export default index;
