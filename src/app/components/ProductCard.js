import React from "react";

function ProductCard() {
  return (
    <div className="bg-gray-100 rounded-xl p-5 text-center hover:bg-white hover:shadow-xl hover:shadow-gray-100 transition-all duration-200">
      <div className="">
        <img src={"/pizza.png"} alt="prod-image" className="max-h-32 mx-auto" />
      </div>
      <h1 className="text-lg font-medium">Pepparoni Pizza</h1>
      <p className="text-sm text-gray-600">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere quis
        est,
      </p>
      <button className="kButton mt-5 w-full">Add to Cart ₹ 199.00</button>
    </div>
  );
}

export default ProductCard;
