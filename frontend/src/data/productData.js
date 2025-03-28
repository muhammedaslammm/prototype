const productData = [
  {
    name: "NutriChoice Digestive",
    category: "Bakery & Biscuites",
    image:
      "https://freshcart-next-js.vercel.app/images/products/product-img-2.jpg",
    offer: null,
    stock_detials: [
      { unit_type: "200g", price: 199, quantity: 50 },
      { unit_type: "500g", price: 550, quantity: 50 },
      { unit_type: "1kg", price: 1100, quantity: 100 },
    ],
    ratings: 4.8,
  },
  {
    name: "Kellogg's Original Cereals",
    category: "Instand Food",
    image:
      "https://freshcart-next-js.vercel.app/images/products/product-img-8.jpg",
    stock_detials: [
      { unit_type: "20g", price: 25, quantity: 50 },
      { unit_type: "50g", price: 59, quantity: 50 },
      { unit_type: "120kg", price: 159, quantity: 100 },
    ],
    ratings: 4.8,
  },
  {
    name: "Cadbury 5 Star Chocolate",
    category: "Bakery & Biscuites",
    image:
      "https://freshcart-next-js.vercel.app/images/products/product-img-3.jpg",
    offer: null,
    stock_detials: [
      { unit_type: "200g", price: 99, quantity: 50 },
      { unit_type: "500g", price: 199, quantity: 50 },
      { unit_type: "1kg", price: 399, quantity: 100 },
    ],
    ratings: 4.9,
  },
  {
    name: "Blueberry Greek Yogurt",
    category: "Dairy, Bread & Eggs",
    image:
      "https://freshcart-next-js.vercel.app/images/products/product-img-6.jpg",
    offer: null,
    stock_detials: [
      { unit_type: "50g", price: 89, quantity: 50 },
      { unit_type: "100g", price: 199, quantity: 50 },
      { unit_type: "500kg", price: 499, quantity: 100 },
    ],
    ratings: 4.7,
  },
  {
    name: "Salted Instant Popcorn",
    category: "Instant Food",
    image:
      "https://freshcart-next-js.vercel.app/images/products/product-img-5.jpg",
    stock_detials: [
      { unit_type: "20g", price: 25, quantity: 50 },
      { unit_type: "50g", price: 59, quantity: 50 },
      { unit_type: "120kg", price: 159, quantity: 100 },
    ],
    ratings: 4.3,
  },
  {
    name: "Kellogg's Original Cereals",
    category: "Instand Food",
    image:
      "https://freshcart-next-js.vercel.app/images/products/product-img-8.jpg",
    stock_detials: [
      { unit_type: "20g", price: 25, quantity: 50 },
      { unit_type: "50g", price: 59, quantity: 50 },
      { unit_type: "120kg", price: 159, quantity: 100 },
    ],
    ratings: 4.8,
  },
  {
    name: "Britannia Cheese Slices",
    category: "Diary, Bread & Eggs",
    image:
      "https://freshcart-next-js.vercel.app/images/products/product-img-7.jpg",
    stock_detials: [
      { unit_type: "20g", price: 59, quantity: 50 },
      { unit_type: "50g", price: 119, quantity: 50 },
      { unit_type: "100g", price: 209, quantity: 100 },
    ],
    ratings: 4.5,
  },
  {
    name: "Kellogg's Original Cereals",
    category: "Instand Food",
    image:
      "https://freshcart-next-js.vercel.app/images/products/product-img-8.jpg",
    stock_detials: [
      { unit_type: "20g", price: 25, quantity: 50 },
      { unit_type: "50g", price: 59, quantity: 50 },
      { unit_type: "120kg", price: 159, quantity: 100 },
    ],
    ratings: 4.8,
  },
  {
    name: "Cadbury 5 Star Chocolate",
    category: "Bakery & Biscuites",
    image:
      "https://freshcart-next-js.vercel.app/images/products/product-img-3.jpg",
    offer: null,
    stock_detials: [
      { unit_type: "200g", price: 99, quantity: 50 },
      { unit_type: "500g", price: 199, quantity: 50 },
      { unit_type: "1kg", price: 399, quantity: 100 },
    ],
    ratings: 4.9,
  },
  {
    name: "Blueberry Greek Yogurt",
    category: "Dairy, Bread & Eggs",
    image:
      "https://freshcart-next-js.vercel.app/images/products/product-img-6.jpg",
    offer: null,
    stock_detials: [
      { unit_type: "50g", price: 89, quantity: 50 },
      { unit_type: "100g", price: 199, quantity: 50 },
      { unit_type: "500kg", price: 499, quantity: 100 },
    ],
    ratings: 4.7,
  },
  {
    name: "Haldiram's Sev Bhujia",
    category: "Snack & Munchies",
    image:
      "https://freshcart-next-js.vercel.app/images/products/product-img-1.jpg",
    stock_detials: [
      { unit_type: "100g", price: 149, quantity: 50 },
      { unit_type: "250g", price: 289, quantity: 50 },
      { unit_type: "500g", price: 550, quantity: 100 },
    ],
    ratings: 4.2,
  },
  {
    name: "Slurrp Millet Chocolate",
    category: "Snack & Munchies",
    image:
      "https://freshcart-next-js.vercel.app/images/products/product-img-9.jpg",
    stock_detials: [
      { unit_type: "100g", price: 149, quantity: 50 },
      { unit_type: "250g", price: 289, quantity: 50 },
      { unit_type: "500g", price: 550, quantity: 100 },
    ],
    ratings: 4.9,
  },
  {
    name: "Cadbury 5 Star Chocolate",
    category: "Bakery & Biscuites",
    image:
      "https://freshcart-next-js.vercel.app/images/products/product-img-3.jpg",
    offer: null,
    stock_detials: [
      { unit_type: "200g", price: 99, quantity: 50 },
      { unit_type: "500g", price: 199, quantity: 50 },
      { unit_type: "1kg", price: 399, quantity: 100 },
    ],
    ratings: 4.9,
  },
  {
    name: "Blueberry Greek Yogurt",
    category: "Dairy, Bread & Eggs",
    image:
      "https://freshcart-next-js.vercel.app/images/products/product-img-6.jpg",
    offer: null,
    stock_detials: [
      { unit_type: "50g", price: 89, quantity: 50 },
      { unit_type: "100g", price: 199, quantity: 50 },
      { unit_type: "500kg", price: 499, quantity: 100 },
    ],
    ratings: 4.7,
  },
];

export default productData;
