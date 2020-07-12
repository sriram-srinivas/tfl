import React from 'react';
import ButtonCSS from './Button.css';

const button = props =>{
    return(
        <button className={ButtonCSS.defaultStyle+" "+props.styleClass} type={props.btnType} onClick={props.clickEvent}>
            {props.children}
        </button>
    );
};

export default button;