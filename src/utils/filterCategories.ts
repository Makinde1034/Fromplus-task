import { template } from "../types";

export const filterByCategory = (category: string, data: template[]  ) =>{
    let newArray = [];

    if(category == "All") {
        newArray = data
    }else{
        for(var i = 0; i < data.length; i++){
            const categoryExists = data[i].category.find((item:string)=> item == category );
            if(categoryExists){
                newArray.push(data[i]); 
            }
        }
    }

    

    return newArray
}