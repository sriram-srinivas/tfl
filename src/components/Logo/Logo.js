import React from 'react';
import  * as images from '../../assets/images/images';
import {NavLink} from 'react-router-dom';

const logo = props => {
    return(
        <div className={props.PanelClass}>
            <NavLink to="/" exact>
                <img className={props.LogoClass}src={images.logoBlue} alt="TFL"/>
            </NavLink>
        </div>
    )
}

export default logo;