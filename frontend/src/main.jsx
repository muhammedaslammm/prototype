import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Application from "./Application.jsx";
import AdminApp from "./adminApp.jsx";
import Products from "./components/admin/Products.jsx";
import { ProductProvider } from "./context/productContext.jsx";

const router = createBrowserRouter([
  { path: "/", element: <Application /> },
  {
    path: "/admin",
    element: <AdminApp />,
    children: [
      { index: true, element: <Navigate to="products" /> },
      { path: "products", element: <Products /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProductProvider>
      <RouterProvider router={router} />
    </ProductProvider>
  </StrictMode>
);
