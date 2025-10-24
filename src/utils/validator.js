export const validateProductData = (data) => {
  if (!data || typeof data !== "object") {
    return { valid: false, message: "Los datos del producto son inválidos o están vacíos" };
  }
  
  const { nombre, precio } = data;

  if (!nombre || typeof nombre !== "string" || nombre.trim() === "") {
    return { valid: false, message: "El nombre es obligatorio y debe ser una cadena de texto no vacía" };
  }

  if (precio === undefined || typeof precio !== "number" || isNaN(precio)) {
    return { valid: false, message: "El precio es obligatorio y debe ser un número válido" };
  }

  return { valid: true };
};