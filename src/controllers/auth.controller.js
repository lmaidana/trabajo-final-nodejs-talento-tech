import { generate_token } from "../utils/jwt.js";

const default_user = {
    id: 1,
    email: "admin@admin.com",
    password: "123"
}

export async function login(req, res) {
    // validacion harcodeada y no asincronica, sin uso de service o model ya que se usa defalut_user
    const {id, email, password} = req.body;
    if (email !== "admin@admin.com" || password !== "123"){
        res.status(401).json({message: "Credenciales invalidas"})
    }
    const payload = {id, email};
    const token = generate_token(payload);
    res.cookie("token", token, {
    httpOnly: true,
    secure: false, // para solo en HTTPS modificar a true
    sameSite: "Strict", // o "Lax"?
    maxAge: 60 * 60 * 1000 // 1 hora
    });
    res.status(200).json({ message: "Login exitoso" });
    // res.status(200).json({token});
}

export const logout = (req, res) => {
    res.clearCookie("token", {
    httpOnly: true,
    secure: false, // o true si uso HTTPS
    sameSite: "Strict"
    });
    res.status(200).json({ message: "Sesión cerrada" });
}

export const me = (req, res) => {
  res.status(200).json({ user: req.user });
};


export default {login, logout, me};