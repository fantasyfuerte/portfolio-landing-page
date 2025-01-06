import Link from "next/link";
import MotionTransition from "./transition-component";

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
              <span className="text-secondary">
                Dev
              </span>
            </h1>
          </Link>
        </div>
      </div>
    </MotionTransition>
  );
}

export default Header;
