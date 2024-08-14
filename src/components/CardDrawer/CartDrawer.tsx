import React, { useState, useRef } from "react";
import "./CartDrawer.css";

interface Product {
  id: number;
  title: string;
  price: number;
  images: string;
}

interface CartDrawerProps {
  cart: Product[];
  isOpen: boolean;
  closeCart: () => void;
  removeFromCart: (id: number) => void;
  totalPrice: number;
}

const CartDrawer: React.FC<CartDrawerProps> = ({
  cart,
  isOpen,
  closeCart,
  removeFromCart,
  totalPrice,
}) => {
  const [translateX, setTranslateX] = useState(0);
  const isDragging = useRef(false);

  const handleTouchStart = (e: React.TouchEvent) => {
    isDragging.current = true;
    setTranslateX(0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging.current) {
      const touch = e.touches[0];
      const newX = touch.clientX;
      setTranslateX(newX > 0 ? newX : 0);
    }
  };

  const handleTouchEnd = () => {
    if (translateX > 100) {
      closeCart();
    }
    setTranslateX(0);
    isDragging.current = false;
  };

  return (
    <div
      className={`cart-drawer ${isOpen ? "open" : ""}`}
      style={{ transform: `translateX(${isOpen ? 0 : 100}%)` }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <button onClick={closeCart} className="close-button">
        Close
      </button>
      <h2>Your Cart</h2>
      <ul>
        {cart.map((product) => (
          <li key={product.id}>
            <img src={product.images} alt={product.title} />
            <div>
              <h4>{product.title}</h4>
              <p>${product.price}</p>
              <button onClick={() => removeFromCart(product.id)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
      <div className="total">
        <h3>Total Price: ${totalPrice}</h3>
      </div>
    </div>
  );
};

export default CartDrawer;
