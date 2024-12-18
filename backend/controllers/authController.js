// const bcrypt = require('bcrypt');
// const { PrismaClient } = require('@prisma/client');
// const prisma = new PrismaClient();



// exports.registerUser = async (req, res) => {
//   try {
//     const {
//       username,
//       email,
//       phoneNumber,
//       country,
//       location,
//       password,
//       dateOfBirth,
//     } = req.body;

   
//     if (!username || !email || !phoneNumber || !password || !dateOfBirth) {
//       return res.status(400).json({ message: "All fields are required" });
//     }

    
//     const existingUser = await prisma.user.findUnique({
//       where: { email },
//     });
//     if (existingUser) {
//       return res.status(400).json({ message: "Email already in use" });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

 
//     const newUser = await prisma.user.create({
//       data: {
//         username,
//         email,
//         phoneNumber,
//         country,
//         location,
//         password: hashedPassword,
//         dateOfBirth: new Date(dateOfBirth),
//       },
//     });

    
//     res.status(201).json({
//       message: "User registered successfully",
//       user: { id: newUser.id, username: newUser.username, email: newUser.email },
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };



const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


exports.registerUser = async (req, res) => {
  try {
    const {
      username,
      email,
      phoneNumber,
      country,
      location,
      password,
      dateOfBirth,
    } = req.body;

    
    if (!username || !email || !phoneNumber || !password || !dateOfBirth) {
      return res.status(400).json({ message: "All fields are required" });
    }

    
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });
    if (existingUser) {
      return res.status(400).json({ message: "Email already in use" });
    }

    
    const hashedPassword = await bcrypt.hash(password, 10);

    
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        phoneNumber,
        country,
        location,
        password: hashedPassword,
        dateOfBirth: new Date(dateOfBirth),
      },
    });

    res.status(201).json({
      message: "User registered successfully",
      user: { id: newUser.id, username: newUser.username, email: newUser.email },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};


exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    
    const user = await prisma.user.findUnique({
      where: { email },
    });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    
    const token = jwt.sign(
      { id: user.id, email: user.email },
      'your_jwt_secret', 
      { expiresIn: '1h' }
    );

    res.status(200).json({
      message: "Login successful",
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
