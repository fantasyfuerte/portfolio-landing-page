"use client";

import { motion } from "motion/react";
import { fadeIn } from "../utils/motion-transitions";

interface Props {
  children: React.ReactNode;
  position: "right" | "bottom";
  className: string;
}

const MotionTransition = (props: Props) => {
  const { children, position, className } = props;

  return (
    <motion.div
      variants={fadeIn(position)}
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
