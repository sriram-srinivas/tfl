import React from 'react';
import GallMenuItem from './GalleryMenuItem.css'
 
const galleryMenuItem = props => {
    return(
        <span className={GallMenuItem.menuSpan}>
            <a className={GallMenuItem.menuLink} href="/" target="_self">{props.value}</a>
        </span>
    )
};

export default galleryMenuItem;