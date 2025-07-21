export const validateProductData = (data) => {
  const { nombre, precio } = data;

  if (!nombre || typeof nombre !== "string" || nombre.trim() === "") {
    return { valid: false, message: "El nombre es obligatorio y debe ser una cadena de texto no vacia" };
  }

  if (precio === undefined || typeof precio !== "number" || isNaN(precio)) {
    return { valid: false, message: "El precio es obligatorio y debe ser un numero válido" };
  }

  return { valid: true };
};