import {Router} from "express";

const routes = new Router();

routes.post("/teste", (req, res) => {

    return res.json({
        message: "Ok"
    });
    
});



export default routes;