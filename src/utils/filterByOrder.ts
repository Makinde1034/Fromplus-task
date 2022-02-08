import { template } from "../types";
import { getDefaultState } from "../helpers/storage";


export const order = (data:any, order:string) =>{

    if(order == "Default" ){
        const newArray = getDefaultState()
        return newArray
    }

    if(order == "Ascending"){
        const newArray = data.sort((a:template,b:template) => a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1 )
        return newArray;
    }

    if(order == "Descending"){
        const newArray = data.sort((a:template,b:template) => a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1 )
        return newArray
    }
}