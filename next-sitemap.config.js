// Si defines una constante para URL_FETCH
export const URL_FETCH = "https://back-hogar-esperanza.onrender.com";

const getAllPostFetch = async () => {
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
        `Error HTTP: ${response.status} - ${response.statusText}`,
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al obtener los posts:", error);
    return null;
  }
};

/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: "https://www.fundacionhogaresperanza.com", // Reemplaza con tu dominio
  generateRobotsTxt: true, // Esto generará el archivo robots.txt también
  exclude: ["/404"], // Puedes excluir páginas como el 404
  transform: async (config, path) => {
    // Aquí puedes agregar transformaciones personalizadas para las rutas
    return {
      loc: path, // La URL de la página
      changefreq: "weekly", // Frecuencia de actualización de la página
      priority: 0.7, // Prioridad de la página (puedes modificarla según la importancia de la URL)
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined, // Fecha de la última modificación
    };
  },
  additionalPaths: async (config) => {
    // Aquí puedes agregar rutas adicionales que no están generadas por el sitio estático
    const posts = await getAllPostFetch(); // Función que debes crear para obtener tus posts dinámicos
    // Maneja la posibilidad de que no haya posts
    if (!posts) return [];
    const additionalPaths = posts.map((post) => ({
      loc: `/posts/${post.id}`, // Aquí debes poner la URL de tu post
      changefreq: "weekly",
      priority: 0.8,
      lastmod: new Date().toISOString(),
    }));
    return additionalPaths;
  },
};

export default config;
