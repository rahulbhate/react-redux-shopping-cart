import React from 'react';
import './App.css';
import data from '../src/products';
import Products from "./components/Products";
function App() {

  return (
     <main className="pa3 pa5-ns flex flex-wrap">
       <Products products={data}/>
      </main>
      
  );
}

export default App;
