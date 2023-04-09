import React from "react";
import Myself from "../Myself/Myself";
import Sister from "../Sister/Sister";
import Brother from "../Brother/Brother";

const Father = () => {
  return (
    <div className="border-2 border-red-400 rounded-lg p-3">
      <h1 className="font-semibold">father</h1>
      <section className="flex gap-4 justify-center p-3">
        <Myself></Myself>
        <Sister></Sister>
        <Brother></Brother>
      </section>
    </div>
  );
};

export default Father;
