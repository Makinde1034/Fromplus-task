import React,{useState} from 'react';
import style from './sortByAlphabets.module.scss'
import dropdown from '../../assets/images/dropdown.png'
import { useAppDispatch, useAppSelector } from '../../state/hooks';
import { filterByOrder, filterByDate } from '../../state/template';



function SortByAlphabets() {

    const [category,openCategory] = useState(false);
    const dispatch = useAppDispatch();
    const order = useAppSelector((state)=>state.templateReducer.order)

    const filter = (order:string) =>{
        // reset Date filter 
        dispatch( filterByDate("Default") )
        dispatch( filterByOrder(order) )
    }

    

  return (
    <div onClick={()=>openCategory(!category)} className={style.sort__wrap}>
        <div className={style.sort__select}>
            <p className={style.title}>Order</p>
            <p className={style.current}>{order}</p>
            <img src={dropdown} alt="dropdown" />
        </div>
        <div className={ category ?  `${style.sort__dropdown} ${style.sort__dropdown__active}` : `${style.sort__dropdown}` }>
            <div onClick={()=>filter("Default")} >
                <p>Default</p>
            </div>
            <div onClick={()=>filter("Ascending")} >
                <p>Ascending</p>
            </div>
            <div onClick={()=>filter("Descending")} >
                <p>Descending</p>
            </div>
        </div>
    </div>
  )
}

export default SortByAlphabets;
