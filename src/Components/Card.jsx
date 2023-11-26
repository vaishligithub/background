import React, { useContext } from "react";
import { Rapid } from "./Context";

const Card = ({ prod }) => {
  const{ cart,setCart}= useContext(Rapid)
  //  const {image,title,price}= props
  // const{prod,cart,setCart}=props

  // console.log(prod, "props");

  // console.log(cart);
  return (
    <div>
      <div className="card my-3 " style={{ width: "18rem" }}>
        <img src={prod.image} className="c  ard-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{prod.title}</h5>
          <p className="card-text">{prod.price}.</p>
          {cart.includes(prod) ? (
            (
              <button
                onClick={() => setCart(cart.filter((c) => c.id !== prod.id))}
              >
                {" "}
                <a href="#" className="btn btn-primary">
                  Remove to Cart
                </a>
              </button>
            )
          ) : (
            <button onClick={() => setCart([...cart, prod])}>
              {" "}
              <a href="#" className="btn btn-primary">
                Add to Cart
              </a>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default Card;
