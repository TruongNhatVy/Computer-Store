import mongoose, { Schema } from "mongoose";

const schema = new mongoose.Schema(
  {
    CategoryId: {
      type: Schema.Types.ObjectId,
    },
    BrandId: {
      type: Schema.Types.ObjectId,
    },
    Name: {
      type: String,
    },
    PriceStart: {
      type: Number,
    },
    PriceEnd: {
      type: Number,
    },
    Status: {
      type: String,
    },
  },
  { _id: false}
);

export const ProductFiltersModel = mongoose.model(
  "ProductFiltersModel",
  schema
);
