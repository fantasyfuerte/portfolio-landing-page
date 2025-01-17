import React from "react";
import MotionTransition from "./transition-component";
import Image from "next/image";

function AvatarPortfolio() {
  return (
    <MotionTransition
      position="bottom"
      className="bottom-0 left-0 hidden md:inline-block md:fixed"
    >
      <Image
        src="/avatar-works.png"
        alt="portfolio-image"
        width={300}
        height={300}
      />
    </MotionTransition>
  );
}

export default AvatarPortfolio;
