import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const words = ["Investing made simple", "Wealth made possible"];

const AnimatedTextCharacter = ({ text }: { text: string }) => {
  // splitting text into letters
  const letters = Array.from(text);

  // Variants for Container
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.001 * i },
    }),
  };

  // Variants for each letter
  const child = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: -20,
      y: 10,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      style={{ overflow: "hidden", display: "flex", fontSize: "2rem" }}
      variants={container}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      {letters.map((letter, index) => (
        <AnimatePresence key={index}>
          <motion.span variants={child} key={index}>
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        </AnimatePresence>
      ))}
    </motion.div>
  );
};

export const AnimatedSequence = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <TypeAnimation
      sequence={[
        "Investing made simple", // Types 'One'
        1000, // Waits 1s
        "Wealth made possible", // Deletes 'One' and types 'Two'
        1000, // Waits 2s
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: "2em", display: "inline-block" }}
    />
  );
};
