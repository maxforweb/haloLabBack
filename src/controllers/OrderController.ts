import express from 'express';
import { OrderModel } from '../models';

class OrderController {

    createOrder ( req: express.Request, res: express.Response ) {
        
        const PostData = {
            name : req.body.name,
            phone: req.body.phone,
            product: req.body.productId,
            productName: req.body.productName,
            productCategory: req.body.productCategory,
            productPrice: req.body.productPrice
        }

        const newOrder = new OrderModel( PostData );

        newOrder.save()
        .then( ( obj: any) => {
            res.json( obj );
        } )
        .catch(  err  => {
            res.json( err );
        })
    }
}

export default OrderController;