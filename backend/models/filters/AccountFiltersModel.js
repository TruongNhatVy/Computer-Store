import mongoose, { Schema } from "mongoose";

const schema = new mongoose.Schema(
  {
    FirstName: {
      type: String,
    },
    LastName: {
      type: String,
      require: true,
    },
    Email: {
      type: String,
      require: true,
    },
    Phone: {
      type: String,
      require: true,
    },
    IsActive: {
      type: Boolean,
      require: true,
    },
    Role: {
      type: String,
      require: true,
    },
    Status: {
      type: String,
    },
  },
  { _id: false }
);

export const AccountFiltersModel = mongoose.model(
  "AccountFiltersModel",
  schema
);
