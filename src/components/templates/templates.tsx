import React from 'react';
import style from './templates.module.scss'
import { useAppSelector } from '../../state/hooks';
import usePagination from '../../hooks/usePagination';
import Paginate from '../paginate/paginate';
import { template } from '../../types';




function Templates() {

    const presentTemplateName = useAppSelector((state)=>state.templateReducer.name)

    const templates = useAppSelector((state)=>state.templateReducer.templates)

    const { currentTemplates, currentPage, maxPage, next, prev } = usePagination(15,templates)

    const data = currentTemplates()

    

    return (
        <div style={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}}>
            
            <div className={style.templates__wrap}>
                <header className={style.header}>
                    <p>{presentTemplateName} templates</p>
                    <p>{templates.length} templates found</p>
                </header>
                <div className={style.templates}>
                
                    {
                        data.map((item:template,index:number)=>(
                            <div  className={style.box}>
                                <div className={style.box__top}>
                                    <h3>{item.name}</h3>
                                    <p>{item.description}</p>
                                </div>
                                <div className={style.box__bottom}>
                                    <p>Use template</p>
                                </div>
                            </div>
                        ))
                    }
                    
                    
                </div>
                <Paginate next = {next} maxPage={maxPage} currentPage={currentPage} prev={prev}   />
            </div>
        </div>
        
        
    )
}

export default Templates;
