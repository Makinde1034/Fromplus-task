import React from 'react';
import style from './paginate.module.scss'

interface paginateProp{
    next : () => void,
    maxPage : number,
    currentPage : number,
    prev : () => void
}

function Paginate({next,maxPage,currentPage,prev}:paginateProp) {
  return (
    <div>
        <div className={style.paginate} >
            <div className={style.previous}>
                <p onClick={()=>{prev()}}> Previous</p>
            </div>
            <div className={style.center}>
                <span>{currentPage}</span>
                <p className={style.of}>of</p>
                <p>{maxPage}</p>
            </div>
            <div className={style.next}>
                <p onClick={()=>{next()}}>{"Next" + ">"}</p>
            </div>
        </div>
    </div>
  )
}

export default Paginate;
 