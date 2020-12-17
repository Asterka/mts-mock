import React, { useState } from 'react';
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
      <h3>Скачать договор</h3>
    </div>
  );
}