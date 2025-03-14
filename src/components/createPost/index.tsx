"use client";

import React, { useState, ChangeEvent, FormEvent, useContext } from "react";
import styled from "styled-components";
import { Button } from "@nextui-org/button";
import { Input, Textarea, Select, SelectItem } from "@nextui-org/react";
import { Card } from "@nextui-org/react";
import { Send } from "@mui/icons-material";
import TitleIcon from "@mui/icons-material/Title";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import MessageIcon from "@mui/icons-material/Message";
import TextFormatIcon from "@mui/icons-material/TextFormat";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import ArticleIcon from "@mui/icons-material/Article";
import { UserContext } from "@/src/context/user";

// Definir tipos para los datos del formulario
interface FormData {
  title: string;
  subtitle: string;
  header: string;
  mainContent: string;
  footer: string;
  size: number;
  keywords: string[]; // Array de palabras clave seleccionadas
}

// Estilos usando styled-components
const FormContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  box-sizing: border-box;
  background-color: #f4f7fb;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr); /* 2 columnas en pantallas grandes */
  }
`;

const Title = styled.h2`
  text-align: center;
  color: #333;
  font-size: 2rem;
  margin-bottom: 1.5rem;
  font-weight: 600;
`;

const StyledInput = styled(Input)`
  width: 100%;
  padding: 1rem;
  border-radius: 8px;
  box-sizing: border-box;
  font-size: 1rem;
  margin-bottom: 1rem;
  border: 1px solid #e0e4e7;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:focus {
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  }

  &::placeholder {
    color: #9e9e9e;
  }

  @media (min-width: 768px) {
    padding: 1.25rem;
    font-size: 1.1rem;
  }
`;

const StyledTextarea = styled(Textarea)`
  width: 100%;
  padding: 1rem;
  border-radius: 8px;
  box-sizing: border-box;
  font-size: 1rem;
  margin-bottom: 1rem;
  resize: none;
  border: 1px solid #e0e4e7;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:focus {
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  }

  &::placeholder {
    color: #9e9e9e;
  }

  @media (min-width: 768px) {
    padding: 1.25rem;
    font-size: 1.1rem;
    height: 300px;
  }
`;

const StyledSelect = styled(Select)`
  width: 100%;
  padding: 1rem;
  border-radius: 8px;
  box-sizing: border-box;
  font-size: 1rem;
  margin-bottom: 1rem;
  border: 1px solid #e0e4e7;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:focus {
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  }

  &::placeholder {
    color: #9e9e9e;
  }

  @media (min-width: 768px) {
    padding: 1.25rem;
    font-size: 1.1rem;
  }
`;

const SubmitButton = styled(Button)`
  width: 100%;
  padding: 1rem;
  border-radius: 8px;
  font-size: 1.1rem;
  background-color: #0070f3;
  color: white;
  border: none;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #005bb5;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  @media (min-width: 768px) {
    width: auto;
    padding: 1.25rem;
  }

  &:disabled {
    background-color: #b0c7e3;
    box-shadow: none;
  }
`;

const CreatePost: React.FC = () => {
  const { createPost } = useContext(UserContext);
  const [formData, setFormData] = useState<FormData>({
    title: "",
    subtitle: "",
    header: "",
    mainContent: "",
    footer: "",
    size: 0,
    keywords: [],
  });
  const [errors, setErrors] = useState<{ [key in keyof FormData]?: string }>(
    {},
  );
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Lista de palabras clave relacionadas con el hogar de ancianos
  const keywordsList: string[] = [
    "Adulto mayor",
    "Tercera edad",
    "Personas mayores",
    "Envejecimiento",
    "Vejez",
    "Cuidado del adulto mayor",
    "Cuidado de ancianos",
    "Salud del adulto mayor",
    "Atención médica",
    "Bienestar del adulto mayor",
    "Bienestar de mayores",
    "Calidad de vida en la tercera edad",
    "Asistencia a mayores",
    "Cómo cuidar a un adulto mayor dependiente",
    "Actividades para adultos mayores en casa",
    "Ejercicios para mejorar la memoria en adultos mayores",
    "Alimentación saludable para personas de la tercera edad",
    "Residencias para adultos mayores en Montería, Córdoba, Colombia",
    "Hogar geriátrico",
    "Servicios de atención domiciliaria para adultos mayores",
    "Problemas de salud comunes en la tercera edad",
    "Cómo prevenir caídas en adultos mayores",
    "Beneficios de la actividad física en la tercera edad",
    "Consejos para el cuidado de la piel en adultos mayores",
    "Residencia de ancianos en Montería, Córdoba, Colombi",
    "Cuidado de ancianos a domicilio en Montería, Córdoba, Colombi",
    "Centro de día para adultos mayores en Montería, Córdoba, Colombi",
    "Médico geriatra en Montería, Córdoba, Colombi",
    "Cuidado de adultos mayores con Alzheimer",
    "Cuidado de adultos mayores con demencia",
    "Cuidado de adultos mayores con Parkinson",
    "Rehabilitación para adultos mayores",
    "Rehabilitación",
    "Apoyo emocional para adultos mayores",
    "Salud mental",
    "Aislamiento social en adultos mayores",
    "¿Cómo mejorar la calidad de vida de un adulto mayor?",
    "¿Qué tipo de ejercicios son recomendables para la tercera edad?",
    "¿Cuáles son los derechos de los adultos mayores?",
    "¿Cómo prevenir el deterioro cognitivo en la vejez?",
    "¿Dónde encontrar apoyo para el cuidado de un adulto mayor?",
    "Enfermería",
    "Servicios sociales",
  ];

  const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  // Validar los campos del formulario
  const validateForm = () => {
    const newErrors: { [key in keyof FormData]?: string } = {};

    if (!formData.title.trim()) newErrors.title = "El título es obligatorio";
    if (!formData.subtitle.trim())
      newErrors.subtitle = "El subtítulo es obligatorio";
    if (!formData.header.trim())
      newErrors.header = "El encabezado es obligatorio";
    if (!formData.mainContent.trim())
      newErrors.mainContent = "El contenido principal es obligatorio";
    if (!formData.footer.trim())
      newErrors.footer = "El pie de página es obligatorio";
    if (formData.keywords.length === 0)
      newErrors.keywords = "Selecciona al menos una palabra clave";
    if (!formData.size)
      newErrors.keywords = "Debes seleccionar el size del post";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0; // Si no hay errores, retornar true
  };

  // Manejar cambios en los campos del formulario
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Manejar cambios en el select de palabras clave
  const handleSelectChange = (selected: string) => {
    const selectedArray: string[] = [];

    selectedArray.push(selected);
    setFormData((prevData) => ({
      ...prevData,
      keywords: selectedArray,
    }));
  };

  const handleSelectChangeSize = (selected: number) => {
    setFormData((prevData) => ({
      ...prevData,
      size: selected,
    }));
  };

  // Función para manejar el envío del formulario
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Validar el formulario
    if (!validateForm()) return;

    // Si pasa la validación, simular el envío
    setIsSubmitting(true);

    try {
      const post = await createPost(formData);
      if (post) {
        setIsSubmitting(false);
        alert("Post creado exitosamente");
      }
    } catch (error) {
      throw error;
    }
  };

  return (
    <FormContainer style={{ backgroundColor: "transparent" }}>
      <Card style={{ backgroundColor: "transparent" }} className=" p-10">
        <Title style={{ padding: "1rem", color: "white" }}>
          Crear Nueva Publicación
        </Title>
        <Form onSubmit={handleSubmit}>
          <FormGrid>
            {/* Form Group 1 - Título, Subtítulo, Encabezado */}
            <FormGroup>
              <StyledInput
                isRequired
                label="Título"
                name="title"
                placeholder="Introduce el título de la publicación"
                startContent={
                  <span>
                    <TitleIcon />{" "}
                  </span>
                }
                type="text"
                value={formData.title}
                onChange={handleInputChange}
              />
              {errors.title && (
                <div style={{ color: "red" }}>{errors.title}</div>
              )}

              <StyledInput
                isRequired
                label="Subtítulo"
                name="subtitle"
                placeholder="Introduce el subtítulo de la publicación"
                startContent={
                  <>
                    <span>
                      {" "}
                      <TextFormatIcon />{" "}
                    </span>
                  </>
                }
                type="text"
                value={formData.subtitle}
                onChange={handleInputChange}
              />
              {errors.subtitle && (
                <div style={{ color: "red" }}>{errors.subtitle}</div>
              )}

              <StyledInput
                isRequired
                label="Encabezado"
                name="header"
                placeholder="Introduce el encabezado de la publicación"
                startContent={
                  <>
                    <span>
                      {" "}
                      <TextFieldsIcon />{" "}
                    </span>
                  </>
                }
                type="text"
                value={formData.header}
                onChange={handleInputChange}
              />
              {errors.header && (
                <div style={{ color: "red" }}>{errors.header}</div>
              )}
            </FormGroup>

            {/* Form Group 2 - Contenido Principal y Palabras Clave */}
            <FormGroup>
              <StyledTextarea
                isRequired
                label="Contenido principal"
                name="mainContent"
                placeholder="Introduce el contenido principal de la publicación"
                rows={5}
                startContent={
                  <>
                    <span>
                      {" "}
                      <NewspaperIcon />{" "}
                    </span>
                  </>
                }
                value={formData.mainContent}
                onChange={handleInputChange}
              />
              {errors.mainContent && (
                <div style={{ color: "red" }}>{errors.mainContent}</div>
              )}

              <StyledSelect
                isRequired
                label="Palabras clave"
                placeholder="Selecciona palabras clave relacionadas con el cuidado de ancianos"
                selectionMode="multiple"
                startContent={
                  <>
                    <span>
                      {" "}
                      <MessageIcon />{" "}
                    </span>
                  </>
                }
                style={{ overflow: "hidden", width: "20rem" }}
                onChange={(e) => handleSelectChange(e.target.value)}
              >
                {keywordsList.map((keyword) => (
                  <SelectItem key={keyword} value={keyword}>
                    {keyword}
                  </SelectItem>
                ))}
              </StyledSelect>
              {errors.keywords && (
                <div style={{ color: "red" }}>{errors.keywords}</div>
              )}

              <StyledSelect
                isRequired
                label="Medida del post"
                value={formData.size}
                startContent={
                  <>
                    <span>
                      {" "}
                      <MessageIcon />{" "}
                    </span>
                  </>
                }
                style={{ overflow: "hidden", width: "5rem" }}
                onChange={(e) => handleSelectChangeSize(Number(e.target.value))}
              >
                {numbers.map((keyword) => (
                  <SelectItem key={keyword} value={keyword}>
                    {keyword}
                  </SelectItem>
                ))}
              </StyledSelect>
              <h1 style={{ color: "white", fontWeight: "bolder" }}>
                La medida del post seleccionada es: {formData.size}{" "}
              </h1>
              {errors.keywords && (
                <div style={{ color: "red" }}>{errors.keywords}</div>
              )}
            </FormGroup>
          </FormGrid>

          {/* Form Group 3 - Pie de Página */}
          <FormGroup>
            <StyledInput
              isRequired
              label="Pie de página"
              name="footer"
              placeholder="Introduce el pie de página o información adicional"
              startContent={
                <>
                  <span>
                    {" "}
                    <ArticleIcon />{" "}
                  </span>
                </>
              }
              type="text"
              value={formData.footer}
              onChange={handleInputChange}
            />
            {errors.footer && (
              <div style={{ color: "red" }}>{errors.footer}</div>
            )}
          </FormGroup>

          {/* Botón de Envío */}
          <div style={{ textAlign: "right" }}>
            <SubmitButton color="primary" disabled={isSubmitting} type="submit">
              {isSubmitting ? "Enviando..." : "Enviar Publicación"} <Send />
            </SubmitButton>
          </div>
        </Form>
      </Card>
    </FormContainer>
  );
};

export default CreatePost;
