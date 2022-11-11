import mongoose, { Schema, SchemaType } from "mongoose";

const schema = new mongoose.Schema({});

export const ProductReviewModel = mongoose.model("productReviews", schema);
