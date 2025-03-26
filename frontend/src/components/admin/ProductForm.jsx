import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ImagePreviews from "./ImagePreviews.jsx";
import formValidation from "../../utils/FormSchema.js";
import { ProductContext } from "../../context/productContext.jsx";

const ProductForm = ({ open, close }) => {
  const [previews, setPreviews] = useState(Array(5).fill(null));
  const [imageObjects, setImageObjects] = useState(Array(5).fill(null));
  const { addProduct } = useContext(ProductContext);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    setError,
    setValue,
  } = useForm({ resolver: yupResolver(formValidation) });

  useEffect(() => {
    setValue("images", imageObjects.filter(Boolean));
  }, [imageObjects, setValue]);

  const handleFileChange = (event, index) => {
    const file = event.target.files[0];
    if (file) {
      const newPreviews = [...previews];
      newPreviews[index] = URL.createObjectURL(file);
      setPreviews(newPreviews);
      setImageObjects((prevObjs) => {
        const newPrevObjects = [...prevObjs];
        newPrevObjects[index] = file;
        return newPrevObjects;
      });
    }
  };
  const clearStoredData = () => {
    const newContent = Array(5).fill(null);
    setPreviews(newContent);
    setImageObjects(newContent);
  };
  const onSubmit = async (data) => {
    if (!imageObjects.length) {
      setError("images", {
        type: "manual",
        message: "At least one image required",
      });
      return;
    }
    console.log("form data : ", data);

    const formData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
      if (key === "images") {
        value.forEach((file) => formData.append("images", file));
      } else formData.append(key, value);
    });

    // send product to backend.
    const response = await addProduct(formData);
    if (response.success) {
      clearStoredData();
      reset();
      close();
      console.log(response.message);
    } else {
      console.log(response.message);
    }
  };

  if (!open) return null;
  return (
    <>
      <div className="overlay fixed top-0 bottom-0 left-0 right-0 bg-black/40"></div>
      <form
        className="form fixed w-[50rem] top-[15%] left-[50%] translate-x-[-50%] bg-white rounded-[.5rem] py-[2rem] px-[2.5rem] flex gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <ImagePreviews
          previews={previews}
          handleChange={handleFileChange}
          errors={errors}
        />
        <div className="right w-6/12 flex flex-col gap-[1.3rem]">
          <div className="name relative">
            <input
              type="text"
              placeholder="product name"
              className="input--form"
              {...register("product_name")}
            />
            {errors.product_name && (
              <p className="error--form">{errors.product_name.message}</p>
            )}
          </div>
          <div className="brand_and_price flex gap-[1rem]">
            <div className="brand w-[50%] relative">
              <input
                type="text"
                placeholder="brand"
                className="input--form"
                {...register("brand")}
              />
              {errors.brand && (
                <p className="error--form">{errors.brand.message}</p>
              )}
            </div>
            <div className="price w-[50%] relative">
              <input
                type="number"
                placeholder="price"
                className="input--form"
                {...register("price")}
              />
              {errors.price && (
                <p className="error--form">{errors.price.message}</p>
              )}
            </div>
          </div>
          <div className="description relative">
            <textarea
              name="description"
              id=""
              placeholder="add product description here..."
              className="input--form"
              {...register("description")}
            ></textarea>
            {errors.description && (
              <p className="error--form">{errors.description.message}</p>
            )}
          </div>
          <div className="buttons flex justify-end gap-4 mt-[1rem] ">
            <button
              onClick={() => {
                clearStoredData();
                reset();
                close();
              }}
              className="button--form text-neutral-900 border-neutral-900"
            >
              close
            </button>
            <button className="button--form bg-neutral-900 text-white border-neutral-900">
              submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default ProductForm;
