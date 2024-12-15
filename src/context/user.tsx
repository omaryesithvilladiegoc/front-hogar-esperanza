import { createContext } from "react";
import React from "react";
import Cookies from "js-cookie";

import { IUserContextType } from "../interfaces/interfaces";
import {
  createPostFetch,
  deletePostByIdFetch,
  getAllPostFetch,
  getPostByIdFetch,
  loginFetch,
  sendMailToUserFetch,
  uploadImageFetch,
  
} from "../fetch/user-fetch";

export const UserContext = createContext<IUserContextType>({
  login: async () => null,
  logout: () => true,
  createPost: async () => null,
  getAllPosts: async () => null,
  uploadImage: async () => null,
  getPostById: async () => null,
  deletePostById: async () => null,
  sendMailToUser: async () => null
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const login = async (email: string, password: string): Promise<any> => {
    try {
      const response = await loginFetch(email, password);

      if (response.token === undefined)
        throw new Error("Hubo un error al iniciar sesion");
      window.location.reload();
      Cookies.set("token", response.token);

      return true;
    } catch (error) {
      throw error;
    }
  };

  const logout = () => {
    Cookies.remove("token");

    return true;
  };

  const sendMailToUser = async ():Promise<any> => {
    try {
      const response = await sendMailToUserFetch()
    } catch (error) {
      throw error
    }
  }

  const getAllPosts = async () => {
    try {
      const posts = await getAllPostFetch();
      return posts;
    } catch (error) {
      throw error;
    }
  };

  const createPost = async (post: any) => {
    try {
      const postCreated = await createPostFetch(post);
      if (!postCreated) throw new Error("Hubo un error al crear el post");
      console.log(postCreated);
      return postCreated;
    } catch (error) {
      throw error;
    }
  };

  const uploadImage = async (id: string, file: File) => {
    try {
      const response = await uploadImageFetch(id, file);
      console.log(response);

      return response;
    } catch (error) {
      throw error;
    }
  };

  const getPostById = async (id: string): Promise<any> => {
    try {
      const post = await getPostByIdFetch(id);
      return post;
    } catch (error) {
      throw error;
    }
  };

  const deletePostById = async (id: string) => {
    try {
      const response = deletePostByIdFetch(id)
      console.log(response);      
      return response
    } catch (error:any) {
      alert(error.message)
      throw error
    }
  }


  return (
    <UserContext.Provider
      value={{
        login,
        logout,
        createPost,
        getAllPosts,
        uploadImage,
        getPostById,
        deletePostById,
        sendMailToUser
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
