import { Video } from "../../../models/video";

export interface IUpdateVideoParams {
  title?: string;
  description?: string;
  video?: string;
}

export interface IUpdateVideoRepository {
  updateVideo(id: string, params: IUpdateVideoParams): Promise<Video>;
}
