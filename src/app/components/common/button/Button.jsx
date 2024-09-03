'use client';
import React from 'react';
import { motion } from 'framer-motion';

function Button(props) {
  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.a
      href={props.href}
      className="text-xl rounded-full mb-4 font-semibold px-7 border border-2 border-primary me-4 py-2 text-primary  hover:bg-secondary-dark hover:border-secondary-dark2 hover:text-white "
      variants={buttonVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {props.text}
    </motion.a>
  );
}

export default Button;
