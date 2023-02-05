import { Video } from "../../../models/video";

export interface IGetVideosRepository {
  getVideos(id?: string): Promise<Video[] | Video>;
}

export interface IGetVideosPaginationRepository {
  getVideos(
    itemsPerPage?: string,
    skip?: string
  ): Promise<Video[] | { numberOfDocuments: number }>;
}
