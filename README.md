<p align="center">
  <img src="public/boolean-logo.png" alt="Boolean logo" width="35">
</p>

<h1 align="center">EX – Carrello della Spesa (React)</h1>

Esercizio React sviluppato con **Vite**, focalizzato sulla gestione dello stato e sull’evoluzione progressiva di un **carrello della spesa interattivo**.

Il progetto è strutturato seguendo **milestone incrementali**, per mostrare il passaggio da una gestione semplice dello stato con `useState` a una gestione più avanzata e scalabile tramite `useReducer`.

---

## Obiettivo dell’esercizio

- Visualizzare una lista di prodotti
- Gestire un carrello della spesa dinamico
- Aggiungere, rimuovere e modificare prodotti nel carrello
- Calcolare il totale in tempo reale
- Gestire lo stato con `useState` e successivamente con `useReducer`

---

## Descrizione generale

L’applicazione simula un **semplice carrello della spesa**.

L’utente può:
- visualizzare una lista di prodotti con nome e prezzo
- aggiungere prodotti al carrello
- modificare le quantità dei prodotti
- rimuovere prodotti dal carrello
- visualizzare il totale aggiornato in tempo reale

L’esercizio è pensato per **rafforzare i concetti di stato, immutabilità e gestione centralizzata delle azioni** in React.

---

## 📌 Milestone 1: Mostrare la lista dei prodotti

**Obiettivo:** Visualizzare un elenco leggibile di prodotti.

### Requisiti
1. Partire da un array di prodotti predefinito.
2. Creare un componente che mostri:
   - Nome del prodotto
   - Prezzo

---

## 📌 Milestone 2: Aggiungere prodotti al carrello

**Obiettivo:** L’utente può aggiungere prodotti al carrello e visualizzarli.

### Requisiti
1. Gestire lo stato del carrello tramite `useState`.
2. Aggiungere un bottone **“Aggiungi al carrello”** per ogni prodotto.
3. Al click:
   - Il prodotto viene aggiunto al carrello con `quantity = 1`
   - Se già presente, l’azione viene ignorata
4. Mostrare il carrello solo se contiene almeno un prodotto.
5. Visualizzare per ogni prodotto:
   - Nome
   - Prezzo
   - Quantità

---

## 📌 Milestone 3: Modificare il carrello

**Obiettivo:** Gestire dinamicamente quantità, rimozione e totale.

### Requisiti
1. Se un prodotto già presente viene aggiunto di nuovo:
   - Incrementare la quantità
2. Aggiungere un bottone **“Rimuovi dal carrello”**.
3. Calcolare e mostrare il totale:
   - Prezzo × Quantità
   - Somma di tutti i prodotti

---

## 🎯 Bonus 1: Modifica dinamica delle quantità

**Obiettivo:** Consentire una modifica precisa delle quantità direttamente dal carrello.

### Requisiti
- Sostituire la visualizzazione della quantità con un `input type="number"`.
- Aggiornare la quantità al cambiamento dell’input.
- Gestire i casi limite:
  - Forzare valori interi
  - Impedire quantità minori o uguali a zero

---

## 🎯 Bonus 2: Gestione del carrello con useReducer

**Obiettivo:** Migliorare la struttura del codice rendendolo più scalabile.

### Requisiti
- Sostituire `useState` con `useReducer`.
- Centralizzare la logica di aggiornamento dello stato.
- Implementare le seguenti azioni:
  - `ADD_ITEM`
  - `REMOVE_ITEM`
  - `UPDATE_QUANTITY`
---

## 🛠 Tecnologie utilizzate

- React
- Vite
