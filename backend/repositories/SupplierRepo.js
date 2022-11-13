import { SupplierModel } from "../models/data/SupplierModel.js";

export const getFiltersSupplier = async (query, skipCategories, PAGE_SIZE) => {
  if (skipCategories >= 0) {
    return await SupplierModel.find(query)
      .skip(skipCategories)
      .limit(PAGE_SIZE);
  }

  return await SupplierModel.find(query);
};

export const getSupplierById = async (_id) => {
  return await SupplierModel.findById(_id);
};

export const addSupplier = async (Supplier) => {
  return await SupplierModel.create(Supplier);
};

export const updateSupplier = async (_id, Supplier) => {
  return await SupplierModel.findByIdAndUpdate(_id, Supplier);
};

export const deleteSupplier = async (_id) => {
  await SupplierModel.findByIdAndDelete(_id);
};
