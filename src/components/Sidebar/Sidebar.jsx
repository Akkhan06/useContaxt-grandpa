import React from "react";

const Sidebar = ({ single, removeHandler, singleCard }) => {
  const { name, _id } = single;

  

  return (
    <div>
      <div className="bg-orange-300 w-auto h-2/3">
        
        <h1 className="bg-slate-300 p-2">
          {name}
          <button
            onClick={() => removeHandler(_id)}
            className="bg-white p-3 rounded-lg"
          >
            x
          </button>
        </h1>
      </div>
    </div>
  );
};

export default Sidebar;
