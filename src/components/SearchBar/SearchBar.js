import React,{useContext} from 'react';
import dictionary from '../../context/tflDictionary';
import InputText from '../InputText/InputText'

const searchBar = props =>{

    const languageDictionary = useContext(dictionary);
    return(
        <div className={props.searchDiv}>
            <InputText placeHolderText={languageDictionary.searchPlaceHolder} styleClass={props.searchBar}/>
            {props.children}
        </div>
    );
}

export default searchBar;