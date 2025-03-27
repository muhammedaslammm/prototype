import { useContext } from "react";
import { ProductContext } from "../../context/productContext";

const ProductTable = ({ products }) => {
  const { currency } = useContext(ProductContext);
  return (
    <div className="table border border-gray-400 my-4 px-4 rounded-[.3rem]">
      <table className="w-full rounded-[.5rem] ">
        <thead>
          <tr className="border-b border-gray-400">
            <th className="py-[.8rem] pl-[.5rem] text-start capitalize font-medium text-[1.05rem]">
              sl:no
            </th>
            <th className="py-[.8rem] pl-[.5rem] text-start capitalize font-medium text-[1.05rem]">
              name
            </th>
            <th className="py-[.8rem] pl-[.5rem] text-start capitalize font-medium text-[1.05rem]">
              brand
            </th>
            <th className="py-[.8rem] pl-[.5rem] text-start capitalize font-medium text-[1.05rem]">{`price (${currency})`}</th>
            <th className="py-[.8rem] pl-[.5rem] text-start capitalize font-medium text-[1.05rem]">
              image
            </th>
            <th className="py-[.8rem] pl-[.5rem] text-start capitalize font-medium text-[1.05rem]">
              options
            </th>
          </tr>
        </thead>
        {products.map((product, index) => {
          return (
            <tr className="border-b border-gray-300 last:border-0">
              <td className="py-[.8rem] pl-[.5rem] text-[1.05rem] ">{index}</td>
              <td className="py-[.8rem] pl-[.5rem] text-[1.05rem]">
                {product.product_name}
              </td>
              <td className="py-[.8rem] pl-[.5rem] text-[1.05rem]">
                {product.brand}
              </td>
              <td className="py-[.8rem] pl-[.5rem] text-[1.05rem]">
                {product.price}
              </td>
              <td className="py-[.8rem] pl-[.5rem]">
                <img
                  src={product.images[0]}
                  className="w-[5rem] h-[5rem] object-cover border-dashed border-2 border-gray-400"
                />
              </td>
              <td className="py-[.8rem] pl-[.5rem]">
                <button>delete</button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default ProductTable;
