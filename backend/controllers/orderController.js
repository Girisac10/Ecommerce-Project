const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.createOrder = async (req, res) => {
    try {
      const { cartItems, amount } = req.body;
  
      const newOrder = await prisma.order.create({
        data: {
          cartItems: JSON.stringify(cartItems), 
          amount,
        },
      });
  
      res.status(201).json(newOrder); 
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to create order' });
    }
  };
  
