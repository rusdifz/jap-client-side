enum MediaTypeEnum {
  IMAGE = "image",
  VIDEO = "video",
}

export interface IMedia {
  image_id: string;
  office_id: string;
  unit_id: string;
  url: string;
  type: MediaTypeEnum;
  created_at: Date;
  updated_at: Date;
}
