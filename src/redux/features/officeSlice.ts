import { IPagination, IProperty, IProperties } from '@/libs/interfaces';
import { createAction, createReducer } from '@reduxjs/toolkit';

interface OfficeState {
  offices: IProperties[] | any[];
  office: IProperty | any;
  officePagination: IPagination | {};
  setLoadingOffice: boolean;
}

const initialState: OfficeState = {
  offices: [],
  office: {},
  officePagination: {},
  setLoadingOffice: true,
};

export const fetchOfficesList = createAction<IProperties[]>('fetchOfficesList');
export const officeDetail = createAction<IProperty>('officeDetail');
export const fetchPaginationOffices = createAction<IPagination>(
  'fetchPaginationOffice',
);
export const setLoadingOffice = createAction<boolean>('setLoadingOffice');

export const officeReducer = createReducer(initialState, (builder) => {
  builder.addCase(fetchOfficesList, (state, action) => {
    state.offices = action.payload;
  });
  builder.addCase(officeDetail, (state, action) => {
    state.office = action.payload;
  });
  builder.addCase(fetchPaginationOffices, (state, action) => {
    state.officePagination = action.payload;
  });
  builder.addCase(setLoadingOffice, (state, action) => {
    state.setLoadingOffice = action.payload;
  });
});

export const selectOffices = (state: { offices: OfficeState }) =>
  state?.offices?.offices;

export const selectOffice = (state: { offices: OfficeState }) =>
  state?.offices?.office;

export const selectOfficePagination = (state: { offices: OfficeState }) =>
  state?.offices?.officePagination;

export const selectLoadingOffice = (state: { offices: OfficeState }) => {
  state?.offices?.setLoadingOffice;
};
export default officeReducer;
