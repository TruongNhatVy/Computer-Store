import * as AccountRepo from "../repositories/AccountRepo.js";
import * as Utils from "../utils/Utils.js";

export const getAccounts = async (page) => {
  return await AccountRepo.getAccounts(page);
};

export const getAccountById = async (_id) => {
  return await AccountRepo.getAccountById(_id);
};

export const addAccount = async (account) => {
  account.Password = await Utils.HashPassword(account.Password);

  return await AccountRepo.addAccount(account);
};

export const updateAccount = async (_id, account) => {
  await AccountRepo.updateAccount(_id, account);

  return getAccountById(_id);
};

export const deleteAccount = async (_id) => {
  await AccountRepo.deleteAccount(_id);
};
