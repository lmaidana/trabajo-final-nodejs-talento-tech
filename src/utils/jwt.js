import jwt from "jsonwebtoken";

const jwt_secret = process.env.JWT_SECRET;
const expiresIn = process.env.JWT_EXPIRES_IN;

export const generate_token = (userData) => {
    const user = {id: userData.id, email: userData.email, role:userData.role};
    return jwt.sign(user,jwt_secret,{expiresIn: expiresIn});
}

export const validate_token = (token) => {
    try {
        const decoded = jwt.verify(token, jwt_secret);
        return {valid: true, decoded};
    } catch (error) {
        return {message: error.message, valid: false};
    }
};