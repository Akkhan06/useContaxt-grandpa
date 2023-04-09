import React, { createContext, useState } from "react";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import Aunty from "../Aunty/Aunty";

export const ring = createContext("hello");
export const sentMoney = createContext(0);

const Grandfa = () => {
  const [money, setMoney] = useState(0);
  return (
    <div className="border-2 border-red-500 w-auto rounded-lg">
      <h1 className="font-semibold">grand fa</h1>
      <h1 className="">{money}tk</h1>

      <section className="flex gap-4 justify-center p-3">
        <sentMoney.Provider value={[money, setMoney]}>
          <ring.Provider value="gello">
            <Father></Father>
            <Uncle></Uncle>
            <Aunty></Aunty>
          </ring.Provider>
        </sentMoney.Provider>
      </section>
    </div>
  );
};

export default Grandfa;

/*
1. CREATE CONTAXT AND EXPORT
2. CREATE A PROVIDER AND PASS A VALUE
3. USE useContaxt and RECIVE A VALUE
*/
