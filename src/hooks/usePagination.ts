import {useState} from 'react'
import { useAppSelector } from '../state/hooks';

const usePagination = ( templatesPerPage:number, data:any ) =>{
    const [currentPage, setCurrentPage] = useState(1);
    const maxPage = Math.ceil(data.length / templatesPerPage);

    
    

    const currentTemplates = () => {
        const indexOfLastTran = currentPage * templatesPerPage
        const indexOfFirstTran = indexOfLastTran - templatesPerPage
        const currentTemps = data.slice(indexOfFirstTran,indexOfLastTran);
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