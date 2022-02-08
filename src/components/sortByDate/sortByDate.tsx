import React,{useState} from 'react';
import style from './sortByDate.module.scss'
import dropdown from '../../assets/images/dropdown.png'
import { useAppSelector,useAppDispatch } from '../../state/hooks';
import { filterByDate, filterByOrder } from '../../state/template';



function SortByDate() {

    const [category,openCategory] = useState(false);
    const dispatch = useAppDispatch()


    const presentDateOrder = useAppSelector((state)=>state.templateReducer.date);

    const orderByDate = (dateOrder:string) =>{

        // reset Order filter (Alphabetical)
        dispatch( filterByOrder("Default") );

        dispatch( filterByDate(dateOrder) );
        
    }

    return (
    <div onClick={()=>openCategory(!category)} className={style.sort__wrap}>
        <div className={style.sort__select}>
            <p className={style.title}>Date</p>
            <p className={style.current}>{presentDateOrder}</p>
            <img src={dropdown} alt="dropdown" />
        </div>
        <div className={ category ?  `${style.sort__dropdown} ${style.sort__dropdown__active}` : `${style.sort__dropdown}` }>
            <div onClick={()=>orderByDate("Default")} >
                <p>Default</p>
            </div>
            <div onClick={()=>orderByDate("Ascending")}  >
                <p>Ascending</p>
            </div>
            <div onClick={()=>orderByDate("Descending")} >
                <p>Descending</p>
            </div>
            
        </div>
    </div>
  )
}

export default SortByDate;
