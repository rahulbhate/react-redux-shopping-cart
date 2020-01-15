import React from "react";
import './App.css';
import { ProductsContextProvider } from "./context";
import data from '../src/products';
import Products from "../src/components/Products";
import CartList from "../src/components/CartList";
const App = () => {
  const products = data;
  return (
     <main className="pa3 pa5-ns flex flex-wrap">
      <ProductsContextProvider products={products}>
          <Products />
          <CartList />
      </ProductsContextProvider>
    </main>
  );
};

export default App;
