import React from "react";
import "./Navbar.css";
import { motion } from "framer-motion";

function Navbar() {
  const navItems = ["Solutions", "Features", "Pricing", "Blog", "Restaurants", "Food"];

  return (
    <nav className="navbar">
      <motion.div 
        className="logo"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        Olive
      </motion.div>

      <ul className="nav-links">
        {navItems.map((item, index) => (
          <motion.li 
            key={item}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {item}
          </motion.li>
        ))}
      </ul>

      <div className="nav-buttons">
        <button className="signin">Sign In</button>
        <motion.button 
          className="get-olive"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Olive →
        </motion.button>
      </div>
    </nav>
  );
}

export default Navbar;