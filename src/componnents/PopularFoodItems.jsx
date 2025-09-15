// PopularFoodItems.jsx
import React from "react";
import'./PopularFoodItems.css'



const foodItems = [
  {
    name: "Buff mo:mo",
    description: "Steamed dumplings with Spicy Tomato Achar.",
  
    price: "Rs. 150",
    rating: 5,
    image:
      "https://i.imgur.com/ZjSqKXp.jpg",
  },
  {
    name: "Chicken Biryani",
    description: "Aromatic basmati rice with spiced chicken.",
       price: "Rs. 350",
    rating: 4,
    image:
      "chiken biryani.webp",
  },
  {
    name: " Cheese Pizza (Medium)",
    description: "Freshly baked pizza topped with cheese and veggies.",
  
    price: "Rs. 500",
    rating: 4,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/320px-Eq_it-na_pizza-margherita_sep2005_sml.jpg",
  },
];

export default function PopularFoodItems() {
  return (
    <section className="food-section">
      {/* New h1 heading */}
      <h1 className="main-heading">Popular Dish Items</h1>

      
      <div className="food-grid">
        {foodItems.map((item, index) => (
          <div key={index} className="food-card">
            <img src={item.image} alt={item.name} className="food-image" />
            <h3 className="food-name">{item.name}</h3>
            <p className="food-description">{item.description}</p>
            <p className="food-products">{item.products}</p>
            <p className="food-price">{item.price}</p>
            <div className="food-rating">
              {Array.from({ length: 5 }).map((_, i) => (
                <span
                  key={i}
                  className={i < item.rating ? "star filled" : "star"}
                >
                  ★
                </span>
              ))}
            </div>
            {/* ✅ Order now button */}
            <button className="order-btn">Add to Cart 🛒</button>
          </div>
        ))}
      </div>
    </section>
  );
}