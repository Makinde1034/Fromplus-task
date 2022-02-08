import React from 'react';
import style from './banner.module.scss'
import info from '../../assets/images/info.png'

function Banner() {
  return (
    <div className={style.banner}>
        <div className={style.banner__in}>
            <img src={info} alt="infoimage" />
            <p>kk</p>
            <p>Tada! Get started with a free template. Can’t find what you are looking for? Search from the 1000+ available templates</p>
        </div>
    </div>
  )
}

export default Banner;
