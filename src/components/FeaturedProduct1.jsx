import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FeaturedProduct.css";

export default function FeaturedProduct({ items }) {
  const navigate = useNavigate();

  // Default products if none are passed
  const products = items || [
    {
      "featured-product": "Chicken Biryani",
      restaurant: "From Sindhuli Bazar special",
      price: 350,
      img: "chiken biryani.webp",
    },
    {
      "featured-product": "Mix Current Noodles",
      restaurant: "From Sindhuli Bazar special",
      price: 200,
      img: "w9bCV2d.jpeg",
    },
    {
      "featured-product": "Mutton Khana",
      restaurant: "From Sindhuli Bazar special",
      price: 420,
      img: "HQwEk0p.jpeg",
    },
    {
      "featured-product": "Buff Chilli",
      restaurant: "From Sindhuli Bazar special",
      price: 280,
      img: "1t0zPET.jpeg",
    },
    {
      "featured-product": "8848 Vodka",
      restaurant: "From Sindhuli Bazar special",
      price: 3000,
      img: "8UxIysS.jpg",
    },
    {
      "featured-product": "Veg Chowmein",
      restaurant: "From Sindhuli Bazar special",
      price: 200,
      img: "HFy54bX.jpg",
    },
  ];

  return (
    <div className="featured-product-section">
      {/* Headline on top */}
      <h2 className="featured-product-title">Featured Products</h2>

      {/* Products list */}
      {products.map((product, index) => {
        const [quantity, setQuantity] = useState(1);
        const totalPrice = product.price * quantity;

        return (
          <div
            className="featured-product-card"
            key={index}
            onClick={() => navigate("/services")}
          >
            {/* Top Section */}
            <div className="featured-product-header">
              <img
                src={product.img}
                alt={product["featured-product"]}
                className="featured-product-img"
              />
              <div className="featured-product-info">
                <h3>{product["featured-product"]}</h3>
                <p className="restaurant">{product.restaurant}</p>
                
                <p className="price">Rs. {product.price}</p>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="featured-product-footer">
              <p className="total">
                Total Amount: <span>Rs. {totalPrice}</span>
              </p>

              <div className="controls">
                <button
                  className="qty-btn minus"
                  onClick={(e) => {
                    e.stopPropagation();
                    quantity > 1 && setQuantity(quantity - 1);
                  }}
                >
                  −
                </button>
                <span className="qty">{quantity}</span>
                <button
                  className="qty-btn plus"
                  onClick={(e) => {
                    e.stopPropagation();
                    setQuantity(quantity + 1);
                  }}
                >
                  +
                </button>

                <button
                  className="add-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    alert(`Viewing details for ${product["featured-product"]}`);
                  }}
                >
                  View more
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
