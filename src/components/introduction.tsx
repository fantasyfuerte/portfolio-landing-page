import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

function Introduction() {
  return (
    <div className="z-20 w-full bg-darkBg/60">
      <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2">
        <Image src="/home-4.png" alt="principal-image" priority width="800" height="800"></Image>
      </div>
    </div>
  );
}

export default Introduction;
