import React from "react";

const Cards = ({ card, addHandler }) => {
  const { _id, name, price, picture, gender, index } = card;
  return (
    <div>
      <div className="card card-compact w-auto bg-base-100 shadow-xl">
        <figure>
          <img
            src={picture}
            alt="Shoes"
            className="h-80 rounded-lg w-full"
          />
        </figure>
        <div className="card-body text-start">
          <h2 className="card-title">{name}</h2>
          <p>Price: ${price}</p>
          <div className="card-actions justify-end">
            <button onClick={() => addHandler(_id)} className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
