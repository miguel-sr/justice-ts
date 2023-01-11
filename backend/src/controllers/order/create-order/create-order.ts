import { Order } from "../../../models/order";
import { badRequest, created, serverError } from "../../helpers";
import { IController, IHttpRequest, IHttpResponse } from "../../protocols";
import { ICreateOrderParams, ICreateOrderRepository } from "./protocols";

export class CreateOrderController implements IController {
  constructor(private readonly createOrderRepository: ICreateOrderRepository) {}
  async handle(
    httpRequest: IHttpRequest<ICreateOrderParams>
  ): Promise<IHttpResponse<Order | string>> {
    try {
      const requiredFields = [
        "name",
        "teamName",
        "teamNumber",
        "email",
        "reason",
        "cart",
      ];

      for (const field of requiredFields) {
        if (!httpRequest?.body?.[field as keyof ICreateOrderParams]?.valueOf) {
          return badRequest(`Field ${field} is required.`);
        }
      }

      if (httpRequest.body) {
        httpRequest.body.createdAt = new Date();

        const order = await this.createOrderRepository.createOrder(
          httpRequest.body
        );

        return created<Order>(order);
      }
      return serverError();
    } catch (error) {
      return serverError();
    }
  }
}
