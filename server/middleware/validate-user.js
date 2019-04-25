import jwt from 'jsonwebtoken'

export default (req, res, next) => {

    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.decode(token);
    const id = req.body.user_id;

    if (id === decoded.userId) {
        next();
    } else {
        return res.status(401).json({ message: 'Auth failed2' });
    }
}