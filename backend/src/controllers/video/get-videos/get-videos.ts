import { Video } from "../../../models/video";
import { ok, serverError } from "../../helpers";
import { IController, IHttpRequest, IHttpResponse } from "../../protocols";
import { IGetVideosRepository } from "./protocols";

export class GetVideosController implements IController {
  constructor(private readonly getVideosRepository: IGetVideosRepository) {}
  async handle(
    httpRequest: IHttpRequest<unknown>
  ): Promise<IHttpResponse<Video[] | Video | string>> {
    try {
      const id = httpRequest?.params?.id;
      const videos = await this.getVideosRepository.getVideos(id);
      return ok<Video[] | Video>(videos);
    } catch (error) {
      return serverError();
    }
  }
}
