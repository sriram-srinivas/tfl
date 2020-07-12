import React from 'react';

const rating = props =>{
    const max=5.0;
    const rating = props.rating;
    let fixed,half,empty;
	
    fixed = Math.floor(rating);
    half =  Math.ceil(rating - fixed);
    empty = max - fixed - half;

    let rate= [];
    for(let i=0;i<fixed;i++){
        rate.push(<i key={"full"+i} className={"fa fa-star"} aria-hidden="true"/>);
    }
    for(let i=0;i<half;i++){
        rate.push(<i key={"half"+i} className={"fa fa-star-half-o"} aria-hidden="true"/>);
    }
    for(let i=0;i<empty;i++){
        rate.push(<i key={"O"+i} className={"fa fa-star-o"} aria-hidden="true"/>);
    }
    return rate;
}
export default rating;
