import {
  LocationEnum,
  PropertyStatusEnum,
  PropertyTypeEnum,
  StatusPublishEnum,
} from '@/libs/enums';

import { IMedia, IUnit } from '@/libs/interfaces';

export interface IProperty {
  property_id: number;
  name: string;
  slug: string;
  description: string;
  address: string;
  location: LocationEnum;
  koordinat_map: string;
  property_type: PropertyTypeEnum;
  status_publish: StatusPublishEnum;
  property_status: PropertyStatusEnum;
  property_feature: any[];
  price: {
    deposit: string;
    overtime: {
      electricity: string;
      lighting: string;
      ac: string;
    };
    ground_floor_sqm: number;
    rent_sqm: number;
    service_charge: {
      price: number;
      info: string;
    };
    parking_charge: {
      reserved: {
        car: string;
        motorcycle: string;
      };
      unreserved: {
        car: string;
        motorcycle: string;
      };
    };
  };
  completion: string;
  amenities: string[];
  spesification: {
    property_size: number;
    office_hours_weekday?: string;
    office_hours_weekend?: string;
    year_built?: number;
    total_floor?: number;
    size_floor?: number;
    provider_internet?: string;
  };
  nearby: {
    bus_station: string;
    hospital: string;
    police: string;
    mall: string;
  };
  nearby_new: any[];
  //join table
  units: IUnit[];
  images: IMedia[];
  created_at?: string;
  upstringd_at?: string;
  deleted_at?: string;
  created_by?: string;
  upstringd_by?: string;
  deleted_by?: string;
}

export interface IProperties {
  property_id: number;
  name: string;
  slug: string;
  location?: LocationEnum;
  property_type?: PropertyTypeEnum;
  price?: any;
  spesification?: {
    property_size: number;
  };
  property_status: string;
  images?: IMedia[];
  created_at?: string;
  updated_at?: string;
}
