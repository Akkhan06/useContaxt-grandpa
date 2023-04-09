import React from "react";
import Cousin from "../Cousin/Cousin";
import Friend from "../Friend/Friend";

const Aunty = () => {
  return (
    <div>
      <div className="border-2 border-red-400 rounded-lg p-3">
        <h1 className="font-semibold">Aunty</h1>

        <section className="flex gap-4 justify-center p-3">
          <Cousin>Abir</Cousin>
          <Cousin>Nabir
            <Friend></Friend>
          </Cousin>
        </section>
      </div>
    </div>
  );
};

export default Aunty;
