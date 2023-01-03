import { Router } from "express";
import auth from "../middlewares/auth";
import { GetCategoriesController } from "../controllers/category/get-categories/get-categories";
import { MongoGetCategoriesRepository } from "../repositories/category/get-categories/mongo-get-categories";
import { MongoCreateCategoryRepository } from "../repositories/category/create-category/mongo-create-category";
import { CreateCategoryController } from "../controllers/category/create-category/create-category";
import { MongoUpdateCategoryRepository } from "../repositories/category/update-category/mongo-update-categories";
import { UpdateCategoryController } from "../controllers/category/update-category/update-category";
import { MongoDeleteCategoryRepository } from "../repositories/category/delete-category/mongo-delete-category";
import { DeleteCategoryController } from "../controllers/category/delete-category/delete-category";

const routes = Router();

routes.get("/categories", async (req, res) => {
  const mongoGetCategoriesRepository = new MongoGetCategoriesRepository();
  const getCategoriesController = new GetCategoriesController(
    mongoGetCategoriesRepository
  );
  const { body, statusCode } = await getCategoriesController.handle({
    params: req.params,
  });
  res.status(statusCode).send(body);
});

routes.post("/categories", auth, async (req, res) => {
  const mongoCreateCategoryRepository = new MongoCreateCategoryRepository();
  const createCategoryController = new CreateCategoryController(
    mongoCreateCategoryRepository
  );
  const { body, statusCode } = await createCategoryController.handle({
    body: req.body,
  });
  res.status(statusCode).send(body);
});

routes.patch("/categories/:id", auth, async (req, res) => {
  const mongoUpdateCategoryRepository = new MongoUpdateCategoryRepository();
  const updateCategoryController = new UpdateCategoryController(
    mongoUpdateCategoryRepository
  );
  const { body, statusCode } = await updateCategoryController.handle({
    body: req.body,
    params: req.params,
  });
  res.status(statusCode).send(body);
});

routes.delete("/categories/:id", auth, async (req, res) => {
  const mongoDeleteCategoryRepository = new MongoDeleteCategoryRepository();
  const deleteCategoryController = new DeleteCategoryController(
    mongoDeleteCategoryRepository
  );
  const { body, statusCode } = await deleteCategoryController.handle({
    params: req.params,
  });
  res.status(statusCode).send(body);
});

export default routes;
