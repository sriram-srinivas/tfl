import React from 'react';
import GallMenuItem from './GalleryMenuItem.css'
import {NavLink} from 'react-router-dom';
 
const galleryMenuItem = props => {
    return(
        <NavLink to={{pathname:props.to}} exact activeClassName={GallMenuItem.active}>
            <span className={GallMenuItem.menuSpan}>
                <label className={GallMenuItem.menuLink}>{props.value}</label>
            </span>
        </NavLink>
    )
};

export default galleryMenuItem;