import React from "react";
import "./Home.css";
import heroImage from "../assets/hero.jpg";
import fastDeliveryIcon from "../assets/fast-delivery.png";
import freshFoodIcon from "../assets/fresh-food.png";
import easyOrderIcon from "../assets/easy-order.png";

const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <div className="hero-content">
          <h1>Delicious Food, Delivered Fast!</h1>
          <p>Your favorite meals delivered right to your doorstep, hot and fresh.</p>
          <button className="cta-button">Order Now</button>
        </div>
        <img src={heroImage} alt="Delicious food" className="hero-image" />
      </div>

      
      <div className="features">
        <h2>Why Choose Us?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <img src={fastDeliveryIcon} alt="Fast Delivery" />
            <h3>Super Fast Delivery</h3>
            <p>Get your food delivered within minutes with our efficient delivery service.</p>
          </div>
          <div className="feature-card">
            <img src={freshFoodIcon} alt="Fresh Ingredients" />
            <h3>Fresh Ingredients</h3>
            <p>We use only fresh and high-quality ingredients for every dish we serve.</p>
          </div>
          <div className="feature-card">
            <img src={easyOrderIcon} alt="Easy Ordering" />
            <h3>Easy Ordering</h3>
            <p>Seamless and user-friendly ordering process with a few simple clicks.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
