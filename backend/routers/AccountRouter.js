import express from "express";
import * as AccountController from "../controllers/AccountController.js";

const AccountRouter = express.Router();

//Create
AccountRouter.post("/accounts/addAccount", AccountController.addAccount);

//Read
AccountRouter.get("/accounts/getAccounts", AccountController.getAccounts);
AccountRouter.get("/accounts/getAccounts/:page", AccountController.getAccounts);
AccountRouter.get(
  "/accounts/getAccountById/:_id",
  AccountController.getAccountById
);

//Update
AccountRouter.put(
  "/accounts/updateAccount/:_id",
  AccountController.updateAccount
);

//Delete
AccountRouter.delete(
  "/accounts/deleteAccount/:_id",
  AccountController.deleteAccount
);

export default AccountRouter;
