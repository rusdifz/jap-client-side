enum MediaTypeEnum {
  IMAGE = 'image',
  VIDEO = 'video',
}

export interface IMedia {
  media_id: string;
  type: MediaTypeEnum;
  full_url: string;
}
