import * as ReceiptRepo from "../repositories/ReceiptRepo.js";
import * as ReceiptDetailsSvc from "./ReceiptDetailsSvc.js";
import * as ProductSvc from "../services/ProductSvc.js";
import * as Utils from "../utils/Utils.js";
import { ReceiptFiltersModel } from "../models/filters/ReceiptFiltersModel.js";
import moment from "moment";

const PAGE_SIZE = 10;

export const getFiltersReceipt = async (filters) => {
  Utils.cleanObject(filters);

  const nearlyRight = [];
  const ignoreCases = [];
  const receiptFilters = new ReceiptFiltersModel(filters);
  const query = {};
  let skipReceipts = -1;

  Utils.addQueryFilters(
    query,
    nearlyRight,
    receiptFilters,
    Utils.regexNearlyRight(),
    "iu"
  );
  Utils.addQueryFilters(
    query,
    ignoreCases,
    receiptFilters,
    Utils.regexExactly(),
    "iu"
  );
  Utils.addQueryLeft(query, nearlyRight.concat(ignoreCases), receiptFilters);

  if (query["DateStart"] && query["DateEnd"]) {
    query["Date"] = {
      $gte: query["DateStart"],
      $lte: query["DateEnd"],
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

export const updateReceipt = async (_id, receipt) => {
  return await ReceiptRepo.updateReceipt(_id, receipt);
  //return getReceiptById(_id);
};

export const deleteReceipt = async (_id) => {
  await ReceiptRepo.deleteReceipt(_id);
};

export const warehouseReceived = async () => {
  const productOld = {
    Total: 160940000, //6363f9e950420980842dfd6e - 2 ; 6363f9e950420980842dfd6f - 3 ; 6363f9e950420980842dfd70 - 1
    Products: [
      {
        ProductId: "6363f9e950420980842dfd6e",
        UnitPrice: 25990000,
        Quantity: 2,
        Total: 51980000,
      },
      {
        ProductId: "6363f9e950420980842dfd6f",
        UnitPrice: 25490000,
        Quantity: 3,
        Total: 76470000,
      },
      {
        ProductId: "6363f9e950420980842dfd70",
        UnitPrice: 32490000,
        Quantity: 1,
        Total: 32490000,
      },
    ],
  };

  //---------------------add receipt---------------------
  const receipt = {
    Date: moment(Date.now()).format("YYYY-MM-DD"),
    Total: productOld.Total,
  };

  const receiptAdd = await addReceipt(receipt);

  //---------------------add receipt details---------------------
  productOld.Products.forEach((element) => {
    element["ReceiptId"] = receiptAdd["_id"].toString();
  });

  await ReceiptDetailsSvc.addReceiptDetails(productOld.Products);

  //---------------------add quantity products---------------------
  await ProductSvc.addQuantityProduct(productOld.Products);
};


