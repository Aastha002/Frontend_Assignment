import React, { useState } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div>
      <Header />
      <ProductList onSelectProduct={setSelectedProduct} />
      <ProductDetail product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </div>
  );
}

export default App;
