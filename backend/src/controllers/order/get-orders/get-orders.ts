import { Order } from "../../../models/order";
import { ok, serverError } from "../../helpers";
import { IController, IHttpRequest, IHttpResponse } from "../../protocols";
import { IGetOrdersRepository } from "./protocols";

export class GetOrdersController implements IController {
  constructor(private readonly getOrdersRepository: IGetOrdersRepository) {}
  async handle(
    httpRequest: IHttpRequest<unknown>
  ): Promise<IHttpResponse<Order[] | string>> {
    try {
      const orders = await this.getOrdersRepository.getOrders();
      return ok<Order[]>(orders);
    } catch (error) {
      return serverError();
    }
  }
}
