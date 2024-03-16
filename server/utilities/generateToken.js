const jwt = require('jsonwebtoken');
const dotenv = require('dotenv')
dotenv.config();
JWT_TOKEN = process.env.JWT_TOKEN;

function generateToken({ userId }) {
    return jwt.sign(
        { 
            userId
        },
        JWT_TOKEN,
        {expiresIn : "30d"}
    )
}

module.exports = generateToken