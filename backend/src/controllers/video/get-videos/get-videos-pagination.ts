import { Video } from "../../../models/video";
import { ok, serverError } from "../../helpers";
import { IController, IHttpRequest, IHttpResponse } from "../../protocols";
import { IGetVideosPaginationRepository } from "./protocols";

export class GetVideosPaginationController implements IController {
  constructor(
    private readonly getVideosPaginationRepository: IGetVideosPaginationRepository
  ) {}

  async handle(
    httpRequest: IHttpRequest<unknown>
  ): Promise<IHttpResponse<Video[] | { numberOfDocuments: number } | string>> {
    try {
      const itemsPerPage = httpRequest?.params?.itemsPerPage;
      const skip = httpRequest?.params?.skip;

      const socialActions = await this.getVideosPaginationRepository.getVideos(
        itemsPerPage,
        skip
      );

      return ok<Video[] | { numberOfDocuments: number }>(socialActions);
    } catch (error) {
      return serverError();
    }
  }
}
