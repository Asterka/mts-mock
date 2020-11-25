import React from 'react'

export default function PageNavigation({currentPage, setCurrentPage, numberOfPages}) {
    return (
        <div className={"footer__nav"}>
            <button onClick={()=>{currentPage === 0?setCurrentPage(0):setCurrentPage(currentPage - 1)}}>-</button>
                <h3>{currentPage}</h3>
                {console.log(numberOfPages)}
            <button onClick={()=>{currentPage === numberOfPages?setCurrentPage(numberOfPages):setCurrentPage(currentPage + 1)}}>+</button>
        </div>
    )
}
