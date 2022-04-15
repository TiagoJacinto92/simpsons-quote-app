import axios from "axios";
import React, { useState } from "react";
import "./App.css";
import DisplayQuote from "./components/displayQuote";

function App() {
  const initialQuote = {
    quote:
      "Why are you pleople avoiding me? Does my withered face remind you of the grim specter of death?",
    character: "Abe Simpson",
    image:
      "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FAbrahamSimpson.png?1497567511593",
    characterDirection: "Right",
  };

  const [quote, setQuote] = useState(initialQuote);

  const getQuote = () => {
    axios
      .get("https://simpsons-quotes-api.herokuapp.com/quotes")
      .then((response) => response.data)
      .then((data) => {
        console.log(data[0]);
        setQuote(data[0]);
      });
  };
  return (
    <div>
      <DisplayQuote quote={quote} />
      <button type="button" onClick={getQuote}>
        New Quote
      </button>
    </div>
  );
}

export default App;
