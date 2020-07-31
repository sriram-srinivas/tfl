import React from 'react';


const galleryFilter = props =>{
    let heading = null;

    if(props.title != null){
        heading = <h4 className={props.GalleryFilterHeader}>{props.title}</h4>;
    }
    return(

        <div className={props.GalleryFilterPanel}>
           {heading}
            {
                props.FilterOptions.map((filter,index) => {
                    return(
                        <div key={filter.id} className={props.FilterDiv}>
                            <a className={props.FilterLink} href="/" target="_self">{filter.value}</a>
                        </div>
                    );
                })
            }
        </div>
    )
};

export default galleryFilter;