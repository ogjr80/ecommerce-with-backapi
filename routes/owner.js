const router = require('express').Router(); 
const Owner = require('../models/owner'); 

//get Category
router.get('/owners', async (req, res)=> {
    try {
        let owner = await Owner.find(); 
        res.status(200).json({
            success: true, 
            owner: owner
        });

    }
    catch(err){
        res.status(500).json({
            success: false, 
            message: err.message
        });
    }
})


//get a single Owner

//post a owner 
router.post("/owners", async (req, res) => {
    try {
        let owners = new Owner(); 
        owners.name = req.body.name; 
        owners.about = req.body.about; 

       

        await owners.save(); 
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
