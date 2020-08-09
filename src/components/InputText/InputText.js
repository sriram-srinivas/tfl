import React from 'react';

const inputText = props => (
        <input type={props.type} 
            placeholder={props.placeHolderText} 
            className={props.styleClass} 
            value={props.bindValue}/>      
    );

export default inputText;