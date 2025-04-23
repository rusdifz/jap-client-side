import {
  // IOfficeDetail,
  // IOfficeList,
  IPagination,
  IProperty,
  IProperties,
} from '@/libs/interfaces';
import {
  createAction,
  createReducer,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';

interface OfficeState {
  offices: IProperties[] | any[];
  office: IProperty | any;
  officePagination: IPagination | {};
}

const initialState: OfficeState = {
  offices: [],
  office: {},
  officePagination: {},
};

export const fetchOfficesList = createAction<IProperties[]>('fetchOfficesList');
export const officeDetail = createAction<IProperty>('officeDetail');

export const fetchPaginationOffices = createAction<IPagination>(
  'fetchPaginationOffice',
);

export const officeReducer = createReducer(initialState, (builder) => {
  builder.addCase(fetchOfficesList, (state, action) => {
    state.offices = action.payload;
  });
  builder.addCase(officeDetail, (state, action) => {
    console.log('office detail', state);
    console.log('action', action);

    state.office = action.payload;
  });
  builder.addCase(fetchPaginationOffices, (state, action) => {
    state.officePagination = action.payload;
  });
});

// export const { single_office } = officeSlice.actions;

// // Selectors
export const selectOffices = (state: { offices: OfficeState }) =>
  state?.offices?.offices;

export const selectOffice = (state: { offices: OfficeState }) =>
  state?.offices?.office;

export const selectOfficePagination = (state: { offices: OfficeState }) =>
  state?.offices?.officePagination;

export default officeReducer;
