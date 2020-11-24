import React,{useState} from 'react';
import SearchItemSection from "./SearchItemSection";
import DescriptionSection from "./DescriptionSection";
import Documents from './Documents';
export default function Main() {
    const [query, setQuery] = useState("");

    return (
        <div className="main">
          <SearchItemSection query={query} setQuery={setQuery}/>
          <DescriptionSection/>
          <Documents query={query}/>
          <hr />
        </div>
    )
}
