import { ReqGetArticleListDTO } from '@/libs/dto/request/article.dto';
import { IFeedback, ResponseAPI } from '@/libs/interfaces';

import { Get } from './base.api';

export async function fetchApiFeedbackList(
  props: ReqGetArticleListDTO,
): Promise<ResponseAPI<IFeedback[]>> {
  try {
    return await Get('/client/v1/feedback', { ...props });
  } catch (error: any) {
    console.log('error fetch article list', error);
    throw new Error(error);
  }
}
