import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductList from "./components/Product/ProductList";
import CategoryFilter from "./components/Category/CategoryList";
import SortOptions from "./components/Sort/SortOptions";
import CartDrawer from "./components/CardDrawer/CartDrawer";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./stories/store";
import { setProducts } from "./stories/slices/productsSlice";
import "./App.css";

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  images: string;
  weight: number;
}

const App: React.FC = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products.items);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:3001/products").then((response) => {
      dispatch(setProducts(response.data));
      setFilteredProducts(response.data);
    });
  }, [dispatch]);

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
    setIsCartOpen(true);
  };

  const removeFromCart = (id: number) => {
    setCart(cart.filter((product) => product.id !== id));
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  const filterByCategory = (category: string) => {
    if (category === "All") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((product) => product.category === category)
      );
    }
  };

  const filterByPriceRange = (min: number, max: number) => {
    setFilteredProducts(
      products.filter((product) => product.price >= min && product.price <= max)
    );
  };

  const sortByPrice = (order: "asc" | "desc") => {
    const sortedProducts = [...filteredProducts].sort((a, b) => {
      return order === "asc" ? a.price - b.price : b.price - a.price;
    });
    setFilteredProducts(sortedProducts);
  };

  const sortByPopularity = () => {
    const sortedProducts = [...filteredProducts].sort(
      (a, b) => b.weight - a.weight
    );
    setFilteredProducts(sortedProducts);
  };

  const totalPrice = cart.reduce((total, product) => total + product.price, 0);

  return (
    <div>
      <header className="header">
        <img
          src={require("./assets/images/logo.png")}
          alt="Logo"
          className="logo"
        />
        <h1>E-Commerce Catalog</h1>
      </header>

      <div className="main-content">
        <div className="sidebar">
          <CategoryFilter
            filterByCategory={filterByCategory}
            filterByPriceRange={filterByPriceRange}
          />
        </div>
        <div className="product-section">
          <SortOptions
            sortByPrice={sortByPrice}
            sortByPopularity={sortByPopularity}
          />
          <div className="product-grid">
            <ProductList products={filteredProducts} addToCart={addToCart} />
          </div>
        </div>
      </div>
      {cart.length > 0 && (
        <CartDrawer
          cart={cart}
          isOpen={isCartOpen}
          closeCart={closeCart}
          removeFromCart={removeFromCart}
          totalPrice={totalPrice}
        />
      )}
    </div>
  );
};

export default App;
