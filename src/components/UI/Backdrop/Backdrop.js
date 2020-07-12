import React from 'react';
import backdropCSS from './Backdrop.css';

const backdrop = props => (
    props.show ? <div className={backdropCSS.Backdrop} onClick={props.clickEvent} /> : null 
);

export default backdrop;
