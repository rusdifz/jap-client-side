import {
  LocationEnum,
  PropertyStatusEnum,
  PropertyTypeEnum,
  StatusPublishEnum,
} from '@/lib/commons/enums';
import {ReqGetDTO} from './global.dto';
import {IProperty} from '@/lib/commons/interfaces';

export class ReqPropertiesDTO extends ReqGetDTO {
  location?: LocationEnum | string;
  property_type?: PropertyTypeEnum;
  property_status?: PropertyStatusEnum;
}

export class ReqCreatePropertyDTO {
  name!: string;
  description!: string;
  address!: string;
  location!: LocationEnum;
  koordinat_map!: string;
  property_type?: PropertyTypeEnum | string;
  completion?: string;
  amenities?: string[];
  status_publish?: StatusPublishEnum;
  price?: {
    deposit?: string;
    overtime?: {
      electricity?: string;
      lighting?: string;
      ac?: string;
    };
    ground_floor_sqm?: number;
    rent_sqm?: number;
    service_charge?: {
      price?: number;
      info?: string;
    };
    parking_charge?: {
      reserved?: {
        car?: string;
        motorcycle?: string;
      };
      unreserved?: {
        car?: string;
        motorcycle?: string;
      };
    };
  };
  spesification?: {
    property_size?: number;
    office_hours_weekday?: string;
    office_hours_weekend?: string;
    year_built?: number;
    total_floor?: number;
    size_floor?: number;
    provider_internet?: string;
  };
  nearby?: {
    bus_station?: string;
    hospital?: string;
    police?: string;
    mall?: string;
  };
}

export class ReqUpdatePropertyDTO extends ReqCreatePropertyDTO {
  property_id!: number;
}
