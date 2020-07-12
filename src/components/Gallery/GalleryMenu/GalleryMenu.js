import React from 'react';
import MenuItem from './GalleryMenuItem/GalleryMenuItem';

const galleryMenu = props => props.menuList.map((option,index) => {
    return(
        <MenuItem key={option.id} {...option}/> 
    );
});

export default galleryMenu;