import { Router } from "express";
import auth from "../middlewares/auth";
import { MongoGetSponsorsRepository } from "../repositories/sponsor/get-sponsors/mongo-get-sponsors";
import { GetSponsorsController } from "../controllers/sponsor/get-sponsors/get-sponsors";
import { MongoCreateSponsorRepository } from "../repositories/sponsor/create-sponsor/mongo-create-sponsor";
import { CreateSponsorController } from "../controllers/sponsor/create-sponsor/create-sponsor";
import { MongoUpdateSponsorRepository } from "../repositories/sponsor/update-sponsor/mongo-update-sponsor";
import { UpdateSponsorController } from "../controllers/sponsor/update-sponsor/update-sponsor";
import { MongoDeleteSponsorRepository } from "../repositories/sponsor/delete-sponsor/mongo-delete-sponsor";
import { DeleteSponsorController } from "../controllers/sponsor/delete-sponsor/delete-sponsor";

const routes = Router();

routes.get("/sponsors/:id?", async (req, res) => {
  const mongoGetSponsorsRepository = new MongoGetSponsorsRepository();
  const getSponsorsController = new GetSponsorsController(
    mongoGetSponsorsRepository
  );
  const { body, statusCode } = await getSponsorsController.handle({
    params: req.params,
  });
  res.status(statusCode).send(body);
});

routes.post("/sponsors", auth, async (req, res) => {
  const mongoCreateSponsorRepository = new MongoCreateSponsorRepository();
  const createSponsorController = new CreateSponsorController(
    mongoCreateSponsorRepository
  );
  const { body, statusCode } = await createSponsorController.handle({
    body: req.body,
  });
  res.status(statusCode).send(body);
});

routes.patch("/sponsors/:id", auth, async (req, res) => {
  const mongoUpdateSponsorRepository = new MongoUpdateSponsorRepository();
  const updateSponsorController = new UpdateSponsorController(
    mongoUpdateSponsorRepository
  );
  const { body, statusCode } = await updateSponsorController.handle({
    body: req.body,
    params: req.params,
  });
  res.status(statusCode).send(body);
});

routes.delete("/sponsors/:id", auth, async (req, res) => {
  const mongoDeleteSponsorRepository = new MongoDeleteSponsorRepository();
  const deleteSponsorController = new DeleteSponsorController(
    mongoDeleteSponsorRepository
  );
  const { body, statusCode } = await deleteSponsorController.handle({
    params: req.params,
  });
  res.status(statusCode).send(body);
});

export default routes;
