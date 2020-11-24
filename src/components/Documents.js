import React from 'react';
import Document from './Document';

import {v4 as uuidv4} from "uuid"

function filterDocs (query, documents){
    const res = documents.filter((element)=>
        element.clientName.toLowerCase().indexOf(query) !== -1
    )
    

    return res;
}

export default function Documents({number, clientName, issueDate, issueStatus, query}) {
    const documents = [
        {number:"3265482010", clientName:"Николаев Владимир Петрович",issueDate:"",issueStatus:"Ожидает подписания"},

        {number:"32654812672", clientName:"Лебедева Светлана Ивановна",issueDate:"",issueStatus:"Ожидает подписания"},

        {number:"3265409529", clientName:"Веселов Роман Александрович",issueDate:"16.10.2020",issueStatus:"Подписан"},
       
        {number:"3265367895", clientName:"Росляков Михаил Игоревич",issueDate:"16.10.2020",issueStatus:"Подписан"},

        {number:"3265482010", clientName:"Николаев Владимир Петрович",issueDate:"",issueStatus:"Ожидает подписания"},

        {number:"32654812672", clientName:"Лебедева Светлана Ивановна",issueDate:"",issueStatus:"Ожидает подписания"},

        {number:"3265409529", clientName:"Веселов Роман Александрович",issueDate:"16.10.2020",issueStatus:"Подписан"},
       
        {number:"3265367895", clientName:"Росляков Михаил Игоревич",issueDate:"16.10.2020",issueStatus:"Подписан"},
        {number:"3265482010", clientName:"Николаев Владимир Петрович",issueDate:"",issueStatus:"Ожидает подписания"}
    ]
    
    let docs = filterDocs(query, documents)
    
    docs = docs.map((element)=>{
        return(
            <Document key={uuidv4()} number={element.number} clientName={element.clientName} issueDate={element.issueDate} issueStatus={element.issueStatus}/>
        )
    });

    return (
            <div className="documents">
                {docs}
            </div>
    )
}
