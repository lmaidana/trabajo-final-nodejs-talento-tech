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
    res.status(200).json({token});
}

export default {login};