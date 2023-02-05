import { Router } from "express";
import auth from "../middlewares/auth";
import { MongoGetPartsRepository } from "../repositories/part/get-parts/mongo-get-parts";
import { GetPartsController } from "../controllers/part/get-parts/get-parts";
import { MongoCreatePartRepository } from "../repositories/part/create-part/mongo-create-part";
import { CreatePartController } from "../controllers/part/create-part/create-part";
import { MongoUpdatePartRepository } from "../repositories/part/update-part/mongo-update-part";
import { UpdatePartController } from "../controllers/part/update-part/update-part";
import { MongoDeletePartRepository } from "../repositories/part/delete-part/mongo-delete-part";
import { DeletePartController } from "../controllers/part/delete-part/delete-part";
import { MongoUpdateInventoryRepository } from "../repositories/part/update-inventory/mongo-update-inventory";
import { UpdateInventoryController } from "../controllers/part/update-inventory/update-part";

const routes = Router();

routes.get("/parts/:id?", async (req, res) => {
  const mongoGetPartsRepository = new MongoGetPartsRepository();
  const getPartsController = new GetPartsController(mongoGetPartsRepository);
  const { body, statusCode } = await getPartsController.handle({
    params: req.params,
  });
  res.status(statusCode).send(body);
});

routes.post("/parts", auth, async (req, res) => {
  const mongoCreatePartRepository = new MongoCreatePartRepository();
  const createPartController = new CreatePartController(
    mongoCreatePartRepository
  );
  const { body, statusCode } = await createPartController.handle({
    body: req.body,
  });
  res.status(statusCode).send(body);
});

routes.patch("/parts/:id", auth, async (req, res) => {
  const mongoUpdatePartRepository = new MongoUpdatePartRepository();
  const updatePartController = new UpdatePartController(
    mongoUpdatePartRepository
  );
  const { body, statusCode } = await updatePartController.handle({
    body: req.body,
    params: req.params,
  });
  res.status(statusCode).send(body);
});

routes.patch("/parts-inventory/:updateInventoryOperation", async (req, res) => {
  const mongoUpdateInventoryRepository = new MongoUpdateInventoryRepository();
  const updateInventoryController = new UpdateInventoryController(
    mongoUpdateInventoryRepository
  );
  const { body, statusCode } = await updateInventoryController.handle({
    params: req.params,
    body: req.body,
  });
  res.status(statusCode).send(body);
});

routes.delete("/parts/:id", auth, async (req, res) => {
  const mongoDeletePartRepository = new MongoDeletePartRepository();
  const deletePartController = new DeletePartController(
    mongoDeletePartRepository
  );
  const { body, statusCode } = await deletePartController.handle({
    params: req.params,
  });
  res.status(statusCode).send(body);
});

export default routes;
