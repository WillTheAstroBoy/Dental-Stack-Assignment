import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addProducts, deleteProduct } from "../redux/productsSlice";

export default function Homepage() {
  const [loading, setLoading] = useState<Boolean>(true);
  const products = useSelector((state) => state.products);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(products, "products <<<===");

  const handleClick = (id: string, shouldDelete: boolean) => {
    if (shouldDelete) {
      dispatch(deleteProduct(id));
    } else {
      navigate("/edit-product/" + id);
    }
  };

  useState(() => {
    (async () => {
      try {
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();
        // console.log(data, "data <<<====");
        if (products.length === 0) dispatch(addProducts(data.products));
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return loading ? (
    <p>Loading....</p>
  ) : (
    <div>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <p>Products list</p>
        <Link to="/add-product">Add Product</Link>
      </div>
      <table>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Description</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
        {products.map((product) => (
          <tr key={"row-" + product.id}>
            <td>{product.id}</td>
            <td>{product.title}</td>
            <td>{product.description}</td>
            <td>{product.price}</td>
            <td>
              <button onClick={() => handleClick(product.id, false)}>
                Edit
              </button>
              <button onClick={() => handleClick(product.id, true)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
