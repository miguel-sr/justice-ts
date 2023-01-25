import { Router } from "express";
import auth from "../middlewares/auth";
import { CreateUserController } from "../controllers/user/create-user/create-user";
import { DeleteUserController } from "../controllers/user/delete-user/delete-user";
import { GetUsersController } from "../controllers/user/get-users/get-users";
import { UpdateUserController } from "../controllers/user/update-user/update-user";
import { MongoCreateUserRepository } from "../repositories/user/create-user/mongo-create-user";
import { MongoDeleteUserRepository } from "../repositories/user/delete-user/mongo-delete-user";
import { MongoGetUsersRepository } from "../repositories/user/get-users/mongo-get-users";
import { MongoUpdateUserRepository } from "../repositories/user/update-user/mongo-update-user";
import { MongoLoginUserRepository } from "../repositories/user/login-user/mongo-login-user";
import { LoginUserController } from "../controllers/user/login-user/login-user";

const routes = Router();

routes.get("/users/:id?", auth, async (req, res) => {
  const mongoGetUsersRepository = new MongoGetUsersRepository();
  const getUsersController = new GetUsersController(mongoGetUsersRepository);
  const { body, statusCode } = await getUsersController.handle({
    params: req.params,
  });
  res.status(statusCode).send(body);
});

routes.post("/users", auth, async (req, res) => {
  const mongoCreateUserRepository = new MongoCreateUserRepository();
  const createUserController = new CreateUserController(
    mongoCreateUserRepository
  );
  const { body, statusCode } = await createUserController.handle({
    body: req.body,
  });
  res.status(statusCode).send(body);
});

routes.patch("/users/:id", auth, async (req, res) => {
  const mongoUpdateUserRepository = new MongoUpdateUserRepository();
  const updateUserController = new UpdateUserController(
    mongoUpdateUserRepository
  );
  const { body, statusCode } = await updateUserController.handle({
    body: req.body,
    params: req.params,
  });
  res.status(statusCode).send(body);
});

routes.delete("/users/:id", auth, async (req, res) => {
  const mongoDeleteUserRepository = new MongoDeleteUserRepository();
  const deleteUserController = new DeleteUserController(
    mongoDeleteUserRepository
  );
  const { body, statusCode } = await deleteUserController.handle({
    params: req.params,
  });
  res.status(statusCode).send(body);
});

routes.post("/login", async (req, res) => {
  const mongoLoginUserRepository = new MongoLoginUserRepository();
  const loginUsersController = new LoginUserController(
    mongoLoginUserRepository
  );
  const { body, statusCode } = await loginUsersController.handle({
    body: req.body,
  });
  res.status(statusCode).send(body);
});

routes.get("/token", auth, async (req, res) => {
  return res.status(200).send("Token validated.");
});

export default routes;
