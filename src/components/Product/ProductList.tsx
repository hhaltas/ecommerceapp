import React from "react";
import "./ProductList.css"; // CSS dosyasını import etmeyi unutmayın

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  images: string;
  weight: number;
}

interface ProductListProps {
  products: Product[];
  addToCart: (product: Product) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, addToCart }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img
            src={product.images}
            alt={product.title}
            className="product-image"
          />
          <h3>{product.title}</h3>
          <p>
            {product.description.slice(0, 60)}
            {product.description.length > 60 ? "..." : ""}
          </p>
          <div className="product-footer">
            <div className="product-price">${product.price}</div>
            <button
              className="product-add-to-cart"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
