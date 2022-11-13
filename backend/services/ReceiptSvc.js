import * as ReceiptRepo from "../repositories/ReceiptRepo.js";
import { ReceiptFiltersModel } from "../models/filters/ReceiptFiltersModel.js";
import * as Utils from "../utils/Utils.js";

const PAGE_SIZE = 10;

export const getFiltersReceipt = async (filters) => {
  Utils.cleanObject(filters);

  const nearlyRight = [];
  const ignoreCases = [];
  const receiptFilters = new ReceiptFiltersModel(filters);
  const query = {};
  let skipReceipts = -1;

  Utils.addQueryNearlyRight(query, nearlyRight, receiptFilters);
  Utils.addQueryIgnoreCase(query, ignoreCases, receiptFilters);
  Utils.addQueryLeft(query, nearlyRight.concat(ignoreCases), receiptFilters);

  if (query["DateStart"] && query["DateEnd"]) {
    query["Date"] = {
      $gte: new Date(query["DateStart"]),
      $lte: new Date(query["DateEnd"]),
    };

    delete query["DateStart"];
    delete query["DateEnd"];
  }

  if (filters.page) {
    filters.page = Number(filters.page) < 1 ? 1 : Number(filters.page);

    skipReceipts = (filters.page - 1) * PAGE_SIZE;
  }

  return await ReceiptRepo.getFiltersReceipt(query, skipReceipts, PAGE_SIZE);
};

export const getReceiptById = async (_id) => {
  return await ReceiptRepo.getReceiptById(_id);
};

export const addReceipt = async (receipt) => {
  return await ReceiptRepo.addReceipt(receipt);
};
