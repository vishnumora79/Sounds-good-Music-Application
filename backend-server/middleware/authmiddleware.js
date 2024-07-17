import jwt from 'jsonwebtoken';

export const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return res.sendStatus(403); 

    jwt.verify(token, 'vishnu79', (err, user) => {
        if (err) return res.sendStatus(403); 
        req.user = user;
        next();
    });
};
