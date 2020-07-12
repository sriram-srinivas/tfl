import React from 'react';
import thumbCSS from './Thumbnail.css';
import DownloadCount from '../../DownloadCount/DownloadCount';
import Rating from '../../Rating/Rating';

const thumbnail = props => {
    return(
        <div onClick={props.click} className={thumbCSS.thumbnail}>
            <img src={props.url} alt={props.title} className={thumbCSS.thumbnailBG}/>
            <div className={thumbCSS.thumbnailBanner}>
                <div className={thumbCSS.inner}>
                    <div>
                        <h5 className={thumbCSS.Title}>{props.title}</h5>
                    </div>
                    <div className={thumbCSS.dwldDiv}>
                        <DownloadCount 
                            iconCSS={thumbCSS.dwld}
                            countCSS={thumbCSS.dwlCount}>
                                ({new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(props.downloadsCount)})
                        </DownloadCount>
                        <span className={thumbCSS.rating}>
                            <Rating rating={props.rating}/>
                        </span>
                    </div>
                    <p className={thumbCSS.thumbnailDesc}>{props.Description}</p> 
                </div>
            </div>
        </div>
)};

export default thumbnail;