import React from 'react';
import {Link} from 'react-router-dom';

const linkList = props => {
    return(
        <div className={props.ListContainerClass}>
            {props.sourceList.map((link,index) => {
                return(
                    <div key={link.id} className={props.LinkDiv}>
                        <Link to={link.to} exact="true" className={props.LinkCSS}>
                            <label>{link.value}</label>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default linkList;