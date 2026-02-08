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
  const [addedProducts, setAddedProducts] = useState([]);   // Stato che rappresenta i prodotti nel carrello.
  console.log(addedProducts);

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
              <button onClick={() => addToCart(product)}> Aggiungi al carrello </button>
            </li>
          ))}
        </ul>
    </div>

      {/* Carrello */}
      {addedProducts.length > 0 &&
        <div>
          <h2> Carrello </h2>
          <ul>
            {addedProducts.map((addedProduct, index) => (
              <li key={index}>
                {addedProduct.name} – {addedProduct.price.toFixed(2)} € - x{addedProduct.quantity}
              </li>
            ))}
          </ul>
        </div>
      }
    </>
  )

  /**************
      FUNZIONI 
  ***************/ 

  // Funzione per aggiungere i prodotti nel carrello
  function addToCart(product) {

    // Se il prodotto non è gia nel carrello, lo aggiungo
    const isPresent = addedProducts.some( addedProduct => addedProduct.name === product.name);
    if(!isPresent) {
      setAddedProducts( currAddedProducts => [
        ...currAddedProducts, 
        {...product, quantity: 1 }
      ]);
    }
  }
}

export default App
