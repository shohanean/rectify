import React, { useState } from "react";

const AddProduct = () => {
  const [inputs, setInputs] = useState({
    productName: "",
    productPrice: "",
  });
  const handleChange = (event) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Product Name: " + inputs.productName);
    alert("Product Price: " + inputs.productPrice);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Product Name</label>
        <input
          type="text"
          name="productName"
          value={inputs.productName}
          placeholder="Product Name"
          onChange={handleChange}
        />
        <label>Product Price</label>
        <input
          type="number"
          name="productPrice"
          value={inputs.productPrice}
          placeholder="Product Price"
          onChange={handleChange}
        />
        <button type="submit">Add New Product</button>
      </form>
      <p>Product Name: {inputs.productName}</p>
      <p>Product Price: {inputs.productPrice}</p>
    </>
  );
};

export default AddProduct;
