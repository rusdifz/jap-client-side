import { ConditionUnitEnum, PropertyStatusEnum } from '@/libs/enums';
import { PaginationDTO } from './global.dto';
import { IUnit } from '@/libs/interfaces';

export class ReqGetUnitListDTO extends PaginationDTO {
  property_id!: number;
}

export class ReqCreateUnitDTO implements Partial<IUnit> {
  property_id!: number;
  size!: number;
  floor: string = '';
  condition: ConditionUnitEnum = ConditionUnitEnum.BARE;
  available: boolean = true;
  rent_sqm!: number;
  status: PropertyStatusEnum = PropertyStatusEnum.LEASE;
}

export class ReqUpdateUnitDTO extends ReqCreateUnitDTO {
  unit_id!: string;
}
