import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);

        // Set unique categories for filter dropdown
        const uniqueCategories = [
          ...new Set(data.map((product) => product.category)),
        ];
        setCategories(uniqueCategories);
      })
      .catch((error) => console.error("Error loading products:", error));
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    filterProducts(category, searchQuery, sortOrder);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    filterProducts(selectedCategory, event.target.value, sortOrder);
  };

  const handleSortChange = (event) => {
    const order = event.target.value;
    setSortOrder(order);
    filterProducts(selectedCategory, searchQuery, order);
  };

  const filterProducts = (category, query, order) => {
    let filtered = products;

    if (category) {
      filtered = filtered.filter((product) => product.category === category);
    }

    if (query) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
    }

    // Sorting by price
    filtered = filtered.sort((a, b) =>
      order === "asc" ? a.price - b.price : b.price - a.price
    );

    setFilteredProducts(filtered);
  };

  // Add to Cart function
  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Store cart in localStorage
  };

  return (
    <div className="container mx-auto py-10 px-4">
      {/* Header Section */}
      <header className="flex justify-between items-center mb-8">
        <div className="text-2xl font-bold">My Store</div>
        <div className="space-x-4">
          <button>Home</button>
          <button>About</button>
          <div className="dropdown inline-block">
            <button className="dropdown-toggle">Categories</button>
            <div className="dropdown-menu">
              <button onClick={() => handleCategoryChange("")}>All</button>
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => handleCategoryChange(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Filter and Search */}
      <div className="flex justify-center mb-6 space-x-4">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="border p-2 rounded"
        />
        <select
          value={sortOrder}
          onChange={handleSortChange}
          className="border p-2 rounded"
        >
          <option value="asc">Sort by price (asc)</option>
          <option value="desc">Sort by price (desc)</option>
        </select>
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart} // Pass addToCart function as a prop
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
