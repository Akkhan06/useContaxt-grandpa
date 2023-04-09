import React, { useContext } from "react";
import { ring, sentMoney } from "../Grandfa/Grandfa";

const Special = () => {
  const rings = useContext(ring)
  const [money] = useContext(sentMoney)
  return (
    <div>
      <div className="border-2 border-red-400 rounded-lg p-3">
        <h1 className="font-semibold">Special</h1>
        <h1 className="">{rings}</h1>
        <h1 className="">{money}Tk</h1>
      </div>
    </div>
  );
};

export default Special;
