import React, { useState } from 'react';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import { Document, Page} from 'react-pdf/dist/esm/entry.webpack';


// function
//     

export const ModalDocument = ({url, token, chosenDoc, setUrl, fetch_documents, number}) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  function showDoc(){
    window.open(url)
  }
  function generateDoc(){
    console.log("Генерирую документ");
    let loading = document.getElementById("loading");
    console.log(token);
    fetch(`http://3.23.57.97:8000/documents/${chosenDoc.number}/generate/`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `JWT ${token}`
                }
              })
              .then(json => {
                  console.log(json);
              })
              .catch(
              (error)=>{
                  console.log(error);
              }
              );
  }

  let modalButton = chosenDoc.issueStatus === "Подписан"?"Просмотреть":"Подписать";
  
  return (
    <div className="modal-window">
      <div className="spinner-border" styles={{width: "3rem", height: "3rem"}} role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <div className="modal-window__document">
        <Document
          file={chosenDoc.issueStatus==="Подписан"?url:"http://3.23.57.97:8000/media/default.pdf"}
          onLoadSuccess={onDocumentLoadSuccess}
        >

        <Page pageNumber={pageNumber}></Page>
        </Document>
      </div>
      <button onClick={()=>{modalButton==="Подписать" ? generateDoc(): showDoc()}}>{modalButton}</button>
      <NavigateBeforeIcon onClick={()=>{pageNumber > 1? setPageNumber(pageNumber-1):setPageNumber(1)}}>-</NavigateBeforeIcon>
      <NavigateNextIcon onClick={()=>{numPages > pageNumber? setPageNumber(pageNumber+1):setPageNumber(pageNumber)}}>+</NavigateNextIcon>
    </div>
  );
}