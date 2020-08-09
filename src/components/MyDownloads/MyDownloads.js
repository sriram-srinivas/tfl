import React,{useContext} from 'react';
import MyDownloadsCSS from './MyDownloads.css';
import dictionary from '../../context/tflDictionary';
import * as images from '../../assets/images/images';

const MyDownloads = props =>{
    const languageDictionary = useContext(dictionary);
    return (
        <div className={MyDownloadsCSS.noDwldPanel}>
            <img src={images.noDwld} alt="No Dowload"/>
            <h2 className={MyDownloadsCSS.noDwldLabel}>{languageDictionary.noDwld}</h2>
            <h2 className={MyDownloadsCSS.noDwldLabel}>{languageDictionary.startDwld}</h2>
        </div>
)};

export default MyDownloads;