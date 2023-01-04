import { badRequest, created, serverError } from "../../helpers";
import { IController, IHttpRequest, IHttpResponse } from "../../protocols";
import { ICreateCategoryParams, ICreateCategoryRepository } from "./protocols";
import { Category } from "../../../models/category";

export class CreateCategoryController implements IController {
  constructor(
    private readonly createCategoryRepository: ICreateCategoryRepository
  ) {}

  async handle(
    httpRequest: IHttpRequest<ICreateCategoryParams>
  ): Promise<IHttpResponse<Category | string>> {
    try {
      const requiredFields = ["name"];

      for (const field of requiredFields) {
        if (
          !httpRequest?.body?.[field as keyof ICreateCategoryParams]?.valueOf
        ) {
          return badRequest(`Field ${field} is required.`);
        }
      }

      if (httpRequest.body) {
        httpRequest.body.createdAt = new Date();

        const category = await this.createCategoryRepository.createCategory(
          httpRequest.body
        );

        return created<Category>(category);
      }
      return serverError();
    } catch (error) {
      return serverError();
    }
  }
}
