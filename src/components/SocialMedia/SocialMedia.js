import React from 'react';
import socialMediaCSS from'./SocialMedia.css';

const socialMedia = props =>  props.SocialMediaList.map((items,index) => {
            return(
                <a key={items.id} href={items.url} className={props.sm+" "+socialMediaCSS[items.BGclass]} target="_blank">
                    <div className={items.class}/>       
                    
                </a>
            );
        });

export default socialMedia;