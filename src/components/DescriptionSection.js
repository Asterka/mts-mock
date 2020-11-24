import React from 'react'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

export default function DescriptionSection({sortBy, setSortBy}) {
    return (
        <div className="table-description">
            <h2 id="number">Nº<KeyboardArrowDownIcon id="sort-by-number" onClick={()=>sortBy==1?setSortBy(-1):setSortBy(1)}/></h2>
            <h2 id="first">Клиент<KeyboardArrowDownIcon id="sort-by-client" onClick={()=>sortBy==2?setSortBy(-2):setSortBy(2)}/></h2>
            <h2 id="second">Подписание<KeyboardArrowDownIcon id="sort-by-issue" onClick={()=>sortBy==3?setSortBy(-3):setSortBy(3)}/></h2>
            <h2 id="third">Статус<KeyboardArrowDownIcon id="sort-by-issue-date" onClick={()=>sortBy==3?setSortBy(-3):setSortBy(3)}/></h2>
        </div>
    )
}
