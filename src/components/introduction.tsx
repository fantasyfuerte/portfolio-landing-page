"use client";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

function Introduction() {
  return (
    <div className="z-20 w-full bg-darkBg/60">
      <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2">
        <Image
          src="/home-4.png"
          alt="principal-image"
          priority
          width="800"
          height="800"
        ></Image>
        <div className="flex flex-col justify-center">
          <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">
            Si puedes pensarlo,
            <TypeAnimation
              sequence={[
                "puedes desarrollarlo",
                1200,
                "puedes crearlo",
                1200,
                "puedes diseñarlo",
                1200,
                "puedes implementarlo",
                1200,
              ]}
              wrapper="span"
              speed={50}
              className="text-secondary"
            />
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
