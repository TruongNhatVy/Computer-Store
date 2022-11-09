import * as AccountRepo from "../repositories/AccountRepo.js";

export const getAllAccounts = async () => {
  return await AccountRepo.getAllAccounts();
};

export const getAccountById = async (_id) => {
  return await AccountRepo.getAccountById(_id);
};

export const addAccount = async (product) => {
  return await AccountRepo.addAccount(product);
};

export const updateAccount = async (_id, product) => {
  await AccountRepo.updateAccount(_id, product);

  return getAccountById(_id);
};

export const deleteAccount = async (_id) => {
  await AccountRepo.deleteAccount(_id);
};
