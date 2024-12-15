import * as Yup from 'yup';

// Expresión regular para validar un número de teléfono celular (Ej. solo acepta 10 dígitos)
const phoneRegex = /^\d{10}$/;

// Expresión regular para validar un correo electrónico
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validationSchema = Yup.object().shape({
  fullName: Yup.string()
    .required('El nombre completo es requerido')
    .min(1, 'El nombre completo no puede estar vacío')
    .trim(),
  
  email: Yup.string()
    .required('El correo electrónico es requerido')
    .matches(emailRegex, 'El correo electrónico debe ser válido'),

  phone: Yup.string()
    .required('El número de teléfono celular es requerido'),
    // .matches(phoneRegex, 'El número de teléfono celular debe tener 10 dígitos'),

  age: Yup.number()
    .required('La edad es requerida')
    .min(18, 'La edad mínima es 18 años')
    .max(120, 'La edad máxima es 120 años'),

  plan: Yup.string()
    .required('El plan es requerido')
    // .oneOf(
    //   ['hogar permanente compartido', 'hogar permanente VIP', 'hogar permanente VIP compartido', 'hogar vacaciones'],
    //   'El plan no es correcto'
    // )
});


export default validationSchema
