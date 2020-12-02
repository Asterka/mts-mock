import React from 'react'

export default function PageNavigation({currentPage, setCurrentPage, numberOfPages}) {
    return (
        <tr>
            <td>
                <button onClick={()=>{currentPage <= 1?setCurrentPage(1):setCurrentPage(currentPage - 1)}}>-</button>
            </td>
            <td>
                <h3>{currentPage}</h3>
            </td>
            <td>
            <button onClick={()=>{currentPage >= numberOfPages?console.log("On the last page"):setCurrentPage(currentPage + 1)}}>+</button>
            </td>
        </tr>
    )
}
