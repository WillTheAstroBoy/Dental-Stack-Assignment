import "./styles.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Homepage, AddProduct, EditProduct } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />
  },
  {
    path: "/add-product",
    element: <AddProduct />
  },
  {
    path: "/edit-product/:id",
    element: <EditProduct />
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}
