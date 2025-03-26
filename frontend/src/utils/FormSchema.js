import * as yup from "yup";

const formValidation = yup.object({
  images: yup
    .array()
    .min(1, "atleast one image required")
    .required("atleast one image required"),
  product_name: yup.string().required("product name required"),
  brand: yup.string().required("brand name required"),
  price: yup
    .number()
    .typeError("enter valid input")
    .required("product price required"),
  description: yup.string().required("description required"),
});

export default formValidation;
