import React, { useContext } from "react";
import { sentMoney } from "../Grandfa/Grandfa";

const Friend = () => {
  const [money, setMoney] = useContext(sentMoney)
  return (
    <div>
      <div className="border-2 border-red-400 rounded-lg p-3">
        <h1 className="font-semibold">Friend</h1>
        <button className="bg-slate-400 p-2 text-white rounded-lg" onClick={() => setMoney(money + 1000)}>sent 1000Tk</button>
      </div>
    </div>
  );
};

export default Friend;
