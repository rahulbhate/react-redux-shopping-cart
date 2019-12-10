import React, {useState} from 'react';

export function useLocalState(localItem){
    console.log(localItem);
    const [local,setState] = useState(localStorage.getItem(localItem));
    function setLocal(newItem){
      console.log(newItem);
      localStorage.setItem(localItem, JSON.stringify(newItem));
      setState(newItem);
    }
    return [local,setLocal];
  }