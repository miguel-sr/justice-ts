import { Order } from "../../../models/order";
import { badRequest, ok, serverError } from "../../helpers";
import { IController, IHttpRequest, IHttpResponse } from "../../protocols";
import { IDeleteOrderRepository } from "./protocols";

export class DeleteOrderController implements IController {
  constructor(private readonly deleteOrderRepository: IDeleteOrderRepository) {}
  async handle(
    httpRequest: IHttpRequest<unknown>
  ): Promise<IHttpResponse<Order | string>> {
    try {
      const id = httpRequest.params?.id;
      if (!id) {
        return badRequest("Missing order id.");
      }
      const order = await this.deleteOrderRepository.deleteOrder(id);
      return ok<Order>(order);
    } catch (error) {
      return serverError();
    }
  }
}
