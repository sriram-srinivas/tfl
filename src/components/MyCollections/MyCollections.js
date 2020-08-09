import React,{useContext} from 'react';
import MyCollectionsCSS from './MyCollections.css';
import dictionary from '../../context/tflDictionary';
import Thumbnail from '../Gallery/Thumbnail/Thumbnail';


const MyCollections = props =>{
    const languageDictionary = useContext(dictionary);
    return (
        <div className={MyCollectionsCSS.collectionPanel}>
            <div className={MyCollectionsCSS.leftCollectionPanel}>

            </div>
            <div className={MyCollectionsCSS.CollectionPanel}>
                <h3 className={MyCollectionsCSS.collectionLabel}>{languageDictionary.myCollectionLabel}</h3>
                <div className={MyCollectionsCSS.collections}>
                    {languageDictionary.relatedList.map((items,index) => {
                        return(
                            <Thumbnail key={items.id} {...items} click={() => props.clickEvent(items)}/> 
                            );
                    })}
                </div>
            </div>
            <div className={MyCollectionsCSS.rightCollectionPanel}>

            </div>
        </div>
)};

export default MyCollections;