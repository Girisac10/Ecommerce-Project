const express = require('express');
const dotenv = require('dotenv');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const authRoutes = require('./routes/authRoutes');



dotenv.config();
const app = express();

app.use(express.json());


app.use('/api/v1',productRoutes);
app.use('/api/v1',orderRoutes);
app.use('/api/v1',categoryRoutes);
app.use('/api/v1',authRoutes);




const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
