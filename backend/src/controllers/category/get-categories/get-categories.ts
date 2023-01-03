import { Category } from "../../../models/category";
import { ok, serverError } from "../../helpers";
import { IController, IHttpRequest, IHttpResponse } from "../../protocols";
import { IGetCategoriesRepository } from "./protocols";

export class GetCategoriesController implements IController {
  constructor(private readonly getUsersRepository: IGetCategoriesRepository) {}

  async handle(
    httpRequest: IHttpRequest<unknown>
  ): Promise<IHttpResponse<Category[] | Category | string>> {
    try {
      const id = httpRequest?.params?.id;
      const categories = await this.getUsersRepository.getCategories(id);
      return ok<Category[] | Category>(categories);
    } catch (error) {
      return serverError();
    }
  }
}
