import express from 'express'

import checkAuth from '../middleware/check-auth'

import * as postController from '../controllers/posts'

const router = express.Router();

router.post('/', checkAuth, postController.add_post);

router.get('/:user_id', checkAuth, postController.get_by_user);

router.patch('/:post_id', checkAuth, postController.update_post);

router.delete('/:post_id', checkAuth, postController.delete_post);

export default router