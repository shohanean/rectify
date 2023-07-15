import React, { useState } from "react";

const AddProduct = () => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Product Name: " + productName);
    alert("Product Name: " + productPrice);
    setProductName("");
    setProductPrice("");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Product Name</label>
        <input
          type="text"
          value={productName}
          placeholder="Product Name"
          onChange={(event) => setProductName(event.target.value)}
        />
        <label>Product Price</label>
        <input
          type="number"
          value={productPrice}
          placeholder="Product Price"
          onChange={(event) => setProductPrice(event.target.value)}
        />
        <button type="submit">Add New Product</button>
      </form>
    </>
  );
};

export default AddProduct;
