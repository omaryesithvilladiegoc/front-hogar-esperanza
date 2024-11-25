interface IUserContextType {
  login: (email: string, password: string) => Promise<any>;
  logout: () => boolean;
  createPost: (post: any) => Promise<any>;
  getAllPosts: () => Promise<any>;
  uploadImage: (id: string, file: File) => Promise<any>;
  getPostById: (id: string) => Promise<any>;
}

interface Post {
  id: string; // Opcional, para identificar el post (ej. UUID generado por el backend)
  title: string; // Título del post
  subtitle?: string; // Subtítulo, opcional
  header?: string; // Encabezado, opcional
  mainContent: string; // Contenido principal del post
  keywords?: string[]; // Lista de palabras clave relacionadas con el post
  footer?: string; // Pie de página, opcional
  image: string;
  createdAt?: Date; // Fecha de creación del post
  size: number;
}

export type { IUserContextType, Post };
