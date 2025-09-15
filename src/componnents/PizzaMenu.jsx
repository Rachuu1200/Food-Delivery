import React, { useState } from "react";
import "./PizzaMenu.css";

const pizzas = [
  {
    name: "Hawaiian Pizza",
    img: "hawalian.jfif",
    description:
      "Hawaiian Pizza is a tropical delight that combines the savory taste of ham with the sweet juiciness of pineapple chunks, all topped with perfectly melted mozzarella cheese. Each bite offers a balanced mix of sweet and savory flavors, making it an ideal choice for those who enjoy a refreshing twist on classic pizza. The crust is golden and slightly crisp, providing a sturdy base for the rich toppings.",
    prices: { S: 250, M: 300, L: 350 },
  },
  {
    name: "Sausage Pizza",
    img: "Sausage Pizza2.jfif",
    description:
      "Sausage Pizza brings the bold and hearty flavors of spicy Italian sausage paired with creamy mozzarella cheese atop a traditional tomato sauce. The blend of spices in the sausage, including fennel, paprika, and black pepper, adds a savory punch that meat lovers will appreciate. Its robust taste makes it a satisfying option for a fulfilling meal.",
    prices: { S: 200, M: 250, L: 300 },
  },
  {
    name: "Cheese BBQ Chicken Pizza",
    img: "Cheese BBQ Chicken Pizza2.jfif",
    description:
      "Cheese BBQ Chicken Pizza features tender grilled chicken and sweet onions layered on a smoky BBQ sauce base, finished with a generous amount of gooey mozzarella. The tangy and smoky sauce complements the mild chicken perfectly, creating a flavor profile that is both rich and satisfying.",
    prices: { S: 220, M: 280, L: 340 },
  },
  {
    name: "Cheese Pizza",
    img: "cheese pizza.jfif",
    description:
      "Cheese Pizza is a timeless favorite, featuring mozzarella cheese melted over a golden crust with fresh onions and bite-sized chicken pieces. Its simplicity allows the rich, cheesy flavor to shine, making it a go-to choice for classic pizza enthusiasts.",
    prices: { S: 180, M: 230, L: 280 },
  },
];

const PizzaMenu = () => {
  const [selectedPizza, setSelectedPizza] = useState(null);
  const [selectedSize, setSelectedSize] = useState("M");
  const [readMore, setReadMore] = useState(false);

  const toggleReadMore = () => setReadMore(!readMore);

  return (
    <div className="pizza-container">
      <h2 className="pizza-title">Our Pizza Menu</h2>

      {/* Circular Pizza Menu */}
      <div className="pizza-menu">
        {pizzas.map((pizza, idx) => (
          <div
            key={idx}
            className={`pizza-circle ${
              selectedPizza?.name === pizza.name ? "active" : ""
            }`}
            onClick={() => {
              setSelectedPizza(pizza);
              setSelectedSize("M");
              setReadMore(false);
            }}
          >
            <img src={pizza.img} alt={pizza.name} />
            <p>{pizza.name}</p>
          </div>
        ))}
      </div>

      {/* Selected Pizza Details */}
      {selectedPizza && (
        <div className="pizza-card">
          <img src={selectedPizza.img} alt={selectedPizza.name} />
          <h3>{selectedPizza.name}</h3>

          <p className="desc">
            {readMore
              ? selectedPizza.description
              : selectedPizza.description.slice(0, 100) + "..."}
            <span className="read-more" onClick={toggleReadMore}>
              {readMore ? " Show Less" : " Read More"}
            </span>
          </p>

          <p className="price">Price: Rs {selectedPizza.prices[selectedSize]}</p>

          <div className="sizes">
            {["S", "M", "L"].map((size) => (
              <label key={size}>
                <input
                  type="radio"
                  name="size"
                  value={size}
                  checked={selectedSize === size}
                  onChange={(e) => setSelectedSize(e.target.value)}
                />
                <span>{size}</span>
              </label>
            ))}
          </div>

          <button className="buy-btn">Buy Now</button>
        </div>
      )}
    </div>
  );
};

export default PizzaMenu;
