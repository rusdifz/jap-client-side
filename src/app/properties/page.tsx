'use client';

import { useSearchParams } from 'next/navigation';
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';

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

  const keywordParams = searchParams.get('keyword') || ''; // Default ke string kosong
  const locationParams = searchParams.get('location') || ''; // Default ke string kosong
  const propertyTypeParams = searchParams.get('property_type') || ''; // Default ke string kosong
  const propertyStatusParams = searchParams.get('property_status') || ''; // Default ke string kosong

  return (
    <Wrapper>
      <ListProperty
        keyword={keywordParams}
        location={locationParams}
        propertyType={propertyTypeParams}
        propertyStatus={propertyStatusParams}
      />
    </Wrapper>
  );
};

export default index;
