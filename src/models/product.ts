import mongoose, { Schema, Document } from 'mongoose'; 

export interface IProduct extends Document {
    catefory: string,
    name: string,
    price: number
}

const ProductSchema = new Schema ({
    category: { type: String },
    name: {type: String},
    price: {type: Number}
},{
    timestamps: true
})

const ProductModel = mongoose.model<IProduct>("Product", ProductSchema);

export default ProductModel;