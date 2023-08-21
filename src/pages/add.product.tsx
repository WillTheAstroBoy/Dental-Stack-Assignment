import { useState } from "react";
import { updateProducts } from "../redux/productsSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

interface Product {
  title: string;
  description: string;
  price: string;
}

const generateId = () => {
  return Math.round(Math.random() * 10000);
};

export default function AddProduct() {
  const [product, setProduct] = useState<Product>({
    title: "",
    description: "",
    price: ""
  });

  const dispatch = useDispatch();

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setProduct((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(updateProducts({ ...product, id: generateId() }));
    setProduct({
      title: "",
      description: "",
      price: ""
    });
    alert("Product Added");
  };

  return (
    <>
      <Link to="/">Hompage</Link>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit}
      >
        <h1>Add Product</h1>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Enter Title"
          value={product.title}
          name="title"
          required
        />
        <input
          onChange={handleChange}
          type="text"
          placeholder="Enter Description"
          value={product.description}
          name="description"
          required
        />
        <input
          onChange={handleChange}
          type="text"
          placeholder="Enter Price"
          value={product.price}
          name="price"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
