import {Router} from "express";
import RegisterController from "../controllers/RegisterController";

const routes = new Router();

routes.post("/register/user", RegisterController.store);

export default routes;