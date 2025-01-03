"use client";

import { motion } from "motion/react";

interface Props {
  children: React.ReactNode;
}

const MotionTransition = (props: Props) => {
  const { children } = props;

  return <motion.div>{children}</motion.div>;
};

export default MotionTransition;
