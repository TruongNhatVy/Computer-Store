import { AccountModel } from "../models/AccountModel.js";

export const getAllAccounts = async () => {
  return await AccountModel.find();
};

export const getAccountById = async (_id) => {
  return await AccountModel.findById(_id);
};

export const addAccount = async (account) => {
  return await AccountModel.create(account);
};

export const updateAccount = async (_id, account) => {
  await AccountModel.findByIdAndUpdate(_id, account);
};

export const deleteAccount = async (_id) => {
  await AccountModel.findByIdAndDelete(_id);
};
