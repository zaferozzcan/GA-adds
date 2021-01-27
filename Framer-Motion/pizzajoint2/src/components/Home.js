import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div className="home container">
      <motion.h2
        animate={{
          rotateY: 360,
          fontSize: 80,
          color: "#ff2994",

          transition: { duration: 2.1 },
        }}
      >
        Welcome to Pizza Joint
      </motion.h2>
      <Link to="/base">
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ scale: 1.5, opacity: 1, transition: { delay: 2.1 } }}
        >
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Home;
