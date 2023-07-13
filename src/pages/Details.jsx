import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
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
      <h1>Details</h1>
      <h5>ID Is: {id}</h5>
      {data.map((product) => (
        <>
          <p>
            {product.title}
            <img width={50} src={product.images} alt="" />
            <span className="badge bg-success">{product.price}</span>
          </p>
        </>
      ))}
    </>
  );
}

export default Details;
