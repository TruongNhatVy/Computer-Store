import mongoose from "mongoose";

const schema = new mongoose.Schema({
  ProductId: {
    type: Number,
    require: true,
  },
  Quantity: {
    type: Number,
    require: true,
  },
  BrandId: {
    type: Number,
    require: true,
  },
  Name: {
    type: String,
    require: true,
  },
  CategoryId: {
    type: Number,
    require: true,
  },
  Image: {
    type: String,
    require: true,
  },
  Description: {
    type: String,
    require: true,
  },
  Price: {
    type: Number,
    require: true,
  },
  Status: {
    type: String,
    require: true,
  },
});

export const ProductModel = mongoose.model("products", schema);

//Convert type db
// db.products.find({}).forEach(function (doc) {
//   db.products.updateOne(
//     {
//       _id: doc._id,
//     },
//     {
//       $set: {
//         BrandId: Boolean(doc.BrandId),
//         Name: NumberInt(doc.Name),
//       },
//     }
//   );
// });
