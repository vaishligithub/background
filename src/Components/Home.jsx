import React from "react";
import { useState, useEffect } from "react";
import Card from "./card";
import axios from "axios";

const Home = () => {
  const[data,setData]=useState([])
  
  const fetchApi = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setData(response.data));
    // console.log(data);
  };
  // console.log("haa");
  // console.log(cart,"cart")
  useEffect(() => {
    fetchApi();
  }, []);
  
  return (
    <>
       <div className="container">
      <div className="row">
        {data.map((product) => (
          <div className="col-md-4" key={product.id}>
            <Card prod={product} />
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Home;
