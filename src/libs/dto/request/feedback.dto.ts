import { IFeedback } from '@/libs/interfaces';

export class ReqCreateFeedbackDTO implements Partial<IFeedback> {
  profile_image?: string;
  profile_name!: string;
  comment!: string;
}

export class ReqUpdateFeedbackDTO extends ReqCreateFeedbackDTO {
  feedback_id!: number;
}
