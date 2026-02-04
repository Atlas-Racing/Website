"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Snowfall from "react-snowfall";
import { Snowflake } from "lucide-react";
// Components
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { Button } from "./ui/button";

const Header = () => {
  const [isSnowing, setIsSnowing] = useState(false);

  return (
    <header className="py-8 xl:py-12 text-white">
      {isSnowing && (
        <div className="fixed inset-0 pointer-events-none z-50">
          <Snowfall />
        </div>
      )}
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center">
            <Image
              src="/logo/logoNoBG.png"
              alt="Atlas Racing Logo"
              width={50}
              height={50}
              className="object-contain"
            />
            <h1 className="text-4xl font-semibold">
              <span className="font-normal">Atlas</span>
              <span className="text-accent font-bold">Racing</span>
            </h1>
          </div>
        </Link>
        {/* Desktop Nav */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsSnowing(!isSnowing)}
            className="text-white hover:text-accent hover:bg-transparent"
          >
            <Snowflake className={isSnowing ? "text-accent" : ""} />
          </Button>
        </div>
        {/* Mobile Nav */}
        <div className="xl:hidden flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsSnowing(!isSnowing)}
            className="text-white hover:text-accent hover:bg-transparent"
          >
            <Snowflake className={isSnowing ? "text-accent" : ""} />
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;