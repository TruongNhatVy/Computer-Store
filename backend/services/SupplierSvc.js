import * as SupplierRepo from "../repositories/SupplierRepo.js";
import { SupplierFiltersModel } from "../models/filters/SupplierFiltersModel.js";
import * as Utils from "../utils/Utils.js";

const PAGE_SIZE = 10;

export const getFiltersSupplier = async (filters) => {
  Utils.cleanObject(filters);

  const nearlyRight = ["Name", "Address"];
  const ignoreCases = [];
  const supplierFilters = new SupplierFiltersModel(filters);
  const query = {};
  let skipSuppliers = -1;

  Utils.addQueryNearlyRight(query, nearlyRight, supplierFilters);
  Utils.addQueryIgnoreCase(query, ignoreCases, supplierFilters);
  Utils.addQueryLeft(query, nearlyRight.concat(ignoreCases), supplierFilters);
console.log(query);
  if (filters.page) {
    filters.page = Number(filters.page) < 1 ? 1 : Number(filters.page);

    skipSuppliers = (filters.page - 1) * PAGE_SIZE;
  }

  return await SupplierRepo.getFiltersSupplier(query, skipSuppliers, PAGE_SIZE);
};

export const getSupplierById = async (_id) => {
  return await SupplierRepo.getSupplierById(_id);
};

export const addSupplier = async (Supplier) => {
  return await SupplierRepo.addSupplier(Supplier);
};

export const updateSupplier = async (_id, Supplier) => {
  return await SupplierRepo.updateSupplier(_id, Supplier);
  //return getSupplierById(_id);
};

export const deleteSupplier = async (_id) => {
  await SupplierRepo.deleteSupplier(_id);
};
