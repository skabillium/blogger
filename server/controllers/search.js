import User from "../models/User";

export const search = async (req, res, next) => {
  const { phrase } = req.params;
  const term = new RegExp(phrase);
  const query = { username: term };

  try {
    const result = await User.find(query).exec();
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json(err);
  }
};
