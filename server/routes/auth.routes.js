import express from "express";

const Router = express.Router();

//check authentication route works (delete on deployment)

Router.get("/checkAuth", AuthCtrl.GetAuthCheck);
//creae new user
Router.post("/register", AuthCtrl.registerUser);
//login user
Router.post("/login", AuthCtrl.loginUser);
//logout
Router.post("/logout", AuthCtrl.logout);
export default Router;

