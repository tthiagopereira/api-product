import { Document } from 'mongoose';

export class ProductInterface extends Document {
  productId: string;
  price: number;
}
