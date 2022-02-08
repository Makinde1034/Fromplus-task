import React from 'react';
import style from './loadingScreen.module.scss'
import formPlus from '../../assets/images/formplus-logo.png'

function LoadingScreen() {
  return (
    <div className={style.loader}>
      <img src={formPlus} alt="" />
      <div className={style.line}>
        <div className={style.inner}></div>
      </div>
    </div>
   
      
  )
}

export default LoadingScreen;
