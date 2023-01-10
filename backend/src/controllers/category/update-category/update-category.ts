import { Category } from "../../../models/category";
import { badRequest, ok, serverError } from "../../helpers";
import { IController, IHttpRequest, IHttpResponse } from "../../protocols";
import { IUpdateCategoryParams, IUpdateCategoryRepository } from "./protocols";

export class UpdateCategoryController implements IController {
  constructor(
    private readonly updateCategoryRepository: IUpdateCategoryRepository
  ) {}
  async handle(
    httpRequest: IHttpRequest<IUpdateCategoryParams>
  ): Promise<IHttpResponse<Category | string>> {
    try {
      const id = httpRequest?.params?.id;
      const body = httpRequest?.body;

      if (!id) {
        return badRequest("Missing category id.");
      }

      if (!body) {
        return badRequest("Body missing fields.");
      }

      const allowedFieldsToUpdate: (keyof IUpdateCategoryParams)[] = [
        "name",
        "slug",
      ];
      const someFieldIsNotAllowedToUpdate = Object.keys(body).some(
        (key) =>
          !allowedFieldsToUpdate.includes(key as keyof IUpdateCategoryParams)
      );

      if (someFieldIsNotAllowedToUpdate) {
        return badRequest("Some received field is not allowed.");
      }

      const category = await this.updateCategoryRepository.updateCategory(
        id,
        body
      );
      return ok<Category>(category);
    } catch (error) {
      return serverError();
    }
  }
}
