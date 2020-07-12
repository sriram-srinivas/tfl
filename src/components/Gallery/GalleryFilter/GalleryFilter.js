import React,{useContext} from 'react';
import dictionary from '../../../context/tflDictionary';


const galleryFilter = props =>{
    const languageDictionary = useContext(dictionary);
    let heading = null;

    if(props.title != null){
        heading = <h6 className={props.GalleryFilterHeader}>{props.title}</h6>;
    }
    return(

        <div className={props.GalleryFilterPanel}>
           {heading}
            {
                languageDictionary.GalleryLevelFilter.map((filter,index) => {
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