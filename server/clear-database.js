import mongoose from "mongoose";

import User from "./models/User";
import Post from "./models/Post";

mongoose.connect("mongodb://localhost:27017/blog", {
  useNewUrlParser: true
});
mongoose.Promise = global.Promise;

User.find()
  .remove()
  .exec()
  .then(res => console.log("User collection cleared"))
  .catch(err => console.log("Error clearing user collection \n" + err));

Post.find()
  .remove()
  .exec()
  .then(res => console.log("Post collection cleared"))
  .catch(err => console.log("Error clearing Post collection \n" + err));
