import axios from "axios";
import React, { useState, useEffect } from "react";
import "./App.css";
import DisplayQuote from "./components/displayQuote";

function App() {
  const [quote, setQuote] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        "https://simpsons-quotes-api.herokuapp.com/quotes"
      );
      setQuote(request.data[0]);
    }
    fetchData();
  }, []);
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
