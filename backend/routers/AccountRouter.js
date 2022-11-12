import express from "express";
import * as AccountController from "../controllers/AccountController.js";

const AccountRouter = express.Router();

//==================Post==================
AccountRouter.post("/accounts/addAccount", AccountController.addAccount);

//==================Get==================
AccountRouter.get("/accounts/getAccounts", AccountController.getAccounts);
AccountRouter.get("/accounts/getAccounts/:page", AccountController.getAccounts);
AccountRouter.get(
  "/accounts/getAccountById/:_id",
  AccountController.getAccountById
);

//==================Put==================
AccountRouter.put(
  "/accounts/updateAccount/:_id",
  AccountController.updateAccount
);

//==================Delete==================
AccountRouter.delete(
  "/accounts/deleteAccount/:_id",
  AccountController.deleteAccount
);

export default AccountRouter;
