
import React, { createContext, useContext, useEffect, useState } from "react";

const Crypto = createContext();


const CryptoContext = ({children}) => {

    const [currency, setCurrency] = useState("LKR");
    const [symbol, setSymbol] = useState("Rs.");


    useEffect(() => {
        if (currency === "LKR") setSymbol("Rs.");
        else if (currency === "USD") setSymbol("$");
      }, [currency]);


  return <Crypto.Provider value={{ currency, setCurrency, symbol }}>{children}</Crypto.Provider>;
};

export default CryptoContext;

//export our state
export const CryptoState = () => {
    return useContext(Crypto);
  };