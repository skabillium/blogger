import express from 'express'
import mongoose from 'mongoose'

import checkAuth from '../middleware/check-auth'

import Post from '../models/Post'

const router = express.Router();

router.post('/', checkAuth, (req, res, next) => {
    
    const newPost = new Post({
        _id: mongoose.Types.ObjectId(),
        posted: new Date,
        user_id: req.body.user_id,
        title: req.body.title,
        content: req.body.content
    });

    newPost.save()
        .then(result => {
            res.status(201).json({ message: 'Post created', post: result });
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

router.get('/:user_id', checkAuth,async (req, res, next) => {

    try {
        const posts = await Post.find({ user_id: req.params.user_id }).exec();
        if (posts.length > 0) {
            res.status(200).json(posts);
        } else {
            res.status(204).json({ message: 'No available posts for user' });
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

router.patch('/:post_id', checkAuth, (req, res, next) => {

    const id = req.params.post_id;
    let updateOpts = req.body;

    Post.update({_id: id}, { $set: updateOpts})
        .exec()
        .then(result => {
            res.status(200).json({ message: 'Post updated' });
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

router.delete('/:post_id', checkAuth,(req, res, next) => {

    Post.remove({ _id: req.params.post_id })
        .exec()
        .then(result => {
            res.status(200).json({ message: 'Post deleted' });
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

export default router