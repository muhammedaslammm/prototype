import React, { useState, useEffect } from "react";
import {
  FaShoppingCart,
  FaUser,
  FaHeart,
  FaSearch,
  FaMapMarkerAlt,
  FaThLarge,
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header>
      <div className="container">
        {/* First Level */}
        <div className="navbar-top row ">
          {/* Logo */}
          <div className="navbar-logo col-xxl-2 col-lg-2 col-md-6 col-5">
            <FaShoppingCart />
            FreshCart
          </div>

          {/* Search Bar */}
          <div className="search-container d-none d-lg-block col-xxl-5 col-lg-5">
            <input type="text" placeholder="Search for products" />
            <FaSearch />
          </div>

          {/* Location Button */}
          <div className="d-none d-lg-block col-xxl-3 col-md-2">
            <button className="location-btn">
              <FaMapMarkerAlt />
              Location
            </button>
          </div>

          {/* Icons */}
          <div className="nav-icons col-xxl-2 col-lg-2 col-md-6 col-7">
            <div className="icon-badge">
              <FaHeart size={20} />
              <span>4</span>
            </div>
            <div>
              <FaUser size={20} />
            </div>
            <div className="icon-badge">
              <FaShoppingCart size={20} />
              <span>5</span>
            </div>
          </div>
        </div>
      </div>

      {/* Second Level */}
      {/* <nav className="navbar-bottom"> */}
      {/* "All Departments" Dropdown */}
      {/* <div className="dropdown">
          <button
            className="all-departments"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <FaThLarge />
            All Departments
          </button>

          {dropdownOpen && (
            <ul className="dropdown-menu">
              <li>Dairy, Bread & Eggs</li>
              <li>Snacks & Munchies</li>
              <li>Fruits & Vegetables</li>
              <li>Cold Drinks & Juices</li>
              <li>Breakfast & Instant Food</li>
              <li>Bakery & Biscuits</li>
              <li>Chicken, Meat & Fish</li>
            </ul>
          )}
        </div> */}

      {/* Navigation Links */}
      {/* <ul className="nav-links">
          <li>Home</li>
          <li>Shop ▼</li>
          <li>Stores ▼</li>
          <li>Mega Menu ▼</li>
          <li>Pages ▼</li>
          <li>Account ▼</li>
          <li>Dashboard</li>
          <li>Docs</li>
        </ul> */}
      {/* </nav> */}
    </header>
  );
};

export default Navbar;
