import { useRef, useState } from "react";

const ImagePreviews = ({ previews, handleChange, errors }) => {
  const inputRefs = Array(5)
    .fill(null)
    .map((refs) => useRef(null));

  return (
    <div className="relative">
      <div className="form__left w-6/12 grid grid-cols-[repeat(3,6rem)] gap-4 h-[12rem] relative">
        {previews.map((preview, index) => {
          return (
            <div
              key={index}
              className="image_section w-full h-[6rem] border-2 border-dashed border-gray-500 flex justify-center items-center"
              onClick={() => {
                inputRefs[index].current.click();
              }}
            >
              {preview ? (
                <img
                  src={previews[index]}
                  alt=""
                  className="h-full w-full object-cover"
                />
              ) : (
                <i className="fa-solid fa-images text-gray-500 text-[3rem] p-4 cursor-pointer "></i>
              )}
              <input
                type="file"
                accept="image/*"
                ref={inputRefs[index]}
                className="hidden"
                onChange={(event) => handleChange(event, index)}
              />
            </div>
          );
        })}
      </div>
      {errors.images && (
        <p className="error--form bottom-4">{errors.images.message}</p>
      )}
    </div>
  );
};

export default ImagePreviews;
