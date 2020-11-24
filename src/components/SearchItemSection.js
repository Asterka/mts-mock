import React from 'react'
import SearchItemComponent from "./SeachItemComponent"

export default function SearchItemSection({setQuery, query}) {
    return (
        <div className="search-component">
            <h2>Заказы</h2>
            <SearchItemComponent setQuery={setQuery} query={query}/>
        </div>
    )
}
