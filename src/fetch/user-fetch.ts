"use client";

// const URL_FETCH = "http://localhost:3001";
const URL_FETCH = "https://back-hogar-esperanza.onrender.com";


import Cookies from "js-cookie";
import { ISendMailToUser } from "../interfaces/interfaces";

export const loginFetch = async (email: string, password: string) => {
  try {
    const response = await fetch(`${URL_FETCH}/auth`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    return data;
  } catch (error) {
    console.log("Error en la solicitud:", error);
  }
};

export const createPostFetch = async (post: any) => {
  const token = Cookies.get("token"); // Obtén el token desde las cookies
  if (!token) {
    console.error("No se encontró un token para la autenticación");
    return;
  }

  try {
    const response = await fetch(`${URL_FETCH}/post`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // Pasamos el token en los headers
      },
      body: JSON.stringify(post),
    });

    if (!response.ok) {
      // Manejar errores HTTP
      throw new Error(
        `Error HTTP: ${response.status} - ${response.statusText}`
      );
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error en la solicitud:", error);
    return null;
  }
};

export const getAllPostFetch = async () => {
  try {
    const response = await fetch(`${URL_FETCH}/post`, {
      method: "GET", // Método GET para obtener los posts
      headers: {
        "Content-Type": "application/json", // Indicamos que es JSON
      },
    });

    if (!response.ok) {
      // Manejo de errores HTTP
      throw new Error(
        `Error HTTP: ${response.status} - ${response.statusText}`
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al obtener los posts:", error);
    return null;
  }
};

export const deletePostByIdFetch = async (id: string) => {
  try {
    const response = await fetch(`${URL_FETCH}/post/${id}`, {
      method: "DELETE", // Método GET para obtener los posts
      headers: {
        "Content-Type": "application/json", // Indicamos que es JSON
      },
    });

    if (!response.ok) {
      // Manejo de errores HTTP
      throw new Error(
        `Error HTTP: ${response.status} - ${response.statusText}`
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al obtener los posts:", error);
    return null;
  }
};

export async function uploadImageFetch(id: string, file: File) {
  // Crear un FormData para enviar el archivo
  const formData = new FormData();
  formData.append("file", file);
  const token = Cookies.get("token");

  try {
    // Realizar la petición POST con fetch
    const response = await fetch(
      `${URL_FETCH}/file-upload/uploadImage/${id}`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`, // Pasamos el token en los headers
        },
        body: formData,
        // Con cookies habilitadas por defecto, no necesitas hacer nada extra
      }
    );

    // Comprobar si la respuesta es exitosa
    if (!response.ok) {
      throw new Error(`Error al subir la imagen: ${response.statusText}`);
    }

    // Obtener la respuesta en formato JSON (o el formato esperado por el servidor)
    const data = await response.json();
    console.log("Imagen subida exitosamente:", data);
    return data;
  } catch (error) {
    console.error("Error al hacer la petición:", error);
  }
}

export async function getPostByIdFetch(id: string) {
  try {
    const response = await fetch(`${URL_FETCH}/post/${id}`, {
      method: "GET", // Método GET para obtener los posts
      headers: {
        "Content-Type": "application/json", // Indicamos que es JSON
      },
    });

    if (!response.ok) {
      // Manejo de errores HTTP
      throw new Error(
        `Error HTTP: ${response.status} - ${response.statusText}`
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al obtener los posts:", error);
    return null;
  }
}

export async function sendMailToUserFetch(userForm: ISendMailToUser): Promise<any> {
  try {
    const response = await fetch(`${URL_FETCH}/users-form`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json", // Cabecera necesaria para JSON
      },
      body: JSON.stringify(userForm),
    });

    // Verifica si la respuesta no es OK
    if (!response.ok) {
      const errorText = await response.text(); // Intenta obtener el mensaje de error del servidor
      throw new Error(`Error al enviar el formulario: ${response.status} - ${errorText}`);
    }

    const data = await response.json(); // Analiza el JSON solo si la respuesta es válida
    return data;
  } catch (error) {
    console.error("Error al enviar el formulario:", error);
    throw error; // Lanza el error para que se maneje en la parte que llama esta función
  }
}

export async function fileExtraImagesUploadFetch(id: string, file1: File, file2: File) {
  // Crear un FormData para enviar los archivos
  const formData = new FormData();
  formData.append("files", file1);
  formData.append("files", file2);

  // Obtener el token de las cookies
  const token = Cookies.get("token");

  try {
    // Realizar la petición POST con fetch
    const response = await fetch(
      `${URL_FETCH}/file-upload/uploadExtraImages/${id}`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`, // Pasamos el token en los headers
        },
        body: formData, // El cuerpo es el FormData con las imágenes
      }
    );

    // Comprobar si la respuesta es exitosa
    if (!response.ok) {
      throw new Error(`Error al subir las imágenes: ${response.statusText}`);
    }

    // Obtener la respuesta en formato JSON
    const data = await response.json();
    console.log("Imágenes subidas exitosamente:", data);
    return data;
  } catch (error) {
    console.error("Error al hacer la petición:", error);
  }
}