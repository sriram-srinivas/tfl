import React from 'react';

const inputText = props => (
        <input type="text" 
            placeholder={props.placeHolderText} 
            className={props.styleClass} 
            value={props.bindValue}/>      
    );

export default inputText;