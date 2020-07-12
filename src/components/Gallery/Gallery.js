import React,{Fragment, useContext} from 'react';
import dictionary from '../../context/tflDictionary';
import Thumbnail from './Thumbnail/Thumbnail';
import Paginator from '../Paginator/Paginator';

const gallery = props => {
    const languageDictionary = useContext(dictionary);

    const dataList = props.worksheetList;
    const ListSize = dataList.length;
    const itemsPerList = languageDictionary.worksheetsPerPage;
    let totalPages = ListSize / itemsPerList;
    totalPages = ListSize % itemsPerList === 0 ? totalPages : totalPages+1;
    
    let startIndex = props.currentPage*itemsPerList;
    let endIndex = startIndex+itemsPerList;
    let LastIndex = ListSize;
    startIndex = LastIndex < startIndex ? LastIndex : startIndex;
    endIndex = LastIndex < endIndex ? LastIndex : endIndex;

    const currentList = dataList.slice(startIndex, endIndex);
   return(
        <Fragment>
            {currentList.map((items,index) => {
                return(
                    <Thumbnail key={items.id} {...items} click={() => props.clickEvent(items)}/> 
                    );
            })}
            <Paginator pageClick={props.paginatorClickEvent}
                currentPage={props.currentPage}
                totalPages={Math.floor(totalPages)}/>
        </Fragment>
)}

export default gallery;