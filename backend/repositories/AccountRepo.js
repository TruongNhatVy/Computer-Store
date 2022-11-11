import { AccountModel } from "../models/data/AccountModel.js";

const PAGE_SIZE = 1;

export const getAccounts = async (page) => {
  if (page) {
    page = parseInt(page);
    page = page < 1 ? 1 : page;

    const skipAccounts = (page - 1) * PAGE_SIZE;

    return await AccountModel.find().skip(skipAccounts).limit(PAGE_SIZE);
  } else {
    return await AccountModel.find();
  }
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
