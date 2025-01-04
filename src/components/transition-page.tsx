"use client";

import { transitionVariantsPage } from "@/utils/motion-transitions";
import { AnimatePresence, motion } from "motion/react";

function TransitionPage() {
  return (
    <AnimatePresence mode="wait">
      <div>
        <motion.div
          className="fixed top-0 bottom-0 right-full w-screen z-30 bg-[#2e2257]"
          variants={transitionVariantsPage}
        />
      </div>
    </AnimatePresence>
  );
}

export default TransitionPage;
