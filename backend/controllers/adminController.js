// const { PrismaClient } = require('@prisma/client');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const prisma = new PrismaClient();


// const adminLogin = async (req, res) => {
//   const { email, password } = req.body;

//   try {
    
//     const admin = await prisma.admin.findUnique({
//       where: { email },
//     });

//     if (!admin) {
//       return res.status(404).json({ message: 'Admin not found!' });
//     }


//     const isPasswordValid = await bcrypt.compare(password, admin.password);
//     if (!isPasswordValid) {
//       return res.status(401).json({ message: 'Invalid credentials!' });
//     }

   
//     const token = jwt.sign(
//       { id: admin.id, email: admin.email, role: 'admin' }, 
//       'your_jwt_secret', 
//       { expiresIn: '1h' } 
//     );

  
//     res.status(200).json({
//       message: 'Login successful!',
//       token,
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Something went wrong', error });
//   }
// };

// module.exports = { adminLogin };
