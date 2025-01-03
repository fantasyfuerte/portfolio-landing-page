"use client";

import { motion } from "motion/react";
import { fadeIn } from "../utils/motion-transitions";

interface Props {
  children: React.ReactNode;
  position: "right" | "bottom";
}

const MotionTransition = (props: Props) => {
  const { children, position } = props;

  return (
    <motion.div variants={fadeIn(position)} initial="hidden" animate="visible">
      {children}
    </motion.div>
  );
};

export default MotionTransition;
