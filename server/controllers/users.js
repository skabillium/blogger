import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import User from "../models/User";

export const signup = async (req, res, next) => {
  try {
    const users = await User.find({ email: req.body.email }).exec();

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
                email: newUser.email,
                userId: newUser._id
              },
              process.env.JWT_KEY,
              { expiresIn: "1d" }
            );

            newUser
              .save()
              .then(result => {
                res.cookie("token", token, { httpOnly: true }).sendStatus(200);
              })
              .catch(err => {
                res.status(500).json(err);
              });
          }
        });
      }
    }
  } catch (error) {
    return res.status(500).json({ message: "db error" });
  }
};

export const login = async (req, res, next) => {
  try {
    const user = await User.find({ username: req.body.username }).exec();
  } catch (error) {
    return res.status(500).json({ message: "db error" });
  }
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

      return res.cookie("token", token, { httpOnly: true }).sendStatus(200);
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
