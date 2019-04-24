import express from 'express'

import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import User from '../models/User'

const router  = express.Router();

router.post('/signup', async (req, res, next) => {

    const users = await User.find({ email: req.body.email }).exec();

    if (users.length >= 1) {
        return res.status(409).json({ message: 'Mail exists' });
    } else {
        
        const user = await User.find({ username: req.body.username }).exec();

        if (user.length >= 1) {
            return res.status(409).json({ message: 'Username taken' });
        } else {

            bcrypt.hash(req.body.password, 10, (err, hash) => {
                if (err) {
                    return res.status(500).json(err);
                } else {
                    const newUser = new User({
                        _id: mongoose.Types.ObjectId(),
                        email: req.body.email,
                        username: req.body.username,
                        password: hash
                    });

                    newUser.save()
                        .then(result => {
                            res.status(201).json({ message: 'User created', user: result });
                        })
                        .catch(err => {
                            res.status(500).json(err);
                        });
                }
            });
        }
    }
});

export default router