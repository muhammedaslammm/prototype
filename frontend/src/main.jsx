import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import ClientApp from "./client/ClientApp.jsx";
import AdminApp from "./admin/AdminApp.jsx";
import Products from "./admin/pages/Products.jsx";
import Body from "./client/components/Body.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ClientApp />,
    children: [
      { index: true, element: <Navigate to="home" /> },
      { path: "home", element: <Body /> },
    ],
  },
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
    <RouterProvider router={router} />
  </StrictMode>
);
