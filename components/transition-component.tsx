"use client";

import { motion } from "motion/react";
import { fadeIn } from "../utils/motion-transitions";

interface Props {
  children: React.ReactNode;
  position: string;
}

const MotionTransition = (props: Props) => {
  const { children, position } = props;

  return <motion.div variants={fadeIn(position)}>{children}</motion.div>;
};

export default MotionTransition;
