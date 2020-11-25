import React from 'react'

export default function PageNavigation({currentPage, setCurrentPage}) {
    return (
        <div className={"footer__nav"}>
            <button onClick={()=>{setCurrentPage(currentPage - 1)}}>-</button>
                <h3>{currentPage}</h3>
            <button onClick={()=>{setCurrentPage(currentPage + 1)}}>+</button>
        </div>
    )
}
