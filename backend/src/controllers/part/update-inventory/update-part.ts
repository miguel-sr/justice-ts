import { badRequest, ok, serverError } from "../../helpers";
import { IController, IHttpRequest, IHttpResponse } from "../../protocols";
import {
  IUpdateInventoryParams,
  IUpdateInventoryRepository,
} from "./protocols";

export class UpdateInventoryController implements IController {
  constructor(
    private readonly updateInventoryRepository: IUpdateInventoryRepository
  ) {}
  async handle(
    httpRequest: IHttpRequest<IUpdateInventoryParams[]>
  ): Promise<IHttpResponse<string>> {
    try {
      const operation = httpRequest?.params?.updateInventoryOperation;
      if (!operation) {
        return badRequest("Missing operation.");
      }

      const body = httpRequest?.body;
      if (!body) {
        return badRequest("Body missing fields.");
      }

      this.updateInventoryRepository.updateInventory(operation, body);

      return ok<string>("Parts updated");
    } catch (error) {
      return serverError();
    }
  }
}
