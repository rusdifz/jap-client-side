import { StatusPublishEnum } from '@/libs/enums';
import { IArticleDetail } from '@/libs/interfaces';
import { PaginationDTO } from './global.dto';

export class ReqGetArticleListDTO extends PaginationDTO {}

export class ReqCreateArticleDTO implements Partial<IArticleDetail> {
  title!: string;
  content!: string;
  thumbnail: string = '';
  status_publish: StatusPublishEnum = StatusPublishEnum.DRAFT;
}

export class ReqUpdateArticleDTO extends ReqCreateArticleDTO {
  article_id!: number;
}
