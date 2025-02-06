import React from "react";

const ProductDetail = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg">
        <button onClick={onClose} className="float-right text-red-500">X</button>
        <img src={product.image} alt={product.name} className="w-64 h-64 object-cover" />
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <p>{product.description}</p>
        <p className="text-gray-500">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
