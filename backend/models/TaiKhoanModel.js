import mongoose from "mongoose";

const schema = new mongoose.schema({
  MaTaiKhoan: {
    type: String,
    require: true,
  },
  HoLot: {
    type: String,
    require: true,
  },
  Ten: {
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
  MatKhau: {
    type: String,
    require: true,
  },
  KichHoat: {
    type: String,
    require: true,
  },
  Quyen: {
    type: String,
    require: true,
  },
  GhiChu: {
    type: String,
  },
});

export const TaiKhoanModel = mongoose.model("TaiKhoan", schema);
