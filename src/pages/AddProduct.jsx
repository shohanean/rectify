import React, { useState, useEffect } from "react";
import axios from "axios";

const AddProduct = () => {
  const [categories, setcategories] = useState([]);
  const categoriesFromApi = async () => {
    await axios
      .get("https://api.escuelajs.co/api/v1/categories")
      .then((response) => setcategories(response.data));
  };
  useEffect(() => {
    categoriesFromApi();
  }, []);

  const [inputs, setInputs] = useState({
    title: "",
    price: "",
    description: "",
    categoryId: 1,
    images: ["https://fastly.picsum.photos/id/588/640/640.jpg"],
  });
  const handleChange = (event) => {
    setInputs({
      ...inputs,
      [event.target.name]: [event.target.value],
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("https://api.escuelajs.co/api/v1/products/", inputs)
      .then(function (response) {
        console.log(response);
      });
    alert("Product Added Successfully!");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="form-group col-4">
            <label>categoryId</label>
            <select
              name="categoryId"
              className="form-control"
              onChange={handleChange}
            >
              <option value="">-Select One Category-</option>
              {categories.map((category) => (
                <option value={category.id}>{category.name}</option>
              ))}

              <option value="2">Electronics</option>
              <option value="3">Furniture</option>
            </select>
          </div>
          <div className="form-group col-4">
            <label>Title</label>
            <input
              className="form-control"
              type="text"
              name="title"
              value={inputs.title}
              placeholder="Title"
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-4">
            <label>Price</label>
            <input
              className="form-control"
              type="number"
              name="price"
              value={inputs.price}
              placeholder="Price"
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-12">
            <label>Description</label>
            <textarea
              className="form-control"
              rows="2"
              name="description"
              placeholder="Description Here"
              onChange={handleChange}
              value={inputs.description}
            ></textarea>
          </div>
          <div className="form-group col-4">
            <label>&nbsp;</label>
            <button className="form-control btn btn-info" type="submit">
              Add New Product
            </button>
          </div>
        </div>
      </form>
      <div className="card mt-4">
        <div className="card-header">Output</div>
        <div className="card-body">
          <p>Product Name: {inputs.productName}</p>
          <p>Product Price: {inputs.productPrice}</p>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
