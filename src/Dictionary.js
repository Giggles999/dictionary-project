import React, {useState} from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary () {
    let [keyword, setKeyword] = useState ("");
    let [results, setResults] = useState (null);

    function handleResponse (response) {
        setResults(response.data[0]);
    }

    function search (event) {
        event.preventDefault();
        

//documentation: https://dictionaryapi.dev/        
    let apiUrl =`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
    }
    
    function handleKeywordChange (event){
        setKeyword(event.target.value);
    }

    return (
        <div className="Dictionary">
          <form onSubmit={search}>
          <p className="h4 text-center py-2">Search Word</p>
            <input type="search" id="defaultFormCardNameEx" className="form-control" onChange= {handleKeywordChange} />
        </form>   
        <div className="d-grid gap-2"><button className="btn btn-primary" >Submit button doesn't work yet - click Enter for now :)</button></div>
                

        <Results results={results} />
    </div>
    );
}