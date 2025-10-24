import { validate_token } from "../utils/jwt.js";

export const authenticate = (req, res, next) => {
  const token = req.cookies.token; // Leer desde cookie en vez de header

  if (!token) return res.status(401).json({ message: "Token faltante" });

  const verificationResult = validate_token(token)

  if (!verificationResult.valid) {
    return res.status(403).json({ message: "Token inválido o expirado" });
  }

  req.user = verificationResult.decoded;
  next();
};

export default authenticate;