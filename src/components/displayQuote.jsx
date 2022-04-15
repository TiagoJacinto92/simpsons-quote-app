const DisplayQuote = ({ quote }) => {
  return (
    <div className="displayQuote">
      <img src={quote.image} alt={quote.character} />
      <p>{quote.character}</p>
      <h3>{quote.quote}</h3>
    </div>
  );
};

export default DisplayQuote;
