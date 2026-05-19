const express = require('express');
const cors = require('cors');
const app = express();
const productRoutes = require('./routes/product.routes');
const authRoutes = require('./routes/auth.routes');
const userRoutes = require('./routes/user.routes')
const errorMiddleware = require('./middlewares/error.middleware');




// middleware
app.use(cors());
app.use(errorMiddleware);
app.use(express.json());    

// test route
app.get('/', (req,res)=>{
    res.json({message: 'Welcome to the API!',success: true});
    console.log('Test route accessed');
})

// routes
app.use('/api/auth', authRoutes);
app.use('api/user', userRoutes);
app.use('/api/products', productRoutes);

module.exports = app;
