import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser';
import cors from 'cors';

import { ProductController, OrderController } from './controllers';

const app = express()
const port = 3000

app.use(bodyParser.json());
app.use(cors());

const Product = new ProductController;
const Order = new OrderController;

mongoose.connect('mongodb://localhost:27017/halolab', {
  useNewUrlParser: true, 
  useUnifiedTopology: true,
  useFindAndModify: false
});

app.get( '/products', Product.getAll  );
app.post( '/products/create', Product.create );

app.post( '/order/create', Order.createOrder);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})