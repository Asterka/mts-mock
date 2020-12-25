import React,{useState, useEffect} from 'react';
import SearchItemSection from "./SearchItemSection";
import Documents from './Documents';
import Modal from "react-awesome-modal";
import { ModalDocument } from './ModalDocument';


export default function Main({get_documents, token, userDetails}) {
    const [query, setQuery] = useState("");
    const [sortBy, setSortBy] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [openedModal, setOpenedModal] = useState(false);
    const [url, setUrl] = useState("http://3.23.57.97:8000/media");
    const [docs, setDocs] = useState([ 
    ]);
    const [chosenDoc, setChosenDoc] = useState(-1);
    
    function closeModal(setOpenedModal){

        document.getElementById('main-table').style.animation = 'fadeOut 0.5s'
        document.getElementById('footer-pagination').style.animation = 'fadeOut 0.5s';

        setDocs([]);
        get_documents(token,'')
                .then(res => res.json())
                    .then(json => {
                        console.log(json);
                        let loadedData = json;
                        loadedData = loadedData.filter((element)=>
                            element.users[0].id === userDetails.id)
                        let myDocuments = [];
                        loadedData.forEach(element => {
                            myDocuments.push({'number':element.number, 'clientName':`${userDetails.first_name + " " + userDetails.last_name}`, 'issueStatus': element.sign_status?"Подписан":"Ожидает подписания", "issueDate":(element.sign_date!==null)?element.sign_date:""});
                        });
                        document.getElementById('main-table').style.animation = 'fadeIn 0.5s';
                        document.getElementById('footer-pagination').style.animation = 'fadeIn 0.5s';
                        setDocs(myDocuments);
                        setOpenedModal(false);
                    })
                    .catch(
                    (error)=>{
                        console.log(error);
                    }
                );
        
    }

    useEffect(() => {
        if(userDetails !== null){
            get_documents(token,'')
            .then(res => res.json())
                .then(json => {
                    console.log(json);
                    let loadedData = json;
                    loadedData = loadedData.filter((element)=>
                        element.users[0].id === userDetails.id)
                    let myDocuments = [];
                    loadedData.forEach(element => {
                        myDocuments.push({'number':element.number, 'clientName':`${userDetails.first_name + " " + userDetails.last_name}`, 'issueStatus': element.sign_status?"Подписан":"Ожидает подписания", "issueDate":(element.sign_date!==null)?element.sign_date:""});
                    });
                    setDocs(myDocuments);
                })
                .catch(
                (error)=>{
                    console.log(error);
                }
                );
        }
    
    }, [userDetails])

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
                                                    setOpenedModal={setOpenedModal}
                                                        setUrl={setUrl}
                                                            token={token}
                                                                setChosenDoc={setChosenDoc}
                                                        />
          
            <Modal visible={openedModal} width="50%" height="80%" effect="fadeInUp" onClickAway={() => closeModal(setOpenedModal)}>
                <ModalDocument url={url} token={token} setUrl={setUrl} chosenDoc={chosenDoc}/>
            </Modal>
        </div>
    )
}
