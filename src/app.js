const express = require('express');
const cors = require('cors');
const app = express();
const productRoutes = require('./routes/product.routes');



// middleware
app.use(cors());
app.use(express.json());    

// test route
app.get('/', (req,res)=>{
    res.json({message: 'Welcome to the API!',success: true});
    console.log('Test route accessed');
})

// product routes
app.use('/api/products', productRoutes);

module.exports = app;
