import React, { useState } from "react";
import "./App.css";
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [joke, setJoke] = useState("");

  const getJoke = () => {
    Axios.get("https://official-joke-api.appspot.com/random_joke").then(
      (res) => {
        setJoke(res.data.setup + "..." + res.data.punchline);
      }
    );
  };

  function handleClear() {
    setJoke(null);
  }

  return (
    <div className="whole">
      <button onClick={getJoke}>Get Joke</button>
      <div className="m-3">
        <p>{joke}</p>
      </div>
      <div>
        <button disabled={!joke}
        className="button"
        type="submit" onClick={handleClear}>Clear</button>
      </div>
    </div>
  );
}

export default App;
