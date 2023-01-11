import { Router } from "express";
import auth from "../middlewares/auth";
import { MongoGetOrdersRepository } from "../repositories/order/get-orders/mongo-get-orders";
import { GetOrdersController } from "../controllers/order/get-orders/get-orders";
import { MongoCreateOrderRepository } from "../repositories/order/create-order/mongo-create-order";
import { CreateOrderController } from "../controllers/order/create-order/create-order";
import { MongoDeleteOrderRepository } from "../repositories/order/delete-order/mongo-delete-order";
import { DeleteOrderController } from "../controllers/order/delete-order/delete-order";

const routes = Router();

routes.get("/orders/:id?", async (req, res) => {
  const mongoGetOrdersRepository = new MongoGetOrdersRepository();
  const getOrdersController = new GetOrdersController(mongoGetOrdersRepository);
  const { body, statusCode } = await getOrdersController.handle({
    params: req.params,
  });
  res.status(statusCode).send(body);
});

routes.post("/orders", auth, async (req, res) => {
  const mongoCreateOrderRepository = new MongoCreateOrderRepository();
  const createOrderController = new CreateOrderController(
    mongoCreateOrderRepository
  );
  const { body, statusCode } = await createOrderController.handle({
    body: req.body,
  });
  res.status(statusCode).send(body);
});

routes.delete("/orders/:id", auth, async (req, res) => {
  const mongoDeleteOrderRepository = new MongoDeleteOrderRepository();
  const deleteOrderController = new DeleteOrderController(
    mongoDeleteOrderRepository
  );
  const { body, statusCode } = await deleteOrderController.handle({
    params: req.params,
  });
  res.status(statusCode).send(body);
});

export default routes;
