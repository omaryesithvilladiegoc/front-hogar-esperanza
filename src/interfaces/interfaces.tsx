
interface IUserContextType {
    login: (email:string,password:string) => Promise<any>
    logout: () => boolean

}

export type {
    IUserContextType
}