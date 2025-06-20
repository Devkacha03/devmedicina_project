const jwt = require('jsonwebtoken');

const authenticateUser = (req, res, next) => {
    const token = req.header('x-auth-token');
    if (!token) return res.redirect('/users/login');
    try {
        const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = decoded;
        next();
    } catch (ex) {
        return res.redirect('/login');
    }
};

module.exports = { authenticateUser };  