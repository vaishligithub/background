import React, { useState, useEffect,useContext } from 'react';
import Card from './card';
import { Rapid } from './Context';

function Cart() {
  const [total, setTotal] = useState(0);
  const{ cart,setCart}= useContext(Rapid)
  console.log(cart,"cart")

  useEffect(() => {
    const totalPrice = cart.reduce((acc, curr) => acc + Number(curr.price), 0);
    setTotal(totalPrice);
  }, [cart]);

  return (
    <div>
      <h2>Total price</h2>
      <h1>Rs. {total}</h1> 
      <div className="container">
        <div className="row">
          {cart.map((prod) => (
            <div className="col-md-4" key={prod.id}>
              <Card prod={prod}  />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cart;





