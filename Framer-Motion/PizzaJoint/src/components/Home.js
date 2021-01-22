import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Loader from "./Loader";

const buttonVariants = {
  visible: {
    x: -50,
    transition: {
      delay: 2,
    },
  },
  hover: {
    // scale: [1, 1.1, 1, 1.1, 1, 1, 1.1, 1, 1.1, 1], this is custon key frame to make it indefine use "yoyo in transition"
    scale: 1.1,
    textShadow: "0px 0px 5px rgb(255,255,255)",
    boxShadow: "0px 0px 5px rgb(255,255,255)",
    transition: {
      yoyo: 10,
      duration: 0.25,
      ease: "easeOut",
    },
  },
};

const containerVarience = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.3,
      duration: 1.3,
    },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};

const Home = () => {
  return (
    <motion.div
      className="home container"
      variants={containerVarience}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.h2 animate={{ fontSize: 40, color: "white", x: 0, y: -100 }}>
        Welcome to Pizza Joint
      </motion.h2>
      <Link to="/base">
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
          animate="visible"
        >
          Create Your Pizza
        </motion.button>
      </Link>
      <Loader />
    </motion.div>
  );
};

export default Home;
