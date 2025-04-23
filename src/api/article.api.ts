import { ReqGetArticleListDTO } from '@/libs/dto/request/article.dto';
import { IArticleDetail, IArticleList, ResponseAPI } from '@/libs/interfaces';

import { Get } from './base.api';

export async function fetchApiArticleList(
  props: ReqGetArticleListDTO,
): Promise<ResponseAPI<IArticleList[]>> {
  try {
    return await Get('/api/v1/client/article', { ...props });
  } catch (error: any) {
    console.log('error fetch article list', error);
    throw new Error(error);
  }
}

export async function fetchApiArticleDetail(
  article_id: string,
): Promise<ResponseAPI<IArticleDetail>> {
  try {
    return await Get(`/api/v1/client/article/${article_id}`);
  } catch (error: any) {
    console.log('error fetch article detail', error);
    throw new Error(error);
  }
}
