import React from "react";
import "./Menu.css";
import burgerImg from "../assets/burger.jpg";
import pizzaImg from "../assets/pizza.jpg";
import pastaImg from "../assets/pasta.jpg";
import saladImg from "../assets/salad.jpg";
import sushiImg from "../assets/sushi.jpg";
import dessertImg from "../assets/dessert.jpg";

const menuItems = [
  { id: 1, name: "Cheese Burger", price: "$8.99", image: burgerImg, desc: "Juicy grilled beef patty with melted cheese and fresh veggies." },
  { id: 2, name: "Margherita Pizza", price: "$12.99", image: pizzaImg, desc: "Classic Italian pizza with fresh basil, mozzarella, and tomato sauce." },
  { id: 3, name: "Creamy Pasta", price: "$10.99", image: pastaImg, desc: "Rich and creamy pasta with mushrooms and parmesan cheese." },
  { id: 4, name: "Fresh Salad", price: "$7.99", image: saladImg, desc: "Healthy and fresh salad with organic greens, nuts, and feta cheese." },
  { id: 5, name: "Sushi Platter", price: "$15.99", image: sushiImg, desc: "Assorted sushi rolls with fresh fish, avocado, and rice." },
  { id: 6, name: "Chocolate Dessert", price: "$6.99", image: dessertImg, desc: "Delicious chocolate cake with a molten lava center." },
];

const Menu = () => {
  return (
    <div className="menu">
      <h2>Our Menu</h2>
      <div className="menu-grid">
        {menuItems.map((item) => (
          <div className="menu-card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <div className="menu-info">
              <h3>{item.name}</h3>
              <p>{item.desc}</p>
              <p className="price">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
