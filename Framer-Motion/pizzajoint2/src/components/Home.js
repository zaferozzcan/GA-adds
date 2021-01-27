import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

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
  const [showGreet, setShowGreet] = useState(true);
  setTimeout(() => {
    setShowGreet(false);
  }, 4000);
  return (
    <>
      <AnimatePresence>
        {showGreet && (
          <motion.div
            exit={{ y: -1000, transition: { duration: 2.2 } }}
            className="piic"
          ></motion.div>
        )}
      </AnimatePresence>
      <motion.div className="home container">
        <motion.h2 exit={{ y: -1000 }}>Welcome to Pizza Joint</motion.h2>
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
    </>
  );
};

export default Home;
