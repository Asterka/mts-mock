import React from 'react'

export default function PageNavigation({currentPage, setCurrentPage, numberOfPages}) {
    return (
        <div className={"footer__nav"}>
            <button onClick={()=>{currentPage <= 1?setCurrentPage(1):setCurrentPage(currentPage - 1)}}>-</button>
                <h3>{currentPage}</h3>
                {console.log(currentPage)}
            <button onClick={()=>{currentPage >= numberOfPages?console.log("On the last page"):setCurrentPage(currentPage + 1)}}>+</button>
        </div>
    )
}
