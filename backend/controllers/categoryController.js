const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


exports.getProductsByCategory = async (req, res) => {
  try {
    const { category } = req.params;

    const products = await prisma.product.findMany({
      where: {
        category: category.toUpperCase(),
      },
    });

    if (products.length === 0) {
      return res.status(404).json({ message: `No products found in ${category} category.` });
    }

    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch products by category' });
  }
};
