import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv'

import authRoutes from './routes/auth.js';
import mypageRoutes from './routes/mypage.js';

import path from 'path';

import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

dotenv.config();

app.use(bodyParser.json({limit:"30mb", extended: true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended: true}));

app.use(cors());
app.use('/albatech/auth', authRoutes);
app.use('/albatech/mypage', mypageRoutes);

if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/client/build')))
    app.get('*', (req,res) => {
        res.sendFile(
            path.resolve(__dirname, 'client', 'build', 'index.html')
        )
    })
} else {
    app.get('/', (req,res) => {
        res.send('API IS RUNNING');
    })
}

const CONNECTION_URL = 'mongodb+srv://agnes:agnes123@albatech.pqmffh3.mongodb.net/?retryWrites=true&w=majority'

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT, () => console.log(`server running on port ${PORT}`)))
.catch((error) => console.log(error.message))