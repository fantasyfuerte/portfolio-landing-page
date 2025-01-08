"use client";

import { itemsNavbar } from "../data";
import { usePathname } from "next/navigation";
import Link from "next/link";
import MotionTransition from "./transition-component";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <MotionTransition
      position="right"
      className="z-40 fixed flex flex-col items-center justify-center w-full mt-auto h-max bottom-10"
    >
      <nav>
        <div className="flex justify-center items-center w-full gap-2 px-4 py-1 bg-white/15 rounded-full backdrop-blur-sm">
          {itemsNavbar.map((item) => (
            <Link
              href={item.link}
              key={item.id}
              className={`${
                pathname == item.link && "bg-secondary"
              } px-3 py-2 transition duration-150 rounded-full cursor-pointer hover:bg-secondary`}
            >
              {item.icon}
            </Link>
          ))}
        </div>
      </nav>
    </MotionTransition>
  );
};

export default Navbar;
