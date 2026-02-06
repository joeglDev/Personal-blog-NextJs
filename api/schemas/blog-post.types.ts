import { ImageMetaData } from "@/api/schemas/image-meta-data.types";

export interface BlogPost {
  id: number;
  author?: string;
  title?: string;
  content?: string;
  timeStamp: Date;
  likes: number;
  images?: ImageMetaData[];
}
