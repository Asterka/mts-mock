import React from 'react';
import Document from './Document';

export default function Documents({number, clientName, issueDate, issueStatus}) {
    const documents = [
        {number:"3265482010", clientName:"Николаев Владимир Петрович",issueDate:"",issueStatus:"Ожидает подписания"},

        {number:"32654812672", clientName:"Лебедева Светлана Ивановна",issueDate:"",issueStatus:"Ожидает подписания"},

        {number:"3265409529", clientName:"Веселов Роман Александрович",issueDate:"16.10.2020",issueStatus:"Подписан"},
       
        {number:"3265367895", clientName:"Росляков Михаил Игоревич",issueDate:"16.10.2020",issueStatus:"Подписан"},
    ].map((element)=>{
        return(
            <Document number={element.number} clientName={element.clientName} issueDate={element.issueDate} issueStatus={element.issueStatus}/>
        )
    });

    return (
            <div className="documents">
                {documents}
            </div>
    )
}
