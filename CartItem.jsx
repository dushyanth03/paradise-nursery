
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeItem,
  updateQuantity,
} from "./CartSlice";

export default function CartItem() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const changeQuantity = (item, quantity) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity,
      })
    );
  };

  return (
    <div className="cart-page">
      <nav className="navbar">
        <a href="/" className="brand">Paradise Nursery</a>
        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/plants">Plants</a>
          <a href="/cart">Cart ({totalItems})</a>
        </div>
      </nav>

      <main className="cart-container">
        <h1>Your Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <h2>Your cart is empty 🌱</h2>
            <p>Discover our beautiful collection of houseplants.</p>
            <a href="/plants" className="continue-button">
              Continue Shopping
            </a>
          </div>
        ) : (
          <>
            <div className="cart-list">
              {cartItems.map((item) => (
                <article className="cart-item" key={item.id}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-image"
                  />

                  <div className="cart-item-details">
                    <h2>{item.name}</h2>
                    <p>Unit price: ${item.price.toFixed(2)}</p>
                    <p>
                      Subtotal: $
                      {(item.price * item.quantity).toFixed(2)}
                    </p>

                    <div className="quantity-controls">
                      <button
                        onClick={() =>
                          changeQuantity(item, item.quantity - 1)
                        }
                        aria-label={`Decrease ${item.name} quantity`}
                      >
                        −
                      </button>

                      <span>{item.quantity}</span>

                      <button
                        onClick={() =>
                          changeQuantity(item, item.quantity + 1)
                        }
                        aria-label={`Increase ${item.name} quantity`}
                      >
                        +
                      </button>
                    </div>

                    <button
                      className="delete-button"
                      onClick={() => dispatch(removeItem(item.id))}
                    >
                      Delete
                    </button>
                  </div>
                </article>
              ))}
            </div>

            <section className="cart-summary">
              <h2>Order Summary</h2>
              <p>Total items: {totalItems}</p>
              <h3>Total amount: ${totalAmount.toFixed(2)}</h3>

              <button
                className="checkout-button"
                onClick={() => alert("Checkout Coming Soon!")}
              >
                Checkout
              </button>

              <a href="/plants" className="continue-button">
                Continue Shopping
              </a>
            </section>
          </>
        )}
      </main>
    </div>
  );
}
