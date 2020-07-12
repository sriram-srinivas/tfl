import React from 'react';

import paginatorCSS from './Paginator.css';

const paginator = props =>{
    let pages = [];
    for(let i=0;i<props.totalPages;i++){
        pages.push(
            <span key={"page"+i}
                onClick={() => props.pageClick(i)}
                className={paginatorCSS.pageIcon+" "+(props.currentPage === i ? paginatorCSS.active : null)}>
                {i+1}
            </span>
        );
    }

    return(
        <div className={paginatorCSS.paginationPanel}>
            {pages}
        </div>
    )
}

export default paginator; 