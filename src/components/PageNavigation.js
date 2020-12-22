import React from 'react'
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

export default function PageNavigation({currentPage, setCurrentPage, numberOfPages}) {
    return (
        <tr className="level" id="footer-pagination">
            <div className="level-left" style={{marginTop: "56px"}}>
            <td>
                <NavigateBeforeIcon onClick={()=>{currentPage <= 1?setCurrentPage(1):setCurrentPage(currentPage - 1)}}/>
            </td>
            <td>
                <h3 style={{margin: "30px 30px"}}>{currentPage}</h3>
            </td>
            <td>
                <NavigateNextIcon onClick={()=>{currentPage >= numberOfPages?console.log("On the last page"):setCurrentPage(currentPage + 1)}}/>
            </td>
            </div>
        </tr>
    )
}
