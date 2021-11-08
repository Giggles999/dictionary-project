import React, {useState} from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary (props) {
    let [keyword, setKeyword] = useState (props.defaultKeyword);
    let [results, setResults] = useState (null);
    let [loaded, setLoaded] = useState(false);
    let [photos,setPhotos] = useState (null);
    
    const pexelsApiKey =
    "563492ad6f917000010000017050830864214c75b791bc4b6aaa7a63";
    
    const headers = { Authorization: `Bearer ${pexelsApiKey}` };
    
    function handleResponse (response) {
        setResults(response.data[0]);
    }

    function handlePexelsResponse (response) {
        setPhotos(response.data.photos);
    }

    function search (){
        //documentation: https://dictionaryapi.dev/  
        let apiUrl =`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleResponse);

        let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
        axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
    }
    
    function handleSubmit (event) {
        event.preventDefault();
        search ();
    }


    function handleKeywordChange (event){
        setKeyword(event.target.value); 
    }
    
    function load () {
        setLoaded (true);
        search ();
    }

    if (loaded) {
        return (
            <div className="Dictionary">
             <section >
                <h1 >what word do you want to look up? </h1>
                    <form onSubmit={handleSubmit}>
                        <input 
                        type="search" 
                        id="defaultFormCardNameEx" 
                        className="form-control" 
                        onChange= {handleKeywordChange} 
                        defaultValue={props.defaultKeyword}/>
                </form>  
                    <div className="hint">
                        suggested words: backpacking, camping, painting, yoga...
                        </div>
            </section>
            <Results results={results} />
            <Photos photos={photos} />
        </div>
      );
    } else {
        load ();
        return "Loading";
    } 
}
    