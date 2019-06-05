import jwt from "jsonwebtoken";

// Authorization middleware that checks the header of the request for the
// authentication token and throws error if it fails
export default (req, res, next) => {
  try {
    const token = req.cookies.token;
    const decoded = jwt.verify(token, process.env.JWT_KEY);

    req.userData = decoded;
    next();
  } catch (error) {
    return res.status(401).json({
      message: "Auth failed"
    });
  }
};
