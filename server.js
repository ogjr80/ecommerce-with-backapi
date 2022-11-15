const express = require('express'); 
const morgan = require('morgan'); 
const bodyParser = require('body-parser'); 
const { default: mongoose } = require('mongoose');
const dotenv = require('dotenv'); 


dotenv.config(); 
const app = express(); 

const User = require('./models/user'); 
const productRoute = require('./routes/product'); 
const categoryRoute = require('./routes/category'); 
const ownersRoute = require('./routes/owner'); 


//connect to mongodb 
mongoose.connect(process.env.DATABASE, (err)=> {
    if(err){
        console.log(err);
    }
    else {
    console.log('connected to mongodb'); 
    }
}); 
//middleware
app.use(morgan("dev")); 
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: false}));

//import api 
app.use('/api', productRoute); 
app.use('/api', categoryRoute); 
app.use('/api', ownersRoute); 



app.listen(4004, function(){
    console.log('server running on port 4004'); 
})
