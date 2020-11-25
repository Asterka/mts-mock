import React from 'react'
import PageNavigation from './PageNavigation'

export default function Footer({currentPage, setCurrentPage, numberOfPages}) {
    return (
        <>
            <PageNavigation currentPage={currentPage} setCurrentPage={setCurrentPage} numberOfPages={numberOfPages}/>
        </>
    )
}
