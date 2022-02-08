import { search } from "../state/template";
import { template } from "../types";


export const searchTemplates = (templates:template[],fieldText:string) =>{
    const searchResult = [];
    for(var i = 0; i<templates.length; i++){
        const stringIsPresent = templates[i].name.includes(fieldText);

        if(stringIsPresent){
            searchResult.push(templates[i])
            searchResult.sort((a:template,b:template) => a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1 )
        }
    }

    return searchResult
}