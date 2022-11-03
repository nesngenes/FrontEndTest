import express from 'express'

import {getDatas} from '../controllers/mypage.js';

const router = express.Router();

router.get('/', getDatas);

export default router;