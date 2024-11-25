"use client";

// const URL_FETCH = "http://localhost:3001";
const URL_FETCH = "https://back-hogar-esperanza.onrender.com";


import Cookies from "js-cookie";

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

export async function uploadImageFetch(id: string, file: File) {
  // Crear un FormData para enviar el archivo
  const formData = new FormData();
  formData.append("file", file);
  const token = Cookies.get("token");

  try {
    // Realizar la petición POST con fetch
    const response = await fetch(
      `http://localhost:3001/file-upload/uploadImage/${id}`,
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
