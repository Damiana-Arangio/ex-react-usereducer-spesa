import { useState } from 'react';
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
  const [addedProducts, setAddedProducts] = useState([]);       // Stato che rappresenta i prodotti nel carrello.
  
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
                <button onClick={() => addToCart(product)}> Aggiungi al carrello </button>
              </li>
            ))}
          </ul>
      </div>

      {/* Carrello */}
      {addedProducts.length > 0 &&
        <div>
          <h2> Carrello </h2>

          {/* Lista prodotti carrello */}
          <ul>
            {addedProducts.map((addedProduct, index) => (
              <li key={index}>
                {addedProduct.name} – {addedProduct.price.toFixed(2)} €

                {/* Input per modificare la quantità di un prodotto */}
                <input 
                  id='input-quantity'
                  type="number" 
                  min={1}
                  value={addedProduct.quantity}
                  onChange={(e) => updateProductQuantity(e, addedProduct)}
                />

                {/* Bottone per rimuovere un prodotto dal carrello */}
                <button onClick={() => removeFromCart(addedProduct)}> Rimuovi dal carrello </button>
              </li>
            ))}
          </ul>

          {/* Totale da pagare */}
          <h3>
            Totale: {
              addedProducts.reduce((acc, currProduct) =>
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

  // Funzione per aggiungere un prodotto nel carrello
  function addToCart(product) {

    // Se il prodotto non è presente nel carrello, lo aggiungo (quantità = 1)
    const isPresent = addedProducts.some( addedProduct => addedProduct.name === product.name);
    if(!isPresent) {
      setAddedProducts( currAddedProducts => [
        ...currAddedProducts, 
        { ...product, quantity: 1 }
      ]);
    }
  }

  // Funzione per aggiornare la quantità di un prodotto dal carrello
  function updateProductQuantity(e, product) {

    let newQuantity = parseInt(e.target.value);

    // Se l'input è un numero valido (>0) aggiorno lo stato
    if (newQuantity > 0 && !isNaN(newQuantity)) {
    
      setAddedProducts(currAddedProducts =>
      currAddedProducts.map(prodottoCarrello =>
        prodottoCarrello.name === product.name
          ? { ...prodottoCarrello, quantity: newQuantity }
          : prodottoCarrello
      ))
    }
  }

  // Funzione per rimuovere un prodotto dal carrello
  function removeFromCart(addedProduct) {
    
    setAddedProducts ( currAddedProducts => 
      currAddedProducts.filter(prodottoCarrello => prodottoCarrello.name !== addedProduct.name
    ));
  }

}
export default App;

