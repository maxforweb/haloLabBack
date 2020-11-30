import mongoose, { Schema, Document } from 'mongoose'; 
import { IProduct } from './product';

export interface IOrder extends Document {
    name: string,
    phone: string,
    product:  IProduct | string,
    productName: string,
    productCategory: string,
    productPrice: string
}

const OrderSchema = new Schema ({
    name: { type: String },
    phone: { type: String},
    product: { type: Schema.Types.ObjectId, ref: 'product' },
    productName: {type: String},
    productCategory: {type: String},
    productPrice: {type: String}
})

const OrderModel = mongoose.model<IOrder>( 'Order', OrderSchema);

export default OrderModel;