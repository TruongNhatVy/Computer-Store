import mongoose from "mongoose";

const schema = new mongoose.schema({
  MaThuongHieu: {
    type: String,
    require: true,
  },
  TenThuongHieu: {
    type: String,
    require: true,
  },
  TrangThai: {
    type: String,
    require: true,
  },
});

export const ThuongHieuModel = mongoose.model("ThuongHieu", schema);
