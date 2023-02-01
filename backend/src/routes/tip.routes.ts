import { Router } from "express";
import auth from "../middlewares/auth";
import { MongoGetTipsRepository } from "../repositories/tip/get-tips/mongo-get-tips";
import { GetTipsController } from "../controllers/tip/get-tips/get-tips";
import { MongoCreateTipRepository } from "../repositories/tip/create-tip/mongo-create-tip";
import { CreateTipController } from "../controllers/tip/create-tip/create-tip";
import { MongoUpdateTipRepository } from "../repositories/tip/update-tip/mongo-update-tip";
import { UpdateTipController } from "../controllers/tip/update-tip/update-tip";
import { MongoDeleteTipRepository } from "../repositories/tip/delete-tip/mongo-delete-tip";
import { DeleteTipController } from "../controllers/tip/delete-tip/delete-tip";

const routes = Router();

routes.get("/tips/:id?", async (req, res) => {
  const mongoGetTipsRepository = new MongoGetTipsRepository();
  const getTipsController = new GetTipsController(mongoGetTipsRepository);
  const { body, statusCode } = await getTipsController.handle({
    params: req.params,
  });
  res.status(statusCode).send(body);
});

routes.post("/tips", auth, async (req, res) => {
  const mongoCreateTipRepository = new MongoCreateTipRepository();
  const createTipController = new CreateTipController(mongoCreateTipRepository);
  const { body, statusCode } = await createTipController.handle({
    body: req.body,
  });
  res.status(statusCode).send(body);
});

routes.patch("/tips/:id", auth, async (req, res) => {
  const mongoUpdateTipRepository = new MongoUpdateTipRepository();
  const updateTipController = new UpdateTipController(mongoUpdateTipRepository);
  const { body, statusCode } = await updateTipController.handle({
    body: req.body,
    params: req.params,
  });
  res.status(statusCode).send(body);
});

routes.delete("/tips/:id", auth, async (req, res) => {
  const mongoDeleteTipRepository = new MongoDeleteTipRepository();
  const deleteTipController = new DeleteTipController(mongoDeleteTipRepository);
  const { body, statusCode } = await deleteTipController.handle({
    params: req.params,
  });
  res.status(statusCode).send(body);
});

export default routes;
