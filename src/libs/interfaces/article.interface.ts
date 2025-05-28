import { StatusPublishEnum } from '../enums';

export interface IArticleList {
  // article_id: number;
  slug: string;
  title: string;
  thumbnail: string;
  status: StatusPublishEnum;
  updated_at: string;
  created_by: string;
}

export interface IArticleDetail {
  article_id?: number;
  title: string;
  slug?: string;
  content: string;
  thumbnail: any;
  url_youtube: string;
  tags: string;
  status_publish: StatusPublishEnum | string;
  created_at?: string;
  updated_at?: string;
  deleted_at?: string;
  created_by?: string;
  updated_by?: string;
}
