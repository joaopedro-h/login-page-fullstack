import {Router} from "express";
import RegisterController from "../controllers/RegisterController";
import LoginController from "../controllers/LoginController";

const routes = new Router();

routes.post("/register/user", RegisterController.store);

routes.post("/login/user", LoginController.store);

export default routes;