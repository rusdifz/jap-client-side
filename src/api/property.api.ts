import { ResponseAPI } from '@/libs/interfaces/http.interface';
import { ReqPropertiesDTO } from '@/libs/dto/request/property.dto';
import { IProperties, IProperty } from '@/libs/interfaces';

import { Get } from './base.api';

export async function fetchApiProperties(
  props?: ReqPropertiesDTO,
): Promise<ResponseAPI<IProperties[]>> {
  try {
    return await Get<IProperties[]>('/api/v1/client/properties', { ...props });
  } catch (error: any) {
    console.log('error fetch from api properties', error);
    throw new Error(error);
  }
}

export async function fetchApiPropertyDetail(
  property_id: number,
): Promise<ResponseAPI<IProperty>> {
  try {
    return await Get<IProperty>(`/api/v1/client/properties/${property_id}`);
  } catch (error: any) {
    console.log('error fetch api property detail', error);
    throw new Error(error);
  }
}
