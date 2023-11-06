import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
dotenv.config();
const port = process.env.PORT || 6000;
import userRoutes from './routes/userRoutes.js';
import connectDB from './config/db.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

connectDB();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use(cookieParser());
app.use('/api/users', userRoutes);


app.get('/', (req, res) => res.send('Server is modified'));

app.use(notFound);
app.use(errorHandler);
app.listen(port, () => console.log(`Server lounched on port ${port}`));