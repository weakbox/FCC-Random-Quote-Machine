import { useState } from 'react'
import './App.css'
import quotes from './assets/quotes.json'

interface Quote {
  quote: string,
  author: string,
}

// Return value of this function is of type 'Quote':
const getRandomQuote = (): Quote => {
  return quotes[Math.floor(Math.random() * quotes.length)];
};

const getRandomBackgroundColor = (): string => {
  const red = Math.floor(Math.random() * 128);
  const green = Math.floor(Math.random() * 128);
  const blue = Math.floor(Math.random() * 128);

  return `rgb(${red}, ${green}, ${blue})`;
}

function App() {
  const [quote, setQuote] = useState<Quote>(getRandomQuote());
  const [backgroundColor, setBackgroundColor] = useState<string>(getRandomBackgroundColor());

  const changeQuote = () => {
    setQuote(getRandomQuote());
    setBackgroundColor(getRandomBackgroundColor());
  }

  return (
    <div className="background" style={{ backgroundColor: backgroundColor }}>
      <div id="quote-box">
        <h5 id="title">Random Quote Machine</h5>
        <h2 id="text">"{quote.quote}"</h2>
        <h4 id="author">— {quote.author}</h4>
        <div className="button-container">
          <button id="new-quote" onClick={changeQuote} style={{ backgroundColor: backgroundColor }}>New Quote</button>
          <a 
            id="tweet-quote" 
            href={`https://twitter.com/intent/tweet?text=${quote.quote}`} 
            target="_blank"
          >
            <i className="fa fa-twitter"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App
