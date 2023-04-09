import React from "react";

const Cousin = ({children}) => {
  return (
    <div>
      <div className="border-2 border-red-400 rounded-lg p-3">
        <h1 className="font-semibold">Cousin</h1>
        {children}
      </div>
    </div>
  );
};

export default Cousin;
