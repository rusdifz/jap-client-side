import { ConditionUnitEnum, PropertyStatusEnum } from '@/libs/enums';

export interface IUnit {
  unit_id: string;
  property_id: number;
  size: number;
  floor: string;
  condition: ConditionUnitEnum;
  available: boolean;
  rent_sqm: number;
  status: PropertyStatusEnum;
  created_at?: string;
  upstringd_at?: string;
  deleted_at?: string;
  created_by?: string;
  upstringd_by?: string;
  deleted_by?: string;
}
