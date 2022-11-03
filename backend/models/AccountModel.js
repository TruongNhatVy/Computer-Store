import mongoose from "mongoose";

const schema = new mongoose.Schema({
  AccountId: {
    type: Number,
    require: true,
  },
  FirstName: {
    type: String,
    require: true,
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
  Password: {
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
});

export const AccountModel = mongoose.model("accounts", schema);
