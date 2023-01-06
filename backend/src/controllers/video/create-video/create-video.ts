import { Video } from "../../../models/video";
import { badRequest, created, serverError } from "../../helpers";
import { IController, IHttpRequest, IHttpResponse } from "../../protocols";
import { ICreateVideoParams, ICreateVideoRepository } from "./protocols";

export class CreateVideoController implements IController {
  constructor(private readonly createVideoRepository: ICreateVideoRepository) {}

  async handle(
    httpRequest: IHttpRequest<ICreateVideoParams>
  ): Promise<IHttpResponse<Video | string>> {
    try {
      const requiredFields = ["title", "description", "video"];

      for (const field of requiredFields) {
        if (!httpRequest?.body?.[field as keyof ICreateVideoParams]?.valueOf) {
          return badRequest(`Field ${field} is required.`);
        }
      }

      if (httpRequest.body) {
        httpRequest.body.createdAt = new Date();

        const video = await this.createVideoRepository.createVideo(
          httpRequest.body
        );

        return created<Video>(video);
      }
      return serverError();
    } catch (error) {
      return serverError();
    }
  }
}
