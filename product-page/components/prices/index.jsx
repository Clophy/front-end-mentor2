"use client"
import React,{useState} from "react";
import Counter from "./counter";

function Prices({cart, setCart}) {
  const [quantity, setQuantity] = useState(0)

  return (

    <>
      <div className="price-contain">
        <p className="title">Sneaker Company</p>
        <h1 className="big-title">Fall Limited Edition Sneakers</h1>
        <p className="description">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <div className="price-div">
          <div className="price-now">$125.00</div>
          <div className="discount">50%</div>
          <del className="price-old">%250</del>
        </div>

        <div className="payment">
          <Counter quantity={quantity} setQuantity={setQuantity}/>
          <div className="button">
            <button onClick={()=> {setCart(Number(cart) + Number(quantity));setQuantity(0)}}>Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Prices;
