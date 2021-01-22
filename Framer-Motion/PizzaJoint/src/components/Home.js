import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      className="home container"
      animate={{ rotateZ: 360, opacity: 0.5, marginTop: 200, y: -30 }}
    >
      <motion.h2 animate={{ fontSize: 40, color: "white", x: 0, y: -150 }}>
        Welcome to Pizza Joint
      </motion.h2>
      <Link to="/base">
        <motion.button animate={{ scale: 2 }}>Create Your Pizza</motion.button>
      </Link>
    </motion.div>
  );
};

export default Home;
