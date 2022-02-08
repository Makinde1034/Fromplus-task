import React,{useState} from 'react';
import style from "./sortByCategory.module.scss"
import dropdown from '../../assets/images/dropdown.png'
import { useAppDispatch, useAppSelector } from '../../state/hooks';
import { filterByCat } from '../../state/template';


function Sort() {

    const [category,openCategory] = useState(false);
    const dispatch = useAppDispatch()
    const presentCategory = useAppSelector((state)=>state.templateReducer.name)

    const filterByCategory = (category:string) =>{
        dispatch( filterByCat(category) );
    }

    return (
    <div onClick={()=>openCategory(!category)} className={style.sort__wrap}>
        <div className={style.sort__select}>
            <p className={style.title}>Category</p>
            <p className={style.current}>{presentCategory}</p>
            <img src={dropdown} alt="dropdown" />
        </div>
        <div className={ category ?  `${style.sort__dropdown} ${style.sort__dropdown__active}` : `${style.sort__dropdown}` }>
            <div onClick={()=>filterByCategory("All")}>
                <p>All</p>
            </div>
            <div onClick={()=>filterByCategory("Education")} >
                <p>Education</p>
            </div>
            <div onClick={()=>filterByCategory("Health")}>
                <p>Health</p>
            </div>
            <div onClick={()=>filterByCategory("E-commerce")}>
                <p>E-commerce</p>
            </div>
        </div>
    </div>
  )
}

export default Sort;
