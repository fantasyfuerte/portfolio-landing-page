"use client";

import Image from "next/image";
import Link from "next/link";
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
            <br />
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
              repeat={Infinity}
              className="font-bold text-secondary"
            />
          </h1>
          <p className="mx-auto mb-2 text-xl md:mx-0 md:mb-8">
            Como desarrollador frontend y diseñador de interfaces me dedico a
            crear experiencias digitales impactantes y accesibles para los
            usuarios.
          </p>
          <div className="flex justify-center items-center gap-3 md:justify-start md:gap-10">
            <Link
              href="/projects"
              className="px-3 py-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50"
            >
              Ver proyectos
            </Link>
            <Link
              href="/contact"
              className="px-3 py-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-secondary/50 border-secondary text-secondary"
            >
              Contacta conmigo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
