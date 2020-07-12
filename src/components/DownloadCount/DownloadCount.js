import React,{Fragment} from 'react';

const downloadCount = props => (
    <Fragment>
        <i className={"fa fa-download "+props.iconCSS}></i>
        <label className={props.countCSS}>
            {props.children}
        </label>

    </Fragment>
);
export default downloadCount;
