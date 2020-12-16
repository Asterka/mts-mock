import React,{useState, useEffect} from 'react';
import SearchItemSection from "./SearchItemSection";
import Documents from './Documents';
import Modal from "react-awesome-modal";
import { ModalDocument } from './ModalDocument';
import {useCookies} from 'react-cookie';

//import PageNavigation from './PageNavigation';
function closeModal(setOpenedModal){
    setOpenedModal(false);
}
function fetchToken(uri, setTokenAvailable){
    fetch(uri,{
        method: 'post',
        headers: {'Content-Type':'application/json'},
        body: {
            "first_name": "silly"
        }}
    )
      .then(res => res.json())
        .then(
            (result) => {
                setTokenAvailable(false);
                console.log(result);
            },
            (error) => {
            console.log("Something went wrong: " + error);
         }
      )
}
function fetchData(uri, setIsFetching){
    setIsFetching(true);
    fetch(uri)
      .then(res => res.json())
        .then(
            (result) => {
                setIsFetching(false);
                console.log(result);
            },
            (error) => {
            console.log("Something went wrong: " + error);
         }
      )
}

export default function Main() {
    const [query, setQuery] = useState("");
    const [sortBy, setSortBy] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [openedModal, setOpenedModal] = useState(false);
    const [isFetching, setIsFetching] = useState(true);
    const [tokenAvailable, setTokenAvailable] = useState(false);
    const [cookies, setCookie, removeCookie] = useCookies(['csrftoken']);

    const [docs, setDocs] = useState([ 

        {number:"3265482010", clientName:"Николаев Владимир Петрович",issueDate:"",issueStatus:"Ожидает подписания"},

        {number:"32654812672", clientName:"Лебедева Светлана Ивановна",issueDate:"",issueStatus:"Ожидает подписания"},

        {number:"3265409529", clientName:"Веселов Роман Александрович",issueDate:"16.10.2020",issueStatus:"Подписан"},
       
        {number:"3265367895", clientName:"Росляков Михаил Игоревич",issueDate:"16.10.2020",issueStatus:"Подписан"},

        {number:"3265482010", clientName:"Николаев Владимир Петрович",issueDate:"",issueStatus:"Ожидает подписания"},

        {number:"32654812672", clientName:"Лебедева Светлана Ивановна",issueDate:"",issueStatus:"Ожидает подписания"},

        {number:"3265409529", clientName:"Веселов Роман Александрович",issueDate:"16.10.2020",issueStatus:"Подписан"},
       
        {number:"3265367895", clientName:"Росляков Михаил Игоревич",issueDate:"16.10.2020",issueStatus:"Подписан"},
        
        {number:"3265482010", clientName:"Николаев Владимир Петрович",issueDate:"",issueStatus:"Ожидает подписания"},

        {number:"3265482010", clientName:"Николаев Владимир Петрович",issueDate:"",issueStatus:"Ожидает подписания"},

        {number:"3265482010", clientName:"Николаев Владимир Петрович",issueDate:"",issueStatus:"Ожидает подписания"}
    ]);

    useEffect(() => {
        fetchToken("http://3.23.57.97/api-auth/login" , setTokenAvailable);
        fetchData("http://3.23.57.97/documents", setIsFetching);
    }, [])

    return (
        <div className="main mx-6">
          <SearchItemSection query={query} setQuery={setQuery}/>
          <Documents query={query} 
                        docs={docs} 
                            setDocs={setDocs} 
                                sortBy={sortBy} 
                                    currentPage={currentPage} 
                                        setCurrentPage={setCurrentPage}
                                            setSortBy={setSortBy}
                                                openedModal={openedModal}
                                                    setOpenedModal={setOpenedModal}/>
          
          <Modal visible={openedModal} width="50%" height="80%" effect="fadeInUp" onClickAway={() => closeModal(setOpenedModal)}>
                <ModalDocument/>
            </Modal>
        </div>
    )
}
