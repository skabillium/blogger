import jwt from "jsonwebtoken";

export const token_valid = (req, res) => {
  const token = req.cookies.token;
  const decoded = jwt.decode(token);
  const id = decoded.userId;

  res.status(200).json({ _id: id });
};
