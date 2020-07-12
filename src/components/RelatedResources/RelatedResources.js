import React,{useContext} from 'react';
import relatedResourcesCSS from './RelatedResources.css'
import Thumbnail from '../Gallery/Thumbnail/Thumbnail';
import dictionary from '../../context/tflDictionary';

const relatedResources = props => {
    const languageDictionary = useContext(dictionary);
   return( 
       <div>
            <h3 className={relatedResourcesCSS.relatedResourcesTitle}>{languageDictionary.relatedResourcesLabel}</h3>
            {props.relatedList.map((items,index) => {
            return(
                <Thumbnail key={items.id} {...items} click={() => props.clickEvent(items)}/> 
                );
            })}
        </div>

)};

export default relatedResources;