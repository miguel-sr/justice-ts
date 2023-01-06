import { Video } from "../../../models/video";

export interface IDeleteVideoRepository {
  deleteVideo(id: string): Promise<Video>;
}
