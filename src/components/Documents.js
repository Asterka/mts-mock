import React from 'react';
import Document from './Document';
import Footer from './Footer';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';


import {v4 as uuidv4} from "uuid"

function filterDocs (query, documents){
    let hasNumbers = false;
    hasNumbers = /\d/.test(query);
    let res = [];
    if(!hasNumbers){
        res = documents.filter((element)=>
            element.clientName.toLowerCase().indexOf(query.toLowerCase()) !== -1
        )
    }
    else{
        res = documents.filter((element)=>
            (element.number+'').indexOf(query) !== -1
        )
    }
    return res;
}
function sortDocs (sortBy, documents){
    let res = [];
    let has_date = documents.filter((element)=>{
        return element.issueDate !== "";
    });
    let has_no_date = documents.filter((element)=>{
        return element.issueDate === "";
    });

    switch(sortBy){
        case 0:
            return documents;
        case 1://sort by number ascending
            res = documents.sort((a, b)=>{
                if (a.number > b.number) {
                    return 1;
                  }
                  if (a.number < b.number) {
                    return -1;
                  }
                  return 0;
            });

            console.log(res);
            return res;
        case -1://sort by number descending
            res = documents.sort((a, b)=>{
                if (a.number < b.number) {
                    return 1;
                }
                if (a.number > b.number) {
                    return -1;
                }
                return 0;
            });

            console.log(res);
        return res;
        case 2: // sort by family ascending
            res = documents.sort((a, b)=>{
                if (a.clientName > b.clientName) {
                    return 1;
                }
                if (a.clientName < b.clientName) {
                    return -1;
                }
                return 0;
            });

            console.log(res);
            return res;
        case -2:// sort by family descending
            res = documents.sort((a, b)=>{
                if (a.clientName < b.clientName) {
                    return 1;
                }
                if (a.clientName > b.clientName) {
                    return -1;
                }
                return 0;
            });

            console.log(res);
            return res;
        case 3://sort by issued ascending
            res = has_date.sort((a, b)=>{
            let firstDate = a.issueDate.split('.');
                let secondDate = b.issueDate.split('.');
                let dateA = Date(`${firstDate[2]}-${firstDate[1]}-${firstDate[0]}`)
                let dateB = Date(`${secondDate[2]}-${secondDate[1]}-${secondDate[0]}`)
                
                if (dateA > dateB) {
                    return 1;
                }
                if (dateA < dateB) {
                    return -1;
                }
                return 0;
        });
        res = has_no_date.concat(res);
        return res;
        case -3://sort by issued ascending
        res = has_date.sort((a, b)=>{
            let firstDate = a.issueDate.split('.');
                let secondDate = b.issueDate.split('.');
                let dateA = Date(`${firstDate[2]}-${firstDate[1]}-${firstDate[0]}`)
                let dateB = Date(`${secondDate[2]}-${secondDate[1]}-${secondDate[0]}`)
                
                if (dateA < dateB) {
                    return 1;
                }
                if (dateA > dateB) {
                    return -1;
                }
                return 0;
        });
        res = res.concat(has_no_date);
        return res;
        default:
        break;
    }
    
}

export default function Documents({query, docs, sortBy, currentPage, setSortBy, setCurrentPage, setQueriedDocs, openedModal, setOpenedModal, setUrl, token, setChosenDoc}) {
    
    let queriedDocs = filterDocs(query, docs, setQueriedDocs)
    queriedDocs = sortDocs(sortBy, queriedDocs, setCurrentPage);

    let docsToDraw = queriedDocs.slice((currentPage-1)*9, (currentPage)*9 > queriedDocs.length - 1 ? queriedDocs.length: (currentPage)*9-1)
    
    docsToDraw = docsToDraw.map((element)=>{
        return(
            <Document key={uuidv4()}
                number={element.number}
                    clientName={element.clientName}
                        issueDate={element.issueDate}
                            issueStatus={element.issueStatus}
                                openedModal={openedModal}
                                    setOpenedModal={setOpenedModal}
                                            setUrl={setUrl}
                                                token={token}
                                                    setChosenDoc={setChosenDoc}
                                            />
        )
    });

    return (
        <>
            <table className="table" id="main-table">
                <thead>
                    <tr>
                    <td id="number">Nº<KeyboardArrowDownIcon id="sort-by-number" onClick={()=>sortBy===1?setSortBy(-1):setSortBy(1)}/></td>
                    <td id="first">Клиент<KeyboardArrowDownIcon id="sort-by-client" onClick={()=>sortBy===2?setSortBy(-2):setSortBy(2)}/></td>
                    <td id="second">Подписание<KeyboardArrowDownIcon id="sort-by-issue" onClick={()=>sortBy===3?setSortBy(-3):setSortBy(3)}/></td>
                    <td id="third">Статус<KeyboardArrowDownIcon id="sort-by-issue-date" onClick={()=>sortBy===3?setSortBy(-3):setSortBy(3)}/></td>
                    <td></td>
                    </tr>
                </thead>
                <tbody>
                {docsToDraw}
                </tbody>
                
                
            </table>
            
            <Footer currentPage={currentPage} setCurrentPage={setCurrentPage} numberOfPages={Math.ceil(queriedDocs.length/9)}/>
                
            
        </>
    )
}
