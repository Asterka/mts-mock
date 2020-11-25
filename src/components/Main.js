import React,{useState} from 'react';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import SearchItemSection from "./SearchItemSection";
import DescriptionSection from "./DescriptionSection";
import Documents from './Documents';
import PageNavigation from './PageNavigation';
export default function Main() {
    const [query, setQuery] = useState("");
    const [sortBy, setSortBy] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);

    const [docs, setDocs] = useState([

        {number:"3265482010", clientName:"Николаев Владимир Петрович",issueDate:"",issueStatus:"Ожидает подписания"},

        {number:"32654812672", clientName:"Лебедева Светлана Ивановна",issueDate:"",issueStatus:"Ожидает подписания"},

        {number:"3265409529", clientName:"Веселов Роман Александрович",issueDate:"16.10.2020",issueStatus:"Подписан"},
       
        {number:"3265367895", clientName:"Росляков Михаил Игоревич",issueDate:"16.10.2020",issueStatus:"Подписан"},

        {number:"3265482010", clientName:"Николаев Владимир Петрович",issueDate:"",issueStatus:"Ожидает подписания"},

        {number:"32654812672", clientName:"Лебедева Светлана Ивановна",issueDate:"",issueStatus:"Ожидает подписания"},

        {number:"3265409529", clientName:"Веселов Роман Александрович",issueDate:"16.10.2020",issueStatus:"Подписан"},
       
        {number:"3265367895", clientName:"Росляков Михаил Игоревич",issueDate:"16.10.2020",issueStatus:"Подписан"},
        
        {number:"3265482010", clientName:"Николаев Владимир Петрович",issueDate:"",issueStatus:"Ожидает подписания"}
    ]);

    return (
        <div className="main">
          <SearchItemSection query={query} setQuery={setQuery}/>
          <DescriptionSection docs={docs} setDocs={setDocs} sortBy={sortBy} setSortBy={setSortBy}/>
          <Documents query={query} docs={docs} setDocs={setDocs} sortBy={sortBy} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
          <hr />
        </div>
    )
}
