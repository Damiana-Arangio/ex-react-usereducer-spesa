import { useReducer } from 'react';
import './App.css'

function App() {

  /***************
      COSTANTI 
  ****************/ 
  const products = [
    { name: 'Mela', price: 0.5 },
    { name: 'Pane', price: 1.2 },
    { name: 'Latte', price: 1.0 },
    { name: 'Pasta', price: 0.7 },
  ];

  /***********
      HOOK 
  ************/ 
  const [cartProducts, dispatch] = useReducer(cartReducer, [])    // Stato complesso per gestire i prodotti nel carrello
  
  /************
     RENDER 
  **************/ 
  return (
    <>
      {/* Lista Prodotti */}
      <div>
          <h1> Lista prodotti</h1>
          <ul>
            {products.map((product, index) => (
              <li key={index}>
                {product.name} – {product.price.toFixed(2)} €

                {/* Bottone per aggiungere un prodotto nel carrello */}
                <button onClick={ () => dispatch({ type: "ADD_ITEM", payload: product })}> Aggiungi al carrello </button>
              </li>
            ))}
          </ul>
      </div>

      {/* Carrello */}
      {cartProducts.length > 0 &&
        <div>
          <h2> Carrello </h2>

          {/* Lista prodotti carrello */}
          <ul>
            {cartProducts.map((addedProduct, index) => (
              <li key={index}>
                {addedProduct.name} – {addedProduct.price.toFixed(2)} €

                {/* Input per modificare la quantità di un prodotto */}
                <input 
                  id='input-quantity'
                  type="number" 
                  min={1}
                  value={addedProduct.quantity}
                  onChange={(e) => dispatch({ type: "UPDATE_QUANTITY", payload: { addedProduct: addedProduct, newQuantity : parseInt(e.target.value)}})}
                />

                {/* Bottone per rimuovere un prodotto dal carrello */}
                <button onClick={() => 
                  dispatch( {type : "REMOVE_ITEM", payload : addedProduct} )}> Rimuovi dal carrello </button>
              </li>
            ))}
          </ul>

          {/* Totale da pagare */}
          <h3>
            Totale: {
              cartProducts.reduce((acc, currProduct) =>
                acc + (currProduct.price * currProduct.quantity),
                0
              ).toFixed(2)
            } €
          </h3>
        </div>
      }
    </>
  )

  /**************
      FUNZIONI 
  ***************/ 

  // Funzione reducer 
  function cartReducer(prodottiCarrello, action) {
    switch (action.type) {

      case 'ADD_ITEM': {

        const product = action.payload;
          
        // Se il prodotto è già presente nel carrello, incremento la quantità
        const isPresent = prodottiCarrello.some(prodottoCarrello => prodottoCarrello.name === product.name);
          if (isPresent) {
            return prodottiCarrello.map(
              prodottoCarrello => prodottoCarrello.name === product.name
                ? { ...prodottoCarrello, quantity: prodottoCarrello.quantity + 1 }
                : prodottoCarrello
            );
          }

        // Se il prodotto non è presente nel carrello, lo aggiungo (quantità = 1)
        return [...prodottiCarrello, { ...product, quantity: 1 }];
      }


      case 'REMOVE_ITEM': {

        const addedProduct = action.payload

        return prodottiCarrello.filter
          (prodottoCarrello => prodottoCarrello.name !== addedProduct.name)
      }
          



      case 'UPDATE_QUANTITY': {
        const { addedProduct, newQuantity } = action.payload;

        // Se l'input è un numero valido (>0) aggiorno lo stato
        if (newQuantity > 0 && !isNaN(newQuantity)) {
          return prodottiCarrello.map(prodottoCarrello =>
            prodottoCarrello.name === addedProduct.name
              ? { ...prodottoCarrello, quantity: newQuantity }
              : prodottoCarrello
          );
        }

        // Se la quantità non è valida, ritorno lo stato invariato
        return prodottiCarrello;
      }

      default:
        return prodottiCarrello;
    }
  }
}

export default App;


