import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import { motion } from "framer-motion";

function App() {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }}
    >
      <Navbar />
      <Hero />
    </motion.div>
  );
}

export default App;