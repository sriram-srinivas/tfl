import React,{Fragment} from 'react';
import ModalCSS from './Modal.css';
import Backdrop from '../Backdrop/Backdrop'

const modal = props => (
    <Fragment>
        <Backdrop show={props.show} clickEvent={props.clickEvent}/>
        <div className={ModalCSS.Modal+" "+(props.show ? ModalCSS.ModalShow : ModalCSS.ModalHide)}>
            {props.children}
        </div>
    </Fragment>

);

export default modal;
