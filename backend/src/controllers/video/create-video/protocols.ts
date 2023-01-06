import { Video } from "../../../models/video";

export interface ICreateVideoParams {
  title: string;
  description: string;
  video: string;
  createdAt: Date;
}

export interface ICreateVideoRepository {
  createVideo(params: ICreateVideoParams): Promise<Video>;
}
