import { Video } from "../../../models/video";

export interface IGetVideosRepository {
  getVideos(id?: string): Promise<Video[] | Video>;
}
