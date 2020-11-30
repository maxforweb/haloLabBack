import express from 'express';
import {ProductModel} from '../models'

class ProductController {

    getAll (req: express.Request, res: express.Response ){
        
        ProductModel.find()
        .exec( function ( err, products ) {
            if (err) res.json({
                message: " error occured"
            }) 

            res.json(products);
        } )
    }

    create ( req: express.Request, res: express.Response ) {

        const PostData = {
            category: req.body.category,
            name: req.body.name,
            price: req.body.price
        }

        const newProduct = new ProductModel( PostData );

        newProduct
        .save()
        .then( ( obj: any ) => {
            res.json( obj )
        })
        .catch( ( err ) => {
            res.json( err )
        }) 
    }
}

export default ProductController;