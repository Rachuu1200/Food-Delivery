import { useState, useEffect } from 'react';
import './Sindhulibazarhome.css';

function Sindhulibazarhome() {
  const slides = [
    { src: "/images-removebg-preview.png", alt: "Cheese Pizza" },
    { src: "/pngtree-crispy-golden-fried-chicken-pieces-stacked-in-a-bright-red-bucket-png-image_16232688.png", alt: "Fried Chicken" },
    { src: "/cheese_pizza_12-removebg-preview.png", alt: "Burger" },
    { src: "/paneer-momos-removebg-preview.png", alt: "Paneer Momo" },
    { src: "/chiken_rost_khaja_set-removebg-preview.png", alt: "Chicken Rost Khaja" },
    { src: "/Muton_khana-removebg-preview.png", alt: "Mutton Khana" },
    { src: "/green_salad-removebg-preview.png", alt: "Green Salad" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slider effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="sindhulibazarhome-container">
      {/* Navbar */}
      <header className="nav">
        <a className="logo" href="#">
          <img src="/mainlogo3.png" alt="Sindhuli Bazar logo" />
          <span className="brand">Sindhuli Bazar</span>
        </a>

        <nav className="nav-links">
          <a href="#">Home</a>
          <div className="dropdown">
            <button className="dropdown-toggle">Store ▾</button>
            <div className="dropdown-menu">
              <a href="#">Grocery Store</a>
              <a href="#">Liquor Store</a>
              <a href="#">Food Store</a>
            </div>
          </div>

          <div className="dropdown">
            <button className="dropdown-toggle">Services ▾</button>
            <div className="dropdown-menu">
              <a href="#">Vehicle Renting</a>
              <a href="#">Herbal Store</a>
              <a href="#">Second Hand Shop</a>
            </div>
          </div>

          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>

        <div className="search-container">
          <input type="search" placeholder="Search products…" />
          <button>Search</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="text-content">
          <h4>Fastest Delivery & Easy Pickup</h4>
          <h1><span>{slides[currentIndex].alt}</span></h1>
          <p>Hot and fresh food delivered to your doorstep in under 30 minutes!</p>
          <a href="#" className="menu-btn">View Our Menu</a>
        </div>

        <div className="image-content">
          <div className="slider">
            {slides.map((slide, index) => (
              <img
                key={index}
                src={slide.src}
                alt={slide.alt}
                className={index === currentIndex ? "slide active" : "slide"}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Sindhulibazarhome;
