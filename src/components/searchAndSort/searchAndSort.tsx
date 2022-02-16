import React from 'react';
import style from './searchAndSort.module.scss'
import searcch from '../../assets/images/search-icon.png'
import SortByCategory from '../sortByCategory/sortByCategory';
import SortByAlphabets from '../sortByAlphabets/sortByAlphabets';
import SortByDate from '../sortByDate/sortByDate';
import { search } from '../../state/template';
import { useAppDispatch,useAppSelector } from '../../state/hooks';
import usePagination from '../../hooks/usePagination';

function SearchAndSort() {

	const dispatch = useAppDispatch();

	const templates = useAppSelector((state)=>state.templateReducer.templates)


	const searchString = (e:any) =>{ //change to better name

		dispatch( search(e.target.value) )	
	}


	
  	return (
    <div  className={style.nav}>
        <div className={style.nav__top}>
			<div className={style.nav__input}>
				<input onChange={(e)=>searchString(e)} placeholder='Search templates' type="text" />
				<img src={searcch} alt="" />
			</div>
                      
			<div className={style.sort}>
				<p className={style.sort__p}>sort by :</p>
				<div className={style.sort__t}>
					<span><SortByCategory  /></span>
					<span><SortByAlphabets /></span>
					<span><SortByDate /></span>		
				</div>
					
			</div> 
		</div>
    </div>
  )
}

export default SearchAndSort;
