import { template } from "../types"

export const saveDefaultState = (data: template[]) => {
    return localStorage.setItem("default",JSON.stringify( data ) )
}

export const getDefaultState = () =>{
    return JSON.parse(localStorage.getItem("default") as string )
}