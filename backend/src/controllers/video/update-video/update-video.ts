import { Video } from "../../../models/video";
import { badRequest, ok, serverError } from "../../helpers";
import { IController, IHttpRequest, IHttpResponse } from "../../protocols";
import { IUpdateVideoParams, IUpdateVideoRepository } from "./protocols";

export class UpdateVideoController implements IController {
  constructor(private readonly updateVideoRepository: IUpdateVideoRepository) {}
  async handle(
    httpRequest: IHttpRequest<unknown>
  ): Promise<IHttpResponse<Video | string>> {
    try {
      const id = httpRequest?.params?.id;
      const body = httpRequest?.body;

      if (!id) {
        return badRequest("Missing user id.");
      }

      if (!body) {
        return badRequest("Body missing fields.");
      }

      const allowedFieldsToUpdate: (keyof IUpdateVideoParams)[] = [
        "title",
        "description",
        "video",
      ];
      const someFieldIsNotAllowedToUpdate = Object.keys(body).some(
        (key) =>
          !allowedFieldsToUpdate.includes(key as keyof IUpdateVideoParams)
      );

      if (someFieldIsNotAllowedToUpdate) {
        return badRequest("Some received field is not allowed.");
      }

      const video = await this.updateVideoRepository.updateVideo(id, body);
      return ok<Video>(video);
    } catch (error) {
      return serverError();
    }
  }
}
