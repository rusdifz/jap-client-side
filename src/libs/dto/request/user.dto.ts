import {RoleEnum} from '@/lib/commons/enums';

export class ReqCreateUserDTO {
  username!: string;
  email!: string;
  password!: string;
  role!: RoleEnum;
}
