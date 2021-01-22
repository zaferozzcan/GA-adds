import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    x: "100vw",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      mass: 0.4,
      damping: 7,
      stiffness: 100,
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};

const childVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Order = ({ pizza, setShowModal }) => {
  const [showThanks, setShowThanks] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 5000);
  }, [setShowModal]);

  setTimeout(() => {
    setShowThanks(false);
  }, 4000);
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="container order"
      exit="exit"
    >
      {showThanks && (
        <motion.h2 exit={{ y: -1000 }}>Thank you for your order :)</motion.h2>
      )}
      <motion.p variants={childVariants}>
        You ordered a {pizza.base} pizza with:
      </motion.p>
      <motion.div variants={childVariants}>
        {pizza.toppings.map((topping) => (
          <div key={topping}>{topping}</div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Order;
