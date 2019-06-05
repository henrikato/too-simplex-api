import { Router } from 'express';
import { Post } from './../controllers/mochilaController';

var router = Router();

router.route('/mochila').post(Post);

export default router;