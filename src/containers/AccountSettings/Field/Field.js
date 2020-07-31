import React, { Fragment } from 'react';

const Field = props =>{
        let valueField = <label>{props.value}</label>
        if(props.showChild){
            valueField = <Fragment>{props.children}</Fragment>
        }

    return(
            <div className={props.FieldCss}>
                <div className={props.FieldLabelCss}>
                    <label>{props.label}</label>
                </div>
                <div className={props.FieldValueCss}>
                    {valueField}
                </div>
            </div>
    );

};

export default Field;