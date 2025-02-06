import React, { useState, useEffect } from "react";

const ProductCard = ({ product, addToCart }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  // Check if the product is in the favorites list
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setIsFavorite(favorites.includes(product.id));
  }, [product.id]);

  // Handle adding/removing from favorites
  const handleFavorite = (productId) => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (!favorites.includes(productId)) {
      favorites.push(productId);
    } else {
      const updatedFavorites = favorites.filter((id) => id !== productId);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
    setIsFavorite(favorites.includes(productId));
  };

  return (
    <div className="group border rounded-lg shadow-lg cursor-pointer bg-white p-6 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
      {/* Image */}
      <div className="w-40 h-40 flex items-center justify-center overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          style={{ width: "150px", height: "150px", objectFit: "contain" }} // Inline styling
        />
      </div>

      {/* Product Details */}
      <div className="flex flex-col">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h2>
        <p className="text-gray-600 text-base mb-2">{product.description}</p>
        <p className="text-gray-500 text-sm mb-2">Category: {product.category}</p>

        {/* Favorite Button */}
        <button
          onClick={() => handleFavorite(product.id)}
          className={`text-lg ${isFavorite ? "text-red-500" : "text-gray-400"} ml-auto transition duration-200`}
        >
          {isFavorite ? "❤️" : "🤍"}
        </button>

        {/* Price and Add to Cart */}
        <div className="flex justify-between items-center mt-4">
          <span className="text-lg font-bold text-gray-900">${product.price}</span>
          <button
            onClick={() => addToCart(product)}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
