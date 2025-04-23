import {StatusPublishEnum} from '../enums';

export interface IArticleList {
  article_id: number;
  title: string;
  thumbnail: string;
  status: StatusPublishEnum;
  created_at: string;
  created_by: string;
}

export interface IArticleDetail {
  article_id?: number;
  title: string;
  slug?: string;
  content: string;
  thumbnail: any;
  status_publish: StatusPublishEnum | string;
  created_at?: string;
  updated_at?: string;
  deleted_at?: string;
  created_by?: string;
  updated_by?: string;
}
