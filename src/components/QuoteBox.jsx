
import '/src/components/Styles/QuoteBox.css'

const QuoteBox = ({handleChangeQuote, quote}) => {
  return (
    <section className='container'>
      <h1>infogalax</h1>
      
      <section className='info'>
        <p>{quote.phrase}</p>
        <button onClick={handleChangeQuote}><img src="/public/images/refresh-outline.svg" alt="" className='refresh'/></button>
      </section>

      <footer>
        <h4>Source: {quote.author}</h4>
      </footer>
      
    </section>
  )
}

export default QuoteBox

