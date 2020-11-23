import React from 'react';
import SearchItemSection from "./SearchItemSection";
import DescriptionSection from "./DescriptionSection";
import Documents from './Documents';
export default function Main() {
    return (
        <div className="main">
          <SearchItemSection/>
          <DescriptionSection/>
          <Documents />
          <hr />
        </div>
    )
}
