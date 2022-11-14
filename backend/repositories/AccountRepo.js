import { AccountModel } from "../models/data/AccountModel.js";

export const getFiltersAccount = async (query, skipAccounts, PAGE_SIZE) => {
  if (skipAccounts >= 0) {
    return await AccountModel.find(query).skip(skipAccounts).limit(PAGE_SIZE);
  }

  return await AccountModel.find(query);
};

export const getAccountById = async (_id) => {
  return await AccountModel.findById(_id);
};

export const addAccount = async (Account) => {
  return await AccountModel.create(Account);
};

export const updateAccount = async (_id, Account) => {
  return await AccountModel.findByIdAndUpdate(_id, Account);
};

export const deleteAccount = async (_id) => {
  await AccountModel.findByIdAndDelete(_id);
};
