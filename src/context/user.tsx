import { createContext } from "react";
import React from "react";
import { IUserContextType } from "../interfaces/interfaces";
import { loginFetch } from "../fetch/user-fetch";
import Cookies from "js-cookie";

export const UserContext = createContext<IUserContextType> ({
    login: async () => null,
    logout: () => true

})

export const UserProvider = ({children}: {children:React.ReactNode}) => {

    const login = async (email:string,password:string):Promise<any> => {
        try {
            const response = await loginFetch(email,password)
            if(response.token === undefined) throw new Error('Hubo un error al iniciar sesion')
            window.location.reload()
            Cookies.set('token',response.token)
            return true
        } catch (error) {
            throw error
        }
    }

    const logout = () => {
        Cookies.remove('token')
        return true
    }

    return (
        <UserContext.Provider value={{login,logout}}>
            {children}
        </UserContext.Provider>
    )
}