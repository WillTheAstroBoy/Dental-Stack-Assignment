import { useEffect, useState } from "react";
import { editProduct } from "../redux/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

interface Product {
  title: string;
  description: string;
  price: string;
  id: number;
}

const generateId = () => {
  return Math.round(Math.random() * 10000);
};

export default function EditProduct() {
  const [product, setProduct] = useState<Product>({
    title: "",
    description: "",
    price: "",
    id: 0
  });

  let { id } = useParams();

  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setProduct((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(editProduct(product));

    alert("Product updated");
  };

  useEffect(() => {
    if (products) {
      const filtered = products.filter((item: any) => item.id == id);
      console.log(filtered, "filtered <<===");
      if (filtered.length > 0) {
        setProduct(filtered[0]);
      }
    }
  }, [products]);

  console.log(product, "product <<<===");

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
