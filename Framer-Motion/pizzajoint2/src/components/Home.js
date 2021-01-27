import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const buttonVariants = {
  visible: {
    transition: {
      duration: Infinity,
    },
  },
  hover: {
    scale: 1.1,
    transition: {
      yoyo: 100,
    },
  },
};

const Home = () => {
  return (
    <motion.div className="home container">
      <motion.h2>Welcome to Pizza Joint</motion.h2>
      <Link to="/base">
        <motion.button
          variants={buttonVariants}
          animate="visible"
          whileHover="hover"
        >
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Home;
