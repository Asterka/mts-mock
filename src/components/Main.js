import React from 'react';
import SearchItemSection from "./SearchItemSection";
import DescriptionSection from "./DescriptionSection";

export default function Main() {
    return (
        <div className="main">
          <SearchItemSection/>
          <DescriptionSection/>
          <hr />
        </div>
    )
}
