import express from "express";

const Router = express.Router();

//check user route works (delete on deployment)
Router.get("/checkUser",loginRequired, UserCtrl.GetUserCheck);

export default Router;
