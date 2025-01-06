import Link from "next/link";
import MotionTransition from "./transition-component";
import { socialNetworks } from "@/data";

function Header() {
  return (
    <MotionTransition
      position="bottom"
      className="absolute z-40 inline-block w-full top-5 md:top-10"
    >
      <div>
        <div className="container justify-between max-w-6xl mx-auto md:flex">
          <Link href="/">
            <h1 className="my-3 text-4xl font-bold text-center md:text-left">
              Fuerte
              <span className="text-secondary">Designs</span>
            </h1>
          </Link>
          <div className="flex items-center justify-center gap-7">
            {socialNetworks.map(({ logo, src, id }) => (
              <Link
                className="transition-all duration-300 ease-in-out hover:text-secondary"
                key={id}
                href={src}
              >
                {logo}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </MotionTransition>
  );
}

export default Header;
