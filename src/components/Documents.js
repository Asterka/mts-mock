import React from 'react';
import Document from './Document';

import {v4 as uuidv4} from "uuid"

function filterDocs (query, documents){
    let hasNumbers = false;
    hasNumbers = /\d/.test(query);
    let res = [];
    if(!hasNumbers){
        res = documents.filter((element)=>
            element.clientName.toLowerCase().indexOf(query) !== -1
        )
    }
    else{
        res = documents.filter((element)=>
            element.number.toLowerCase().indexOf(query) !== -1
        )
    }
    return res;
}
function sortDocs (sortBy, documents){
    let res = [];
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
            return res;
        case 3://sort by issued ascending
            break;
        case -3://sort by issued ascending
            break;
        
    }
}

export default function Documents({query, docs, sortBy}) {
    
    let queriedDocs = filterDocs(query, docs)
    queriedDocs = sortDocs(sortBy, queriedDocs);
    
    queriedDocs = queriedDocs.map((element)=>{
        return(
            <Document key={uuidv4()} number={element.number} clientName={element.clientName} issueDate={element.issueDate} issueStatus={element.issueStatus}/>
        )
    });

    return (
            <div className="documents">
                {queriedDocs}
            </div>
    )
}
