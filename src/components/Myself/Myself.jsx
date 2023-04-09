import React from "react";
import Special from "../Special/Special";

const Myself = () => {
  return (
    <div>
      <div className="border-2 border-red-400 rounded-lg p-3">
        <h1 className="font-semibold">My self</h1>

        <section className="flex gap-4 justify-center p-3">
        <Special></Special>
      </section>
      </div>
    </div>
  );
};

export default Myself;
