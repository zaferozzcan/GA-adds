import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      className="home container"
      initial={{ opacity: 0 }}
      animate={{ rotateZ: 360, opacity: 1, marginTop: 200, y: -30 }}
      transition={{ delay: 0.3, duration: 1.3 }}
    >
      <motion.h2 animate={{ fontSize: 40, color: "white", x: 0, y: -150 }}>
        Welcome to Pizza Joint
      </motion.h2>
      <Link to="/base">
        <motion.button
          whileHover={{
            scale: 1.1,
            textShadow: "0px 0px 5px rgb(255,255,255)",
            boxShadow: "0px 0px 5px rgb(255,255,255)",
          }}
        >
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Home;
