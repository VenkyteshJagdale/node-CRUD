const express = require('express');
const cors = require('cors');
const app = express();
// port
const PORT = process.env.PORT || 8080;

const corsOptions = {
    origin: 'http://localhost:8081'
};


// global middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


// routers
let productRouter = require('./routes/productRouter');
app.use('/api/products', productRouter);   

let ordersRouter = require('./routes/orderRouter');
app.use('/api/orders',ordersRouter);

let userRouter = require('./routes/userRouter');
app.use('/api/users',userRouter);

// api
app.get('/', (req, res) => {
    res.send("server running on port 8080")
})

// server
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})

