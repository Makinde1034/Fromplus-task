import {useState} from 'react'
import { useAppSelector } from '../state/hooks';

const usePagination = ( templatesPerPage:number, data:any ) =>{
    const [currentPage, setCurrentPage] = useState(1);
    const maxPage = Math.ceil(data.length / templatesPerPage);

    
    

    const currentTemplates = () => {
        const indexOfLastTemp = currentPage * templatesPerPage
        const indexOfFirstTemp = indexOfLastTemp - templatesPerPage
        const currentTemps = data.slice(indexOfFirstTemp,indexOfLastTemp);
        return currentTemps
    }

    const paginate = (pageNumber : number)  =>{
        setCurrentPage(pageNumber);
    }

    const next = () =>{
     
        setCurrentPage(Math.min(currentPage + 1, maxPage))

    }

    const prev = () =>{
        setCurrentPage(Math.max(currentPage - 1,1))
    }

    const test = () =>{
        setCurrentPage(1)
    }


    return { currentPage,setCurrentPage, currentTemplates, paginate, maxPage,next, prev, test }


} 

export default usePagination