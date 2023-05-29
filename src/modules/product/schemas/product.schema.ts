import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
  productId: { type: String, required: true },
  price: { type: Number, required: true },
});
