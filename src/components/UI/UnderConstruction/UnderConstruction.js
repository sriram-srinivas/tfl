import React,{Fragment} from 'react';
import * as images from '../../../assets/images/images';
import style from './UnderConstruction.css';


const UnderConstruction = props =>{
    return(
        <div className={style.imagePanel}>
            <img src={images.comingSoon} alt="Under Construction" className={style.image}/>
        </div>
    );
};

export default UnderConstruction;