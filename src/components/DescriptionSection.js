import React from 'react'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

export default function DescriptionSection({sortBy, setSortBy}) {
    return (
        <div className="table-description">
            <h2 id="number">Nº</h2>
            <h2 id="first">Клиент</h2>
            <h2 id="second">Подписание</h2>
            <h2 id="third">Статус</h2>
            <div className="arrows">
                <KeyboardArrowDownIcon id="sort-by-number" onClick={()=>sortBy==1?setSortBy(-1):setSortBy(1)}/>
                <KeyboardArrowDownIcon id="sort-by-client" onClick={()=>sortBy==2?setSortBy(-2):setSortBy(2)}/>
                <KeyboardArrowDownIcon id="sort-by-issue" onClick={()=>sortBy==3?setSortBy(-3):setSortBy(3)}/>
                <KeyboardArrowDownIcon id="sort-by-issue-date" onClick={()=>sortBy==3?setSortBy(-3):setSortBy(3)}/>
            </div>
        </div>
    )
}
