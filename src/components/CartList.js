import React, { useContext } from "react";
import { ProductsContext } from "../context";

const CartList = () => {
  //get the selected user from the ProductsContext
  const { selectedProductCart, addProductToCart } = useContext(ProductsContext);
console.log(selectedProductCart);
  return (
    <div>
      <h4>Cart Details: </h4>
      { selectedProductCart && selectedProductCart.length > 0 ? selectedProductCart
                    .map(item => 
                    <div
                        className="flex items-center lh-copy pa3 ph0-l bb b--black-10" key={item.id}>
                        <img className="w2 h2 w3-ns h3-ns br-100" src={item.img}  alt="" />
                        <div className="pl3 flex-auto">
                            <span className="f6 db black-70">{item.name}</span>
                            <span className="f6 db black-70">{item.description}</span>
                        </div>
                        <div>
                            <span>Units : {item.units}</span>
                            <span>Total : {item.price * item.units}</span>
                            <button>+</button>
                            <button onClick={() => {}}>-</button>
                        </div>
                    </div>)  : (
        <p>No Items in the Cart.</p>
      )}
      <div>Cart Total:{ selectedProductCart.reduce((a,c) => a + c.price * c.units,0 )} </div> 
    </div>
  );
                    }

export default CartList;