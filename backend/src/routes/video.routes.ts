import { Router } from "express";
import { CreateVideoController } from "../controllers/video/create-video/create-video";
import { DeleteVideoController } from "../controllers/video/delete-video/delete-video";
import { GetVideosController } from "../controllers/video/get-videos/get-videos";
import { UpdateVideoController } from "../controllers/video/update-video/update-video";
import auth from "../middlewares/auth";
import { MongoCreateVideoRepository } from "../repositories/video/create-video/mongo-create-video";
import { MongoDeleteVideoRepository } from "../repositories/video/delete-video/mongo-delete-video";
import { MongoGetVideosRepository } from "../repositories/video/get-videos/mongo-get-videos";
import { MongoUpdateVideoRepository } from "../repositories/video/update-video/mongo-update-video";
import { MongoGetVideosPaginationRepository } from "../repositories/video/get-videos/mongo-get-videos-pagination";
import { GetVideosPaginationController } from "../controllers/video/get-videos/get-videos-pagination";

const routes = Router();

routes.get("/videos/:id?", async (req, res) => {
  const mongoGetVideosRepository = new MongoGetVideosRepository();
  const getVideosController = new GetVideosController(mongoGetVideosRepository);
  const { body, statusCode } = await getVideosController.handle({
    params: req.params,
  });
  res.status(statusCode).send(body);
});

routes.get("/videos-pagination/:itemsPerPage?/:skip?", async (req, res) => {
  const mongoGetVideosPaginationRepository =
    new MongoGetVideosPaginationRepository();
  const getVideosPaginationController = new GetVideosPaginationController(
    mongoGetVideosPaginationRepository
  );
  const { body, statusCode } = await getVideosPaginationController.handle({
    params: req.params,
  });
  res.status(statusCode).send(body);
});

routes.post("/videos", auth, async (req, res) => {
  const mongoCreateVideoRepository = new MongoCreateVideoRepository();
  const createVideoController = new CreateVideoController(
    mongoCreateVideoRepository
  );
  const { body, statusCode } = await createVideoController.handle({
    body: req.body,
  });
  res.status(statusCode).send(body);
});

routes.patch("/videos/:id", auth, async (req, res) => {
  const mongoUpdateMemberRepository = new MongoUpdateVideoRepository();
  const updateVideoController = new UpdateVideoController(
    mongoUpdateMemberRepository
  );
  const { body, statusCode } = await updateVideoController.handle({
    body: req.body,
    params: req.params,
  });
  res.status(statusCode).send(body);
});

routes.delete("/videos/:id", auth, async (req, res) => {
  const mongoDeleteVideoRepository = new MongoDeleteVideoRepository();
  const deleteVideoController = new DeleteVideoController(
    mongoDeleteVideoRepository
  );
  const { body, statusCode } = await deleteVideoController.handle({
    params: req.params,
  });
  res.status(statusCode).send(body);
});

export default routes;
