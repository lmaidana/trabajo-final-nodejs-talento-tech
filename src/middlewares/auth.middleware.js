import { validate_token } from "../utils/jwt.js";

export const authenticate = (req, res, next) => {
    const token = req.headers["authorization"]?.split(" ")[1];
    if (!token) return res.sendStatus(401);
    try {
        const verificationResult = validate_token(token);
        if (!verificationResult.valid) return res.sendStatus(403);
        req.user = verificationResult.decoded;
        next();
    } catch (error) {
        res.status(403).json({ message: "Token inválido o expirado" });
    }
};

export default authenticate;