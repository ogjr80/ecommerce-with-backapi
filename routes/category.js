const router = require('express').Router(); 
const Category = require('../models/category'); 

//get Category
router.get('/categories', async (req, res)=> {
    try {
        let categories = await Category.find(); 
        res.status(200).json({
            success: true, 
            categories: categories
        });

    }
    catch(err){
        res.status(500).json({
            success: false, 
            message: err.message
        });
    }
})


//get a single Category

//post a Category 
router.post("/category", async (req, res) => {
    try {
        let category = new Category(); 
        category.type = req.body.type; 
       

        await category.save(); 
        res.status(200).json({
            success: true, 
            message: "successfully saved category"
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
