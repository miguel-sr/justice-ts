import { Router } from "express";
import auth from "../middlewares/auth";
import { MongoGetMembersRepository } from "../repositories/member/get-members/mongo-get-members";
import { GetMembersController } from "../controllers/member/get-members/get-members";
import { MongoCreateMemberRepository } from "../repositories/member/create-member/mongo-create-member";
import { CreateMemberController } from "../controllers/member/create-member/create-member";
import { MongoUpdateMemberRepository } from "../repositories/member/update-member/mongo-update-member";
import { UpdateMemberController } from "../controllers/member/update-member/update-member";
import { DeleteMemberController } from "../controllers/member/delete-member/delete-member";
import { MongoDeleteMemberRepository } from "../repositories/member/delete-member/mongo-delete-member";

const routes = Router();

routes.get("/members/:id?", async (req, res) => {
  const mongoGetMembersRepository = new MongoGetMembersRepository();
  const getMembersController = new GetMembersController(
    mongoGetMembersRepository
  );
  const { body, statusCode } = await getMembersController.handle({
    params: req.params,
  });
  res.status(statusCode).send(body);
});

routes.post("/members", auth, async (req, res) => {
  const mongoCreateMemberRepository = new MongoCreateMemberRepository();
  const createMemberController = new CreateMemberController(
    mongoCreateMemberRepository
  );
  const { body, statusCode } = await createMemberController.handle({
    body: req.body,
  });
  res.status(statusCode).send(body);
});

routes.patch("/members/:id", auth, async (req, res) => {
  const mongoUpdateMemberRepository = new MongoUpdateMemberRepository();
  const updateMemberController = new UpdateMemberController(
    mongoUpdateMemberRepository
  );
  const { body, statusCode } = await updateMemberController.handle({
    body: req.body,
    params: req.params,
  });
  res.status(statusCode).send(body);
});

routes.delete("/members/:id", auth, async (req, res) => {
  const mongoDeleteCategoryRepository = new MongoDeleteMemberRepository();
  const deleteMemberController = new DeleteMemberController(
    mongoDeleteCategoryRepository
  );
  const { body, statusCode } = await deleteMemberController.handle({
    params: req.params,
  });
  res.status(statusCode).send(body);
});

export default routes;
