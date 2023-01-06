import { Video } from "../../../models/video";
import { ok, badRequest, serverError } from "../../helpers";
import { IController, IHttpRequest, IHttpResponse } from "../../protocols";
import { IDeleteVideoRepository } from "./protocols";

export class DeleteVideoController implements IController {
  constructor(private readonly deleteVideoRepository: IDeleteVideoRepository) {}
  async handle(
    httpRequest: IHttpRequest<unknown>
  ): Promise<IHttpResponse<Video | string>> {
    try {
      const id = httpRequest?.params?.id;
      if (!id) {
        return badRequest("Missing video id.");
      }

      const video = await this.deleteVideoRepository.deleteVideo(id);
      return ok<Video>(video);
    } catch (error) {
      return serverError();
    }
  }
}
