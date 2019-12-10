import React, { useState, useEffect} from 'react';
import Product from "./Product";
import CartList from "./CartList";
import { useLocalState } from './hooks';

export const ProductContext = React.createContext();
const Products = ({ products }) =>{
    const [cart,setCart] = useState([]);
    const [prod] = useState(products);
   useEffect(() => {
    const data = localStorage.getItem("MyCart");
    if(data){
      setCart(JSON.parse(data))
    }
    
}, []);
   useEffect(() => {
    localStorage.setItem("MyCart", JSON.stringify(cart));
   });
   
    const handleAddFunc = (product) =>{
        const existingProduct = cart.filter(p => p.id === product.id);
         if(existingProduct.length > 0){
           const withoutExistingProduct = cart.filter(p => p.id !== product.id);
           const updatedUnitsProduct = {
             ...existingProduct[0],
             units: existingProduct[0].units + product.units
           }
           setCart([...withoutExistingProduct, updatedUnitsProduct]);
         }
         else{
           setCart([...cart, product]);
         }
       
       }
    return(
        <>
            {
                prod.map(p => <Product key={p.id}  addFunc={handleAddFunc} {...p}/>)
            }
            <ProductContext.Provider value={[cart, setCart]}>
                <CartList cart={cart} />
            </ProductContext.Provider>
        </>
    )
}

export default Products;