import mongoose from "mongoose";

const schema = new mongoose.schema({
  MaDanhMuc: {},
  TenDanhMuc: {},
  TrangThai: {},
});

export const DanhMucModel = mongoose.model("DanhMuc", schema);
