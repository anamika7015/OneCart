import express from 'express';
import { register } from '../controller/authUser.js';

const authRoutes = express.Router();
authRoutes.post('/register', register);
export default authRoutes;