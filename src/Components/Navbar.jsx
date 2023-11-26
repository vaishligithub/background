import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Rapid } from './Context';

const Navbar = () => {
  const {cart,setCart}=useContext(Rapid)
  return (
    <div>
      <nav className="navbar bg-dark">
        <div className="container-fluid justify-content-start">
          <Link to="/">
            <button className="btn btn-outline-success me-2 text-white" type="button">Main button</button>
          </Link>
          <Link to="cart">
          <span></span>
            <button className="btn btn-sm btn-outline-secondary text-white" type="button">Smaller button {cart.length} </button>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

