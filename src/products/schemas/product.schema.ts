import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

// Java Script template
// new mongoose.Schema({
//   title: String,
//   price: Number,
// });

@Schema()
export class Product {
  @Prop()
  title: string;

  @Prop()
  price: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
