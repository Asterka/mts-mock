import React from 'react'
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

export default function PageNavigation({currentPage, setCurrentPage, numberOfPages}) {
    return (
        <tr>
            <td>
                <NavigateBeforeIcon onClick={()=>{currentPage <= 1?setCurrentPage(1):setCurrentPage(currentPage - 1)}}/>
            </td>
            <td>
                <h3>{currentPage}</h3>
            </td>
            <td>
                <NavigateNextIcon onClick={()=>{currentPage >= numberOfPages?console.log("On the last page"):setCurrentPage(currentPage + 1)}}/>
            </td>
        </tr>
    )
}
