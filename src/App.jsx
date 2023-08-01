import { useState } from 'react';
import './App.css'
import quotes from "./db/quote.json"
import { getRandom } from './utils/random';
import QuoteBox from './components/QuoteBox';

const listBg = ["bg1", "bg2", "bg3", "bg4"]

function App() {
  
  const [quote, setQuote] = useState(getRandom(quotes))
  const [curretnBg, setCurretnBg] = useState(getRandom(listBg))

  const handleChangeQuote = () => {
    setQuote(getRandom(quotes))
    setCurretnBg(getRandom(listBg))
  }
  return (
    <main className={`App ${curretnBg}`}>
    <QuoteBox handleChangeQuote={handleChangeQuote} quote={quote} />
    </main>
  )
}

export default App
