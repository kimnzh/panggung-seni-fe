import { Input } from "@/components/ui/input";
import { UserCircle } from "lucide-react";
import Image from "next/image";
import { navigations } from "./consts";

const Navbar = () => {
  return (
    <nav className="flex items-center text-b6 justify-between gap-8 px-10 h-25 bg-light-black fixed inset-0 z-9999 border-b border-dark-black">
      {/* Logo */}
      <div className="flex text-b5 gap-2 items-center">
        <div className="relative h-16 w-16">
          <Image src="/logo.webp" alt="logo" fill className="object-contain" />
        </div>
        PanggungSeni.id
        <div className="ml-2 w-96">
          <Input variant="search" />
        </div>
      </div>

      {/* Navigations */}
      <ul className="flex gap-4 text-s7">
        {navigations.map((nav, index) => (
          <li
            key={nav.name}
            className={`relative text-nowrap ${
              index === 0 && "text-light-gold"
            }`}
          >
            {nav.name}
            {index === 0 && (
              <div className="absolute -bottom-1 h-0.5 w-full bg-light-gold" />
            )}
          </li>
        ))}
      </ul>

      {/* User Info */}
      <div className="flex items-center gap-4">
        <div className="flex text-s7 text-light-gold items-center rounded-lg border border-light-gold px-2 gap-1 h-11.75">
          <div className="relative size-6">
            <Image src="/icons/coin.svg" alt="coin" fill />
          </div>
          100
        </div>
        <UserCircle className="size-12.5" />
      </div>
    </nav>
  );
};

export default Navbar;
