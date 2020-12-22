import React from 'react'
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

export default function PageNavigation({currentPage, setCurrentPage, numberOfPages}) {
    return (
        <div className="level" id="footer-pagination">
            <a>
                <NavigateBeforeIcon onClick={()=>{currentPage <= 1?setCurrentPage(1):setCurrentPage(currentPage - 1)}}/>
            </a>
            <a>
                <h3 style={{margin: "30px 30px"}}>{currentPage}</h3>
            </a>
            <a>
                <NavigateNextIcon onClick={()=>{currentPage >= numberOfPages?console.log("On the last page"):setCurrentPage(currentPage + 1)}}/>
            </a>
        </div>
    )
}
