const Products = () => {
  const products = [];

  return (
    <div className="admin__products border border-gray-400 rounded-[.5rem] w-12/12 px-[1.5rem] flex flex-col grow-[2]">
      <div className="header__top flex justify-between items-center border-b border-gray-400/90 py-[.7rem]">
        <h1 className="capitalize text-[1.2rem] font-medium">
          products section
        </h1>
        <button className="bg-neutral-800 text-white text-[0.9rem] px-[.5rem] py-[.2rem] capitalize rounded-[.1rem] cursor-pointer">
          add product
        </button>
      </div>

      {products.length ? (
        <></>
      ) : (
        <div className="mt-[1rem]">
          <p className="text-[1.5rem] font-medium capitalize text-gray-500">
            no products added so far
          </p>
        </div>
      )}
    </div>
  );
};

export default Products;
