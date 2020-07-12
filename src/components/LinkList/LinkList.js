import React from 'react';

const linkList = props => {
    return(
        <div className={props.ListContainerClass}>
            {props.sourceList.map((link,index) => {
                return(
                    <div key={link.id} className={props.LinkDiv}>
                        <a href="https://www.google.com" target="blank" className={props.LinkCSS}>{link.value}</a>
                    </div>
                )
            })}
        </div>
    )
}

export default linkList;