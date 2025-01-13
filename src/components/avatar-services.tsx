import Image from "next/image";
import MotionTransition from "./transition-component";

function AvatarServices() {
  return (
    <MotionTransition
      position="right"
      className="bottom-0 left-0 hidden md:inline-block md:absolute"
    >
      <Image
        src="/services.png"
        width={300}
        height={300}
        alt="services-avatar"
        className="w-[300px]"
      />
    </MotionTransition>
  );
}

export default AvatarServices;
