import React from 'react'
import PageNavigation from './PageNavigation'

export default function Footer({currentPage, setCurrentPage}) {
    return (
        <>
            <PageNavigation currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        </>
    )
}
