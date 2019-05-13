import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import User from "../models/User";

export const signup = async (req, res, next) => {
  try {
    const users = await User.find({ email: req.body.email }).exec();
  } catch (error) {
    return res.status(500).json({ message: "db error" });
  }

  if (users.length >= 1) {
    return res.status(409).json({ message: "Mail exists" });
  } else {
    const user = await User.find({ username: req.body.username }).exec();

    if (user.length >= 1) {
      return res.status(409).json({ message: "Username taken" });
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

          const token = jwt.sign(
            {
              email: user[0].email,
              userId: user[0]._id
            },
            process.env.JWT_KEY,
            { expiresIn: "1d" }
          );

          newUser
            .save()
            .then(result => {
              res
                .status(201)
                .json({ message: "User created", user: result, token });
            })
            .catch(err => {
              res.status(500).json(err);
            });
        }
      });
    }
  }
};

export const login = async (req, res, next) => {
  const user = await User.find({ username: req.body.username }).exec();

  if (user.length < 1) {
    return res.status(401).json({
      message: "Auth failed1"
    });
  }

  bcrypt.compare(req.body.password, user[0].password, (err, result) => {
    if (err) {
      return res.status(401).json({
        message: "Auth failed2"
      });
    }

    if (result) {
      const token = jwt.sign(
        {
          email: user[0].email,
          userId: user[0]._id
        },
        process.env.JWT_KEY,
        { expiresIn: "1d" }
      );

      return res.status(200).json({
        message: "Auth succesful",
        id: user._id,
        token
      });
    }
  });
};

export const _delete = (req, res, next) => {
  User.remove({ _id: req.params.userId })
    .exec()
    .then(result => {
      res.status(200).json({ message: "User deleted" });
    })
    .catch(err => {
      res.status(500).json(err);
    });
};