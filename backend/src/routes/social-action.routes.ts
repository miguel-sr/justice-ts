import { Router } from "express";
import auth from "../middlewares/auth";
import { MongoGetSocialActionsRepository } from "../repositories/social-action/get-social-actions/mongo-get-social-actions";
import { GetSocialActionsController } from "../controllers/social-action/get-social-actions/get-social-actions";
import { MongoCreateSocialActionRepository } from "../repositories/social-action/create-social-action/mongo-create-social-action";
import { CreateSocialActionController } from "../controllers/social-action/create-social-action/create-social-action";
import { MongoUpdateSocialActionRepository } from "../repositories/social-action/update-social-action/mongo-update-social-action";
import { UpdateSocialActionController } from "../controllers/social-action/update-social-action/update-social-action";
import { MongoDeleteSocialActionRepository } from "../repositories/social-action/delete-social-action/mongo-delete-social-action";
import { DeleteSocialActionController } from "../controllers/social-action/delete-social-action/delete-social-action";
import { MongoGetSocialActionsPaginationRepository } from "../repositories/social-action/get-social-actions/mongo-get-social-actions-pagination";
import { GetSocialActionsPaginationController } from "../controllers/social-action/get-social-actions/get-social-actions-pagination";

const routes = Router();

routes.get("/social-actions/:id?", async (req, res) => {
  const mongoGetSocialActionsRepository = new MongoGetSocialActionsRepository();
  const getSocialActionsController = new GetSocialActionsController(
    mongoGetSocialActionsRepository
  );
  const { body, statusCode } = await getSocialActionsController.handle({
    params: req.params,
  });
  res.status(statusCode).send(body);
});

routes.get(
  "/social-actions-pagination/:itemsPerPage?/:skip?",
  async (req, res) => {
    const mongoGetSocialActionsPaginationRepository =
      new MongoGetSocialActionsPaginationRepository();
    const getSocialActionsPaginationController =
      new GetSocialActionsPaginationController(
        mongoGetSocialActionsPaginationRepository
      );
    const { body, statusCode } =
      await getSocialActionsPaginationController.handle({
        params: req.params,
      });
    res.status(statusCode).send(body);
  }
);

routes.post("/social-actions", auth, async (req, res) => {
  const mongoCreateSocialActionRepository =
    new MongoCreateSocialActionRepository();
  const createSocialActionController = new CreateSocialActionController(
    mongoCreateSocialActionRepository
  );
  const { body, statusCode } = await createSocialActionController.handle({
    body: req.body,
  });
  res.status(statusCode).send(body);
});

routes.patch("/social-actions/:id", auth, async (req, res) => {
  const mongoUpdateSocialActionRepository =
    new MongoUpdateSocialActionRepository();
  const updateSocialActionController = new UpdateSocialActionController(
    mongoUpdateSocialActionRepository
  );
  const { body, statusCode } = await updateSocialActionController.handle({
    body: req.body,
    params: req.params,
  });
  res.status(statusCode).send(body);
});

routes.delete("/social-actions/:id", auth, async (req, res) => {
  const mongoDeleteSocialActionRepository =
    new MongoDeleteSocialActionRepository();
  const deleteSocialActionController = new DeleteSocialActionController(
    mongoDeleteSocialActionRepository
  );
  const { body, statusCode } = await deleteSocialActionController.handle({
    params: req.params,
  });
  res.status(statusCode).send(body);
});

export default routes;
