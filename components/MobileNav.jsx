"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";

const Links = [
    { name: 'Home', path: '/' },
    { name: "About Us", path: '/about' },
    { name: "Driverless", path: '/driverless' },
    { name: "Gallery", path: '/gallery' },
    { name: "GT", path: '/gt' },
    { name: "Sponsors", path: '/sponsors' },
    { name: "Contact", path: '/contact' }
];

const MobileNav = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-accent" />
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                {/* Logo */}
                <div className="mt-32 mb-40 text-center text-2xl">
                    <Link href="/" onClick={handleLinkClick}>
                        <h1 className="text-4xl font-semibold">
                            <span className="font-normal">Atlas</span>
                            <span className="text-accent font-bold">Racing</span>
                        </h1>
                    </Link>
                </div>

                {/* Nav */}
                <nav className="flex flex-col justify-center items-center gap-8">
                    {Links.map((link, index) => {
                        return (
                            <Link
                                href={link.path}
                                key={index}
                                onClick={handleLinkClick}
                                className={`${link.path === pathname && "text-accent border-b-2 border-accent"} text-xl capitalize hover:text-accent transition-all font-mono`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </nav>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;
