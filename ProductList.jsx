
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";

const plantCategories = [
  {
    category: "Air Purifying Plants",
    plants: [
      { id: 1, name: "Snake Plant", price: 15, image: "https://images.unsplash.com/photo-1593482892290-f54927ae2b75?w=400" },
      { id: 2, name: "Peace Lily", price: 18, image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=400" },
      { id: 3, name: "Spider Plant", price: 12, image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=400" },
      { id: 4, name: "Areca Palm", price: 22, image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78?w=400" },
      { id: 5, name: "Rubber Plant", price: 20, image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400" },
      { id: 6, name: "Boston Fern", price: 14, image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=400" },
    ],
  },
  {
    category: "Low Maintenance Plants",
    plants: [
      { id: 7, name: "ZZ Plant", price: 19, image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400" },
      { id: 8, name: "Jade Plant", price: 10, image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400" },
      { id: 9, name: "Aloe Vera", price: 11, image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400" },
      { id: 10, name: "Pothos", price: 13, image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=400" },
      { id: 11, name: "Chinese Evergreen", price: 17, image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400" },
      { id: 12, name: "Ponytail Palm", price: 21, image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78?w=400" },
    ],
  },
  {
    category: "Decorative Plants",
    plants: [
      { id: 13, name: "Monstera", price: 25, image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400" },
      { id: 14, name: "Calathea", price: 20, image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400" },
      { id: 15, name: "Fiddle Leaf Fig", price: 30, image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400" },
      { id: 16, name: "Bird of Paradise", price: 28, image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78?w=400" },
      { id: 17, name: "Philodendron", price: 16, image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=400" },
      { id: 18, name: "Anthurium", price: 24, image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400" },
    ],
  },
];

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [addedItems, setAddedItems] = useState([]);

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedItems((previous) =>
      previous.includes(plant.id)
        ? previous
        : [...previous, plant.id]
    );
  };

  return (
    <div className="shop-page">
      <nav className="navbar">
        <a href="/" className="brand">Paradise Nursery</a>
        <div className="nav-links">
          <a href="/">Home</a>
          <a href="#plants">Plants</a>
          <a href="/cart">Cart ({cartCount})</a>
        </div>
      </nav>

      <header className="shop-header" id="plants">
        <h1>Our Houseplants</h1>
        <p>Bring home a little piece of nature.</p>
      </header>

      {plantCategories.map((group) => (
        <section className="plant-category" key={group.category}>
          <h2>{group.category}</h2>
          <div className="plant-grid">
            {group.plants.map((plant) => (
              <article className="plant-card" key={plant.id}>
                <img
                  src={plant.image}
                  alt={plant.name}
                  className="plant-image"
                />
                <h3>{plant.name}</h3>
                <p className="plant-price">
                  ${plant.price.toFixed(2)}
                </p>
                <button
                  onClick={() => handleAddToCart(plant)}
                  disabled={addedItems.includes(plant.id)}
                >
                  {addedItems.includes(plant.id)
                    ? "Added to Cart"
                    : "Add to Cart"}
                </button>
              </article>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
