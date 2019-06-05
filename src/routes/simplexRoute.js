import { Router } from 'express';
import { Post } from '../controllers/simplexController';

var router = Router();

router.route('/simplex').post(Post);

export default router;