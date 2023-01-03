import { Category } from "../../../models/category";
import { badRequest, ok, serverError } from "../../helpers";
import { IController, IHttpRequest, IHttpResponse } from "../../protocols";
import { IDeleteCategoryRepository } from "./protocols";

export class DeleteCategoryController implements IController {
  constructor(
    private readonly deleteCategoryRepository: IDeleteCategoryRepository
  ) {}
  async handle(
    httpRequest: IHttpRequest<unknown>
  ): Promise<IHttpResponse<Category | string>> {
    try {
      const id = httpRequest?.params?.id;
      if (!id) {
        return badRequest("Missing category id.");
      }
      const category = await this.deleteCategoryRepository.deleteCategory(id);
      return ok<Category>(category);
    } catch (error) {
      return serverError();
    }
  }
}
