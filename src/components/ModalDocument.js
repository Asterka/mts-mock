import React, { useState } from 'react';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import { Document, Page} from 'react-pdf/dist/esm/entry.webpack';



export const ModalDocument = ({url, token, fetch_documents}) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return (
    <div className="modal-window">
      <div className="modal-window__document">
        <Document
          file={url}
          onLoadSuccess={onDocumentLoadSuccess}
        >

        <Page pageNumber={pageNumber}></Page>
        </Document>
      </div>
      <button onClick={()=>{window.open(url)}}>Скачать договор</button>
      <NavigateBeforeIcon onClick={()=>{pageNumber > 1? setPageNumber(pageNumber-1):setPageNumber(1)}}>-</NavigateBeforeIcon>
      <NavigateNextIcon onClick={()=>{numPages > pageNumber? setPageNumber(pageNumber+1):setPageNumber(pageNumber)}}>+</NavigateNextIcon>
    </div>
  );
}