import React from "react";

interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  category: string;
}

interface CartProps {
  cart: Product[];
}

const Cart: React.FC<CartProps> = ({ cart }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((item, index) => {
          return (
            <li key={index}>
              {item.title} - ${item.price} -{" "}
              <img
                className="profile-photo"
                src={item.image}
                alt={"Carlie Anglemire"}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Cart;
