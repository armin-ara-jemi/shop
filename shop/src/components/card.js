import React from "react";
import '../styles/card.css'

const Cards = ({ item, handleClick }) => {
  const { name, author, price, img } = item;
  return (
    <div className="cards">
      <div className="image_box">
        <img src={img} alt="" />
      </div>
      <div className="details">
        <p>{name}</p>
        <p>{author}</p>
        <p>Price - ৳{price}</p>
        <button className="btn" onClick={() => handleClick(item)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Cards;


