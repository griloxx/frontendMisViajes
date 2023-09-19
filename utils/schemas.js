import Joi from "joi";

export const schemaModificarUsuario = Joi.object({
    name: Joi.string().max(50).required().messages({
      "string.base": "Nombre debe ser de tipo texto",
      "string.max": "Password debe tener máximo 50 caracteres",
      "string.empty": "Nombre no puede estar vacío",
      "any.required": "Nombre es obligatorio"
    }),
    password: Joi.string().allow("").min(6).max(20).messages({
      "string.base": "Password debe ser de tipo texto",
      "string.min": "Password debe tener mínimo 6 caracteres",
      "string.max": "Password debe tener máximo 20 caracteres"
    }),
    avatar: Joi.allow(""),
  });