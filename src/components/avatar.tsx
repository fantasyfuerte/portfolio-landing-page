import React from "react";
import MotionTransition from "./transition-component";
import Image from "next/image";

function AvatarComponent() {
  return (
    <MotionTransition
      position="bottom"
      className="bottom-0 right-0 hidden md:inline-block md:absolute "
    >
      <Image
        src="/avatar-1.png"
        width="400"
        height="400"
        className="w-full h-full "
        alt="About me"
      />
    </MotionTransition>
  );
}

export default AvatarComponent;
