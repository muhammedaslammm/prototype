import { useContext, useState } from "react";
import { ProductContext } from "../../context/productContext";
import NotFound from "./NotFound";
import ProductForm from "./ProductForm";
import ProductTable from "./ProductTable";

const Products = () => {
  const { products } = useContext(ProductContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="admin__products border border-gray-400 rounded-[.5rem] w-12/12 px-[1.5rem] flex flex-col grow-[2]">
      <div className="header__top flex justify-between items-center border-b border-gray-400/90 py-[.7rem]">
        <h1 className="capitalize text-[1.2rem] font-medium">
          products section
        </h1>
        <button
          className="bg-neutral-800 text-white text-[0.9rem] px-[.5rem] py-[.2rem] capitalize rounded-[.1rem] cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          add product
        </button>
        <ProductForm open={isOpen} close={() => setIsOpen(false)} />
      </div>

      {products.length ? (
        <ProductTable products={products} />
      ) : (
        <div>
          <NotFound text={"Products are not added yet in the application..."} />
        </div>
      )}
    </div>
  );
};

export default Products;
