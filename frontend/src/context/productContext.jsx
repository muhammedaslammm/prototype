import { createContext, useEffect, useState } from "react";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:4000/products", {
          method: "GET",
        });
        const data = await response.json();
        if (!response.ok) throw new Error(data.message);
        else {
          setProducts(data.products);
        }
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchProducts();
  }, []);

  const addProduct = async (formData) => {
    try {
      const response = await fetch("http://localhost:4000/products", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error);
      else {
        setProducts((prevProducts) => {
          const newProducts = [...prevProducts, data.product];
          return newProducts;
        });
        return data;
      }
    } catch (error) {
      return { message: error.message };
    }
  };

  const value = { products, addProduct, currency: "₹" };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };
