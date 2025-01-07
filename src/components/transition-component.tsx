"use client";

import { motion } from "motion/react";
import { fadeIn } from "../utils/motion-transitions";

interface Props {
  children: React.ReactNode;
  position: "right" | "bottom";
  className?: string;
}

const MotionTransition = (props: Props) => {
  const { children, position, className } = props;

  const variants = fadeIn(position)

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default MotionTransition;
