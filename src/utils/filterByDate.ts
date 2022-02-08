import { template } from "../types"
import { getDefaultState } from "../helpers/storage";

export const filtByDate = (data:template[], order:string) =>{
    if(order === "Default"){
        const newArray = getDefaultState();
        return newArray
    }

    if(order === "Ascending"){
        const newArray = data.sort((a,b)=> new Date(a.created).toString() < new Date(b.created).toString() ? -1 : 1   );
        return newArray
    }

    if(order === "Descending"){
        const newArray = data.sort((a,b)=> new Date(a.created).toString() < new Date(b.created).toString() ? 1 : -1   );
        return newArray
    }
    
}