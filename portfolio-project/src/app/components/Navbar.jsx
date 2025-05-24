"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from 'react';
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";

const navLinks = [
    {
        title: "About",
        path: "#about",
    },
    {
        title: "Projects",
        path: "#projects",
    },
    {
        title: "Contact",
        path: "#contact",
    },
];

const Navbar = () => {
    const [navbarOpen, setNavBarOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const [highlightLeft, setHighlightLeft] = useState("0px");
    const [highlightWidth, setHighlightWidth] = useState("0px");
    const navRefs = useRef([]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const offsets = navLinks.map(link => {
                const el = document.getElementById(link.path.replace('#', ''));
                if (!el) return { id: link.path, offsetTop: 0 };
                return { id: link.path, offsetTop: el.offsetTop };
            });

            const current = offsets.findLast(offset => scrollY >= offset.offsetTop - 100);
            if (current && current.id !== activeSection) {
                setActiveSection(current.id);
                const index = navLinks.findIndex(link => link.path === current.id);
                const el = navRefs.current[index];
                if (el) {
                    const rect = el.getBoundingClientRect();
                    setHighlightLeft(`${el.offsetLeft}px`);
                    setHighlightWidth(`${rect.width}px`);
                }
            }
        };

        handleScroll(); // Trigger on load
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [activeSection]);

    return (
        <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90">
            <div className="flex flex-wrap items-center justify-between mx-auto px-4">
                <Image
                    src="/images/Icon-Large.png"
                    alt="logo"
                    width={50}
                    height={50}
                    className="p-2"
                />

                <div className="mobile-menu block md:hidden">
                    {!navbarOpen ? (
                        <button onClick={() => setNavBarOpen(true)} className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
                            <Bars3Icon className="h-5 w-5" />
                        </button>
                    ) : (
                        <button onClick={() => setNavBarOpen(false)} className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
                            <XMarkIcon className="h-5 w-5" />
                        </button>
                    )}
                </div>

                <div className="menu hidden md:block md:w-auto relative" id="navbar">
                    <ul className="relative flex p-4 md:p-0 sm:flex-row md:space-x-8 mt-0">
                        <div
                            className="absolute transition-all duration-300 ease-in-out bg-gradient-to-r from-orange-400 to-orange-600 rounded-md h-10 -z-10"
                            style={{ left: highlightLeft, width: highlightWidth }}
                        />
                        {navLinks.map((link, index) => (
                            <li
                                key={index}
                                ref={el => (navRefs.current[index] = el)}
                                className="relative z-10"
                            >
                                <NavLink
                                    href={link.path}
                                    title={link.title}
                                    isActive={activeSection === link.path}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
        </nav>
    );
};

export default Navbar;
