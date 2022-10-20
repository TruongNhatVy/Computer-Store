import mongoose from "mongoose";

const schema = new mongoose.Schema({
  MaSanPham: {
    type: String,
    require: true,
  },
  TenSanPham: {
    type: String,
    require: true,
  },
  SoLuong: {
    type: Number,
    require: true,
  },
  MaThuongHieu: {
    type: String,
    require: true,
  },
  MaDanhMuc: {
    type: String,
    require: true,
  },
  Anh: {
    type: String,
    require: true,
  },
  MoTa: {
    type: String,
    require: true,
  },
  Gia: {
    type: String,
    require: true,
  },
  TrangThai: {
    type: String,
    require: true,
  },
});

export const ProductModel = mongoose.model("SanPham", schema);
