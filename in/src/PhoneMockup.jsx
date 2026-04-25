import React, { useState } from "react";
import "./Phone.css";
import { motion, AnimatePresence } from "framer-motion";

// 🌟 Array of images for the carousel
const productImages = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRezuyRy7YVQVGlpX1XD2QxtNsOxiJ8rBfgmQ&s", // Fig & Olive
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtokqctbYcbW2YLspo-S2WMghvbUq1TgHwxw&s", // Different Crackers example
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4JVu0w5MkMaGfN_UdrpYb2IiwFg2KpoNVsQ&s" // Another product example
];

function PhoneMockup() {
  // 🔄 State to keep track of current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // ➡️ Functions to change images
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % productImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + productImages.length) % productImages.length);
  };

  // 💫 Animation variants for sliding images
  const variants = {
    initial: { x: 300, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: -300, opacity: 0 },
  };

  return (
    <div className="phone-body">
      {/* Dynamic Island / Notch */}
      <div className="dynamic-island"></div>

      <div className="phone-screen">
        {/* 🖼️ Animated Product Image Carousel */}
        <div className="product-display">
          {/* ⬅️ Left Arrow */}
          <button className="nav-arrow left" onClick={prevImage}>
            ‹
          </button>

          {/* AnimatePresence enables exit animations */}
          <AnimatePresence initial={false}>
            <motion.img 
              key={currentIndex} // Crucial! Tells framer this is a new image
              src={productImages[currentIndex]} 
              alt={`Product ${currentIndex + 1}`} 
              className="main-img" 
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ x: { type: "spring", stiffness: 300, damping: 30 } }}
            />
          </AnimatePresence>

          {/* ➡️ Right Arrow */}
          <button className="nav-arrow right" onClick={nextImage}>
            ›
          </button>
        </div>

        {/* Info Section - Keep this part same */}
        <div className="product-info">
          <div className="title-row">
            <h3>Fig and Olive Crackers, Fig and Olive</h3>
            <span className="brand">Lesley Stowe</span>
          </div>
          
          <motion.div 
            className="score-row"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <span className="dot"></span>
            <span className="score-text">46/100</span>
            <span className="status">Avoid</span>
          </motion.div>
        </div>

        {/* Oliver Says Card - Keep this part same */}
        <motion.div 
          className="oliver-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="oliver-header">
            <span className="icon">🥑</span>
            <strong>Oliver Says:</strong>
          </div>
          <p>
            "This product's low score mainly comes from the processed sugars..."
          </p>
        </motion.div>

        {/* Breakdown Tab - Keep this part same */}
        <motion.div 
          className="breakdown-tab"
          whileTap={{ scale: 0.95 }}
        >
          Breakdown <span style={{ marginLeft: '5px' }}>↓</span>
        </motion.div>
      </div>
    </div>
  );
}

export default PhoneMockup;