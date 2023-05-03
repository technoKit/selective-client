import { motion, AnimatePresence } from "framer-motion";
import React from "react";

const words = ["100% safe", "Easy Exist", "Carefully selected", "High returns"];

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
      style={{ overflow: "hidden", display: "flex", fontSize: "3rem" }}
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
    <motion.div
      style={{
        position: "relative",
        height: "50px",
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
      }}
      className="z-10"
    >
      {/* <Word key={"2"} word={words[1]} /> */}
      <AnimatedTextCharacter key={index} text={words[index]} />
    </motion.div>
  );
};
