import React, { useState } from 'react';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import { Document, Page} from 'react-pdf/dist/esm/entry.webpack';


// function
//     

export const ModalDocument = ({url, token, chosenDoc, setUrl, fetch_documents, number}) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [localLoading, setLocalLoading] = useState(false); 
  const [requestSent, setRequestSent] = useState(false);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  function showDoc(){
    window.open(url)
  }
  function generateDoc(){
    document.getElementById('successAnimation').classList.remove('animated');
    setLocalLoading(true);
    setRequestSent(true);
    console.log("Генерирую документ");
    fetch(`http://3.23.57.97:8000/documents/${chosenDoc.number}/generate/`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `JWT ${token}`
                }
              })
              .then(json => {
                setLocalLoading(false);
                setRequestSent(3);
              })
              .catch(
              (error)=>{
                  console.log(error);
              }
              );
  }

  let modalButton = chosenDoc.issueStatus === "Подписан"?"Просмотреть":"Подписать";
  return (
    <div className="modal-window" style={{"text-align":"center"}}>

      <svg id="successAnimation" className={localLoading?"":"animated"} visibility={`${chosenDoc.issueStatus==="Подписан"?"visible":requestSent?"visible":"hidden"}`} xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70">
        <path id="successAnimationResult" fill="#D8D8D8" d="M35,60 C21.1928813,60 10,48.8071187 10,35 C10,21.1928813 21.1928813,10 35,10 C48.8071187,10 60,21.1928813 60,35 C60,48.8071187 48.8071187,60 35,60 Z M23.6332378,33.2260427 L22.3667622,34.7739573 L34.1433655,44.40936 L47.776114,27.6305926 L46.223886,26.3694074 L33.8566345,41.59064 L23.6332378,33.2260427 Z"/>
        <circle id="successAnimationCircle" cx="35" cy="35" r="24" stroke="#979797" stroke-width="2" stroke-linecap="round" fill="transparent"/>
        <polyline id="successAnimationCheck" stroke="#979797" stroke-width="2" points="23 34 34 43 47 27" fill="transparent"/>
      </svg><div className="modal-window__document">
        <Document
          file={chosenDoc.issueStatus==="Подписан"?url:"http://3.23.57.97:8000/media/default.pdf"}
          onLoadSuccess={onDocumentLoadSuccess}
        >

        <Page pageNumber={pageNumber}></Page>
        </Document>
      </div>

      <span>{
        chosenDoc.issueStatus==="Подписан"?
            "Этот документ подписан":
              requestSent===false?"Для подписания нажмите Подписать": localLoading?"Подождите, запрос выполняется": requestSent===3?"Документ успешно подписан":""}</span>
      <p>
      <button onClick={()=>{modalButton==="Подписать" ? generateDoc(): showDoc()}}>{modalButton}</button>
      <p>
      <NavigateBeforeIcon onClick={()=>{pageNumber > 1? setPageNumber(pageNumber-1):setPageNumber(1)}}>-</NavigateBeforeIcon>
      <NavigateNextIcon onClick={()=>{numPages > pageNumber? setPageNumber(pageNumber+1):setPageNumber(pageNumber)}}>+</NavigateNextIcon>
      </p>
      </p>
    </div>

  );
}