const express = require('express');
const dotenv = require('dotenv');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const authRoutes = require('./routes/authRoutes');
// const adminRoutes = require('./routes/adminRoutes');


dotenv.config();
const app = express();

app.use(express.json());


app.use(productRoutes);
app.use(orderRoutes);
app.use(categoryRoutes);
app.use(authRoutes);
// app.use(adminRoutes);



const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
