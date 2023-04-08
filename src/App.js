import React, { useState } from "react";
import "./App.css";
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [joke, setJoke] = useState("");

  const [type, setType] =useState("")

  const jokeType = () => {
    Axios.get("https://official-joke-api.appspot.com/random_joke").then(
      (res) => {
        setType(res.data.type);
      }
    );
  };

  const getJoke = () => {
    Axios.get("https://official-joke-api.appspot.com/random_joke").then(
      (res) => {
        setJoke(res.data.setup + "..." + res.data.punchline);
      }
    );
  };

 

  function handleClear() {
    setType(null);
    setJoke(null);
    
  }
  
  function jokeAndType() {
    getJoke()
    jokeType()
  }

  return (
    <div className="whole">
      <button className="btn btn-danger" onClick={jokeAndType}>Get Joke</button>
      <div className="m-3">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{type}</h5>
            <p className="card-text">{joke}</p>
          </div>
        </div>
      </div>
      <div>
        <button className="btn btn-outline-danger" disabled={!joke} type="submit" onClick={handleClear}>
          Clear
        </button>
      </div>
    </div>
  );
}

export default App;
