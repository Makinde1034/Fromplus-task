import React,{useState} from 'react';
import style from './searchAndSort.module.scss'
import searcch from '../../assets/images/search-icon.png'
import dropdwon from '../../assets/images/dropdown.png'
import SortByCategory from '../sortByCategory/sortByCategory';
import SortByAlphabets from '../sortByAlphabets/sortByAlphabets';
import SortByDate from '../sortByDate/sortByDate';
import { search } from '../../state/template';
import { useAppDispatch } from '../../state/hooks';

function SearchAndSort() {

	const [ searchField,setSearchFieild ] = useState("");
	const dispatch = useAppDispatch()

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
				<span><SortByCategory  /></span>
				<span><SortByAlphabets /></span>
				<span><SortByDate /></span>		
			</div> 
		</div>
    </div>
  )
}

export default SearchAndSort;
