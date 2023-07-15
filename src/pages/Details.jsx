import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Card from "../components/Card";

function Details() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  // API Start
  const category_products = async () => {
    await axios
      .get("https://api.escuelajs.co/api/v1/products/?categoryId=" + id)
      .then((response) => setData(response.data));
  };
  useEffect(() => {
    category_products();
  }, []);
  // API End
  return (
    <>
      <h1>Products of a Category</h1>
      <h5>Here Category ID Is: {id}</h5>
      {data.map((product) => (
          <div className="container">
            <div className="row">
              <Card id={product.id} name={product.title} image={product.images} />    
            </div>
          </div>
      ))}
    </>
  );
}

export default Details;
