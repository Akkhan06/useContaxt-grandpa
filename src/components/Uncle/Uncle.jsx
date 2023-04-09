import React from "react";
import Cousin from "../Cousin/Cousin";

const Uncle = () => {
  
  return (
    <div className="border-2 border-red-400 rounded-lg p-3">
      <h1 className="font-semibold">Uncle</h1>

      <section className="flex gap-4 justify-center p-3">
        <Cousin>Nabil</Cousin>
        <Cousin>Nabila</Cousin>
      </section>
    </div>
  );
};

export default Uncle;
