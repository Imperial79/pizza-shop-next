import React from "react";

function ProductCard() {
  return (
    <div className="bg-gray-100 rounded-xl p-5 text-center hover:bg-white hover:shadow-xl hover:shadow-gray-100 transition-all duration-200">
      <img
        src={
          "https://png.pngtree.com/png-clipart/20230928/original/pngtree-pepperoni-pizza-isolated-with-clipping-path-png-image_13007895.png"
        }
        content="fill"
        alt="prod-image"
      />
      <h1 className="text-lg font-medium">Pepparoni Pizza</h1>
      <h1 className="text-sm text-gray-600">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere quis
        est,
      </h1>

      {/* <Kbutton /> */}
    </div>
  );
}

export default ProductCard;
