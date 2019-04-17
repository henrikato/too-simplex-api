import { Router } from 'express';
import { Get, Post } from '../controllers/simplexController';

var router = Router();

router.route('/simplex')
.post(Post)
.get(Get);

export default router;