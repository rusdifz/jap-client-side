import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { IPagination, ResponseAPI, IProperties } from '@/libs/interfaces';
import { fetchApiProperties } from '@/api/property.api';

import {
  LocationEnum,
  PropertyStatusEnum,
  PropertyTypeEnum,
} from '@/libs/enums';
import {
  fetchOfficesList,
  fetchPaginationOffices,
} from '@/redux/features/officeSlice';
import { ReqGetDTO, ReqPropertiesDTO } from '@/libs/dto/request';

const UseSearchOffice = () => {
  const dispatch = useDispatch();

  const [pagination, setPagination] = useState<IPagination>({
    page: 1,
    total: 0,
    total_page: 1,
  });

  useEffect(() => {
    fetchApiProperties({ page: 1, limit: 12, location: LocationEnum.THAMRIN })
      .then((resp) => {
        console.log('resp', resp.data);

        setPagination(resp.pagination);
        dispatch(fetchOfficesList(resp.data));
      })
      .catch();
  }, []);

  const [sortOptionNew, setSortOptionNew] = useState<string>('');
  const [locationNew, setLocationNew] = useState<any>(null);
  const [officeType, setOfficeType] = useState<any>(null);
  const [selectedAmenitiesNew, setSelectedAmenitiesNew] = useState<string[]>(
    [],
  );
  const [keyword, setKeyword] = useState<string | null>(null);
  const [propertyStatus, setPropertyStatus] = useState<any>();

  // handleSortOptionChange
  const handleSortNewChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSortOptionNew(event.target.value);
  };

  // handleLocationChange
  const handleLocationNewChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setLocationNew(event.target.value);
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
    console.log('event page click', event);

    const newPage = event.selected + 1;

    let propsFilter: ReqPropertiesDTO = {
      page: newPage,
      limit: 12,
    };

    if (sortOptionNew.length > 0) {
      propsFilter.sort = sortOptionNew;
    }

    if (locationNew !== null) {
      propsFilter.location = locationNew;
    }

    if (officeType !== null) {
      propsFilter.property_type = officeType;
    }

    if (selectedAmenitiesNew.length > 0) {
      propsFilter.features = selectedAmenitiesNew;
    }

    if (keyword !== null) {
      propsFilter.search_keyword = keyword;
    }

    try {
      const resp: ResponseAPI<IProperties[]> = await fetchApiProperties(
        propsFilter,
      );
      console.log('page click', newPage);

      if (!resp.error) {
        dispatch(fetchOfficesList(resp.data));
        dispatch(fetchPaginationOffices(resp.pagination));
        setPagination(resp.pagination);
      }
    } catch (error: any) {
      // dispatch(fetchOfficesSuccess([]));
      setPagination({
        page: 1,
        total: 0,
        total_page: 1,
      });
      throw new Error(error);
    }
  };

  const handleSubmitForm = async (e: FormEvent) => {
    // console.log('this');

    // e.preventDefault();
    let propsFilter: ReqPropertiesDTO = {
      page: pagination.page,
      limit: 12,
    };

    if (sortOptionNew !== null) {
      propsFilter.sort = sortOptionNew;
    }

    if (locationNew !== null) {
      propsFilter.location = locationNew;
    }

    if (officeType !== null) {
      propsFilter.property_type = officeType;
    }

    if (selectedAmenitiesNew.length > 0) {
      propsFilter.features = selectedAmenitiesNew;
    }

    if (keyword !== null) {
      propsFilter.search_keyword = keyword;
    }

    if (propertyStatus !== null) {
      propsFilter.property_status = propertyStatus;
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
      }
    } catch (error: any) {
      // dispatch(fetchOfficesSuccess([]));
      setPagination({
        page: 1,
        total: 0,
        total_page: 1,
      });
      throw new Error(error);
    }
  };

  const resetFilters = () => {
    setSortOptionNew('');
    setOfficeType('');
    setLocationNew('');
    setSelectedAmenitiesNew([]);
    // setPriceValue([0, maxPrice]);
  };

  return {
    pagination,
    // setPagination,
    sortOptionNew,
    locationNew,
    setLocationNew,
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
    // setOffices,
  };
};

export default UseSearchOffice;
