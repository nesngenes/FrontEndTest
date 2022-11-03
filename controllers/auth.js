import jwt from 'jsonwebtoken';

import UserModal from '../models/users.js';

const secret = 'test'

export const signin = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await UserModal.findOne({ email });
  
      if (!user) return res.status(404).json({ message: "User doesn't exist" });
  
      const token = jwt.sign({ email: user.email, id: user._id }, secret, { expiresIn: "1h" });
  
      res.status(200).json({ result: user, token });
    } catch (err) {
      res.status(500).json({ message: "Something went wrong" });
    }
  };
  
  export const signup = async (req, res) => {
    const { email, password} = req.body;
  
    try {
      const user = await UserModal.findOne({ email });
  
      if (user) return res.status(400).json({ message: "User already exists" });
  
      const result = await UserModal.create({ email, password });
  
      const token = jwt.sign( { email: result.email, id: result._id }, secret, { expiresIn: "1h" } );
  
      res.status(201).json({ result, token });
    } catch (error) {
      res.status(500).json({ message: "Something went wrong" });
      
      console.log(error);
    }
  };
