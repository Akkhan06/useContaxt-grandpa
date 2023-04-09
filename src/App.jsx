import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useLoaderData } from "react-router-dom";
import Cards from "./components/Cards/Cards";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const allData = useLoaderData();
  const [singleCard, setSingleCard] = useState([]);
  const addHandler = (id) => {
    const match = allData.find((pd) => pd._id === id);
    const newArr = [...singleCard, match];
    setSingleCard(newArr);
  };

  const removeHandler = (id) => {
    const matchRemove = singleCard.filter((pd) => pd._id !== id);
    setSingleCard(matchRemove);
  };

  console.log(singleCard.length)

  return (
    <div>
      <h1>this is main app {allData.length}</h1>

      <div className="grid grid-cols-4 gap-3">
        <div className="grid grid-cols-3 col-span-3 gap-3">
          {allData.map((card) => (
            <Cards card={card} key={card._id} addHandler={addHandler}></Cards>
          ))}
        </div>

        <div className="col-span-auto">
          {singleCard.map((single) => (
            <Sidebar single={single} removeHandler={removeHandler} singleCard={singleCard.length} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
