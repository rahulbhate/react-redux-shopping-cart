import React, { useState, useEffect} from 'react';
import Product from "./Product";
import CartList from "./CartList";
const Products = ({ products }) =>{
    const [cart,setCart] = useState([]);
    useEffect(() => {
        console.log("useEffect App Component hook called");
        localStorage.setItem("Cart", JSON.stringify(cart));
      
  }, [cart])
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
       
         localStorage.setItem("Cart", JSON.stringify(cart));
       
       }
    return(
        <>
            {
                products.map(p => <Product key={p.id}  addFunc={handleAddFunc} {...p}/>)
            }
            <CartList cart={cart} />
        </>
    )
}

export default Products;