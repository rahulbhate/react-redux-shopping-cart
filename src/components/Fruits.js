import React, {useState } from 'react';
import { useLocalState } from './hooks'
// import  Cart  from './Cart';

export const FruitContext = React.createContext();
const Fruits = () => {
  
  const [fruit, setFruit] = useLocalState('Fruit');
    return (
      <FruitContext.Provider value={[fruit, setFruit]}>
        <p>
          Fruit: {fruit} 
          {/* <Cart /> */}
        </p>
        <div><button onClick={ () => setFruit('Apple')}>Fruit</button></div>
      </FruitContext.Provider>
    );
 
}
export default Fruits;
