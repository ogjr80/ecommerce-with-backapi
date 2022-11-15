const router = require('express').Router(); 
const Product = require('../models/product'); 

//get product
 router.get('/products', async (req, res) => {
    try {
        const data = await Product.find();
        res.status(200).json({
            success: true, 
            products: data
        });
    }
    catch(err){
        res.status(500).json({
            success: false, 
            message: err.message
        });
    }
 });

//get a single product

//post a product 
router.post("/products", async (req, res) => {
    try {
        let product = new Product(); 
        product.title = req.body.title; 
        product.description = req.body.description;
        product.photo = req.body.photo;
        product.price = req.body.price; 
        product.stockQuantity = req.body.stockQuantity;

        await product.save(); 
        res.status(200).json({
            success: true, 
            message: "successfully saved product"
        });
    } catch (err) {
            res.status(500).json({
                success: false, 
                message: err.message
            });
    }
});

//put a product - udpate


//delete a product - single product delete


module.exports = router; 
