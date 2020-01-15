import React, { useContext } from "react";
import { ProductsContext } from "../context";

const Products = props => {
  const productsContext = useContext(ProductsContext);

  const { products, addProductToCart } = productsContext;

  return (
   <>
      {products.map(product => {
        return (
          <article className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10" id={product.id}>
              <div className="tc">
                <img src={product.img} className="br-100 h4 w4 dib ba b--black-05 pa2" title={product.name} alt="" />
                <h1 className="f3 mb2">{product.name}</h1>
                <h2 className="f5 fw4 gray mt0">{product.description}</h2>

                <button className="f6 link dim br3 ph3 pv2 mb2 dib white bg-dark-green bn" onClick={() => addProductToCart(product)}>
                    Add
                </button>
                <span>$ {product.price}</span>
              </div>
          </article>
        );
      })}
    </>
  );
};

export default Products;
