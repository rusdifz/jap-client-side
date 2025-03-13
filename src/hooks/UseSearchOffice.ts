import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import UseOffice from './UseOffice';

// import { IPagination, ResponseAPI } from '@/libs/interfaces/global.interface';
// import { IOfficeList } from '@/libs/interfaces/property.interface';

// import { fetchOfficeList } from '@/api/property.api';

import { IPagination, ResponseAPI, IProperties } from '@/libs/interfaces';
import { fetchApiProperties } from '@/api/property.api';

import { LocationEnum, PropertyTypeEnum } from '@/libs/enums';
import {
  fetchOfficesList,
  fetchPaginationOffices,
  selectOffices,
} from '@/redux/features/officeSlice';
import { ReqGetDTO } from '@/libs/dto/request';

const UseSearchOffice = () => {
  const dispatch = useDispatch();

  // const { offices, setOffices } = UseOffice();

  const [pagination, setPagination] = useState<IPagination>({
    page: 1,
    total: 0,
    total_page: 1,
  });

  useEffect(() => {
    fetchApiProperties({ page: 1, limit: 10, location: LocationEnum.THAMRIN })
      .then((resp) => {
        console.log('resp', resp.data);

        setPagination(resp.pagination);
        dispatch(fetchOfficesList(resp.data));
      })
      .catch();
  }, []);

  const [sortOptionNew, setSortOptionNew] = useState<string>('');
  const [locationNew, setLocationNew] = useState<string | LocationEnum | null>(
    null,
  );
  const [officeType, setOfficeType] = useState<
    string | PropertyTypeEnum | null
  >(null);
  const [selectedAmenitiesNew, setSelectedAmenitiesNew] = useState<string[]>(
    [],
  );
  const [keyword, setKeyword] = useState<string | null>(null);

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

    let propsFilter: ReqGetDTO = {
      page: newPage,
      limit: 10,
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
    e.preventDefault();
    let propsFilter: ReqGetDTO = {
      page: pagination.page,
      limit: 10,
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
    officeType,
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
//

// handle Price
// const maxPrice = all_property.reduce((max, item) => {
//   return item.price > max ? item.price : max;
// }, 0);
// const [priceValue, setPriceValue] = useState([0, maxPrice]);

//   const maxPrice = 20000;
// const [priceValue, setPriceValue] = useState([0, maxPrice]);

//   const handlePriceChange = (val: number[]) => {
//     setPriceValue(val);
//   };

// const priceRanges: {
//   [key: string]: number[];
// } = {
//   "1": [10000, 200000],
//   "2": [20000, 300000],
//   "3": [30000, 400000],
// };

// const handlePriceDropChange = (selectedValue: string) => {
//   const selectedRange = priceRanges[selectedValue];
//   const newPriceValue = selectedRange ? selectedRange : [0, maxPrice];
//   setPriceValue(newPriceValue);
// };
