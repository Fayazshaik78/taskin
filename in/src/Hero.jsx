import React from "react";
import "./Hero.css";
import PhoneMockup from "./PhoneMockup"; // Fix: Ensure path is correct
import { motion } from "framer-motion";

function Hero() {
  return (
    <div className="hero">
      {/* 🌟 Centered Avatar Stack & Text */}
      <motion.div 
        className="trusted-wrapper"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="avatar-stack">
          <img src="https://i.pravatar.cc/150?u=1" alt="User" />
          <img src="https://i.pravatar.cc/150?u=2" alt="User" />
          <img src="https://i.pravatar.cc/150?u=3" alt="User" />
          <div className="avatar-more">+1k</div>
        </div>
        <p className="trusted">Trusted by thousands of healthy families</p>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
      >
        The Safest Way to <br /> Shop for Groceries
      </motion.h1>

      <p className="description">
        Use the Olive Food Scanner App to instantly eliminate harmful
        ingredients and get expert-backed food insights.
      </p>

      <div className="buttons">
        <button className="btn-primary">Download for iOS</button>
        <button className="btn-secondary">Join the Olive Community →</button>
      </div>

      <div className="phone-container">
        <PhoneMockup />
      </div>
    </div>
  );
}

export default Hero;