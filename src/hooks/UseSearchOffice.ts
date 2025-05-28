'use client';

import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { IPagination, ResponseAPI, IProperties } from '@/libs/interfaces';
import { fetchApiProperties } from '@/api/property.api';

import { LocationEnum } from '@/libs/enums';
import {
  fetchOfficesList,
  fetchPaginationOffices,
  setLoadingOffice,
} from '@/redux/features/officeSlice';
import { ReqGetDTO, ReqPropertiesDTO } from '@/libs/dto/request';

const UseSearchOffice = () => {
  const dispatch = useDispatch();

  const [pagination, setPagination] = useState<IPagination>({
    page: 1,
    total: 0,
    total_page: 1,
  });

  const [isLoading, setLoading] = useState(true);

  const [sortOptionNew, setSortOptionNew] = useState<string>('');
  const [location, setLocation] = useState<any>(null);
  const [officeType, setOfficeType] = useState<any>(null);
  const [selectedAmenitiesNew, setSelectedAmenitiesNew] = useState<string[]>(
    [],
  );
  const [keyword, setKeyword] = useState<string | null>(null);
  const [propertyStatus, setPropertyStatus] = useState<any>();

  useEffect(() => {
    let propsFilter: ReqPropertiesDTO = {
      page: 1,
      limit: 12,
    };

    if (sortOptionNew.length > 0) {
      propsFilter.sort = sortOptionNew;
    }

    if (location !== null || location == 'All Area') {
      propsFilter.location =
        location === LocationEnum.ALL_AREA ? null : location;
    } else {
      propsFilter.location = undefined;
    }

    if (officeType !== null) {
      propsFilter.property_type = officeType;
    } else {
      propsFilter.property_type = undefined;
    }

    if (selectedAmenitiesNew.length > 0) {
      propsFilter.features = selectedAmenitiesNew;
    } else {
      propsFilter.features = undefined;
    }

    if (keyword !== null) {
      propsFilter.search_keyword = keyword;
    } else {
      propsFilter.search_keyword = undefined;
    }
    console.log('in use efef', location);

    setLoading(true);
    dispatch(setLoadingOffice(true));
    fetchApiProperties(propsFilter)
      .then((resp) => {
        setLoading(false);
        setPagination(resp.pagination);
        dispatch(fetchOfficesList(resp.data));
        dispatch(setLoadingOffice(false));
      })
      .catch((err) => {
        console.log('error get initiate office list');
        setLoading(false);
        dispatch(setLoadingOffice(false));
      });
  }, []);

  // handleSortOptionChange
  const handleSortNewChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSortOptionNew(event.target.value);
  };

  // handleLocationChange
  const handleLocationNewChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setLocation(event.target.value);
  };

  const handleOfficeTypeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setOfficeType(event.target.value);
  };

  // handleAmenityChange
  const handleAmenityNewChange = (event: ChangeEvent<HTMLInputElement>) => {
    const amenity = event.target.value;

    setSelectedAmenitiesNew((prevSelectedAmenities) => {
      if (prevSelectedAmenities.includes(amenity)) {
        return prevSelectedAmenities.filter((a) => a !== amenity);
      } else {
        return [...prevSelectedAmenities, amenity];
      }
    });
  };

  const handleKeywordChange = (event: ChangeEvent<HTMLSelectElement> | any) => {
    setKeyword(event.target.value);
  };

  const handlePageClick = async (event: any) => {
    setLoading(true);
    dispatch(setLoadingOffice(true));

    const newPage = event.selected + 1;

    let propsFilter: ReqPropertiesDTO = {
      page: newPage,
      limit: 12,
    };

    if (sortOptionNew.length > 0) {
      propsFilter.sort = sortOptionNew;
    }

    if (location !== null || location == 'All Area') {
      propsFilter.location =
        location === LocationEnum.ALL_AREA ? null : location;
    } else {
      propsFilter.location = undefined;
    }

    if (officeType !== null) {
      propsFilter.property_type = officeType;
    } else {
      propsFilter.property_type = undefined;
    }

    if (selectedAmenitiesNew.length > 0) {
      propsFilter.features = selectedAmenitiesNew;
    } else {
      propsFilter.features = undefined;
    }

    if (keyword !== null) {
      propsFilter.search_keyword = keyword;
    } else {
      propsFilter.search_keyword = undefined;
    }

    try {
      const resp: ResponseAPI<IProperties[]> = await fetchApiProperties(
        propsFilter,
      );
      console.log('page click', newPage);

      if (!resp.error) {
        setLoading(false);
        dispatch(fetchOfficesList(resp.data));
        dispatch(fetchPaginationOffices(resp.pagination));
        setPagination(resp.pagination);
        dispatch(setLoadingOffice(false));
      }
    } catch (error: any) {
      setPagination({
        page: 1,
        total: 0,
        total_page: 1,
      });
      dispatch(setLoadingOffice(false));
      setLoading(false);
      throw new Error(error);
    }
  };

  const handleSubmitForm = async (e: FormEvent) => {
    setLoading(true);
    dispatch(setLoadingOffice(true));

    e.preventDefault();

    let propsFilter: ReqPropertiesDTO = {
      page: pagination.page,
      limit: 12,
    };

    if (sortOptionNew !== null) {
      propsFilter.sort = sortOptionNew;
    }

    if (location !== null || location !== 'All Area') {
      propsFilter.location = location;
    } else {
      propsFilter.location = undefined;
    }

    if (officeType !== null) {
      propsFilter.property_type = officeType;
    } else {
      propsFilter.property_type = officeType;
    }

    if (selectedAmenitiesNew.length > 0) {
      propsFilter.features = selectedAmenitiesNew;
    } else {
      propsFilter.features = undefined;
    }

    if (keyword !== null) {
      propsFilter.search_keyword = keyword;
    } else {
      propsFilter.search_keyword = undefined;
    }

    if (propertyStatus !== null) {
      propsFilter.property_status = propertyStatus;
    } else {
      propsFilter.property_status = undefined;
    }

    console.log('submit form', propsFilter);

    try {
      const resp: ResponseAPI<IProperties[]> = await fetchApiProperties(
        propsFilter,
      );
      console.log('res', resp.pagination);

      if (!resp.error) {
        dispatch(fetchOfficesList(resp.data));
        dispatch(fetchPaginationOffices(resp.pagination));
        setPagination(resp.pagination);
        dispatch(setLoadingOffice(false));
        setLoading(false);
      }
      console.log('pagination', pagination);
    } catch (error: any) {
      // dispatch(fetchOfficesSuccess([]));
      setPagination({
        page: 1,
        total: 0,
        total_page: 1,
      });
      setLoading(false);
      dispatch(setLoadingOffice(false));
      throw new Error(error);
    }
  };

  const resetFilters = () => {
    setSortOptionNew('');
    setOfficeType('');
    setLocation('');
    setSelectedAmenitiesNew([]);
    // setPriceValue([0, maxPrice]);
  };

  return {
    pagination,
    setPagination,
    sortOptionNew,
    location,
    setLocation,
    officeType,
    setOfficeType,
    propertyStatus,
    setPropertyStatus,
    selectedAmenitiesNew,
    keyword,
    handleSortNewChange,
    handleLocationNewChange,
    handleOfficeTypeChange,
    handleAmenityNewChange,
    handleKeywordChange,
    resetFilters,
    handlePageClick,
    handleSubmitForm,
    isLoading,
    setLoading,
    setKeyword,
  };
};

export default UseSearchOffice;
