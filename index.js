import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv'
import path from 'path';

import authRoutes from './routes/auth.js';
import mypageRoutes from './routes/mypage.js';


const app = express();

dotenv.config();

app.use(bodyParser.json({limit:"30mb", extended: true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended: true}));

app.use(cors());
app.use('/albatech/auth', authRoutes);
app.use('/albatech/mypage', mypageRoutes);

app.get('/', (req, res) => {
    res.send('API RUNNING')
})

const CONNECTION_URL = process.env.CONNECTION_URL

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT, () => console.log(`server running on port ${PORT}`)))
.catch((error) => console.log(error.message))