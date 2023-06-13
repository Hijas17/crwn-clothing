import { useState } from "react";
import { createContext } from "react";

import Products from '../shop.data.json'


export const Productscontext = createContext({
    product:[],
});


export const ProductProvider=({children})=>{
    const[product, setproduct]= useState(Products);
    const value={product};
    return(
        <Productscontext.Provider value={value}>{children}</Productscontext.Provider>
    )
}