import {React, useState} from 'react';
import { Document, Page } from 'react-pdf';

import samplePDF from './../static/test.pdf';

const [pageNumber, setPageNumber] = useState(1);
export default function Test() {
  return (
    <Document file={samplePDF}>
      <Page pageNumber={1} />
      
    </Document>
  );
}