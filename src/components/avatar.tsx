import React from "react";
import MotionTransition from "./transition-component";
import Image from "next/image";

function AvatarComponent() {
  return (
    <MotionTransition
      position="bottom"
      className="hidden md:inline-block md:absolute md:bottom-0 md:right-0 
      w-[450px]"
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
