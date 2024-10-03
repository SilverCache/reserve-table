import React from "react";
import { Link } from "react-router-dom";
import bannerImg from "./Images.js/restauranfood.jpg";

const Header = () => {
  return (
    <header className="header">
      <section>
        <div className="banner">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterraneran restaurant, focused on
            traditional recipes servred with a modern twist.
          </p>
          <Link to="/booking">
            <button aria-label="On Click">Reserve Table</button>
          </Link>
        </div>
        <div className="banner-img">
          <img src={bannerImg} alt="" />
        </div>
      </section>
    </header>
  );
};

export default Header;