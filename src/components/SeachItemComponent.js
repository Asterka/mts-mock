import React from 'react'

export default function SeachItemComponent({setQuery, query}) {
    const handleChange = (e) =>{
        setQuery(e.target.value);
    }
    return (
        <input id="input" onChange={handleChange}>
        </input>
    )
}
