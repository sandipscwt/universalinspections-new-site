"use client";

import Link from "next/link";
import { FC, useState } from "react";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import Container from "@/components/container";
import Image from "next/image";
import style from "./style.module.css";
import { usePathname } from "next/navigation";

const Header: FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [opportunitiesOpen, setOpportunitiesOpen] = useState(false);
    const [desktopOpportunitiesOpen, setDesktopOpportunitiesOpen] = useState(false);

    const pathname = usePathname();

    const menuItems = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About Us" },
        { href: "/services", label: "Services" },
        { href: "/blogs", label: "Blogs" },
        { href: "/associates", label: "Our Associates" },
        { href: "/warranties", label: "Extended Warranties" },
        { href: "/financing", label: "Financing" },
        { href: "/opportunities", label: "Opportunities" },
    ];

    return (
        <header className="w-full shadow-md">
            {/* Top Info Bar */}
            <div className="bg-[#2C3037] py-2 text-white text-xs md:text-sm">
                <Container>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center py-2 border-gray-700 gap-4">
                        {/* Phone Section */}
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-300 items-center">
                            <div className="flex items-center space-x-2 md:hidden">
                                {/* Empty div for spacing or you can remove if unnecessary */}
                            </div>

                            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 text-center md:text-left">
                                <div className="hidden md:flex items-center space-x-2">
                                    <div className="px-1.5 py-1.5 rounded-[3px] bg-[#BD632F]">
                                        <Image
                                            src="/images/phone-call.png"
                                            alt="call"
                                            width={12}
                                            height={12}
                                            className="object-contain invert"
                                        />
                                    </div>
                                </div>
                                <span className="text-[#DAA628] text-base font-glacial-regular">
                                    Call Now{" "}
                                    <Link href="tel:(205) 558-8284" className="text-white">
                                        (205) 558-8284
                                    </Link>
                                </span>
                                <span className="text-[#DAA628] text-base font-glacial-regular">
                                    Toll-Free{" "}
                                    <Link href="tel:1-833-935-1888" className="text-white">
                                        1-833-935-1888
                                    </Link>
                                </span>
                            </div>
                        </div>

                        {/* Mail Section */}
                        <div className="flex items-center space-x-2 text-gray-300 justify-center md:justify-start">
                            <div className="hidden md:flex px-1.5 py-1.5 rounded-[3px] bg-[#BD632F]">
                                <Image
                                    src="/images/mail-inbox-app.png"
                                    alt="mail"
                                    width={12}
                                    height={12}
                                    className="object-contain invert"
                                />
                            </div>
                            <span className="text-[#DAA628] text-base font-glacial-regular text-center md:text-left">
                                Mail Address:{" "}
                                <Link href="mailto:info@universalinspections.com" className="text-white">
                                    info@universalinspections.com
                                </Link>
                            </span>
                        </div>
                    </div>
                </Container>
            </div>

            {/* Main Navigation */}
            <div className="bg-[#273E47] relative">
                <Container>
                    <div className="flex justify-between items-center py-4">
                        {/* Logo and Nav */}
                        <div className="flex items-center space-x-4">
                            <Link href="/">
                                <Image
                                    src="/images/logo.png"
                                    alt="Logo"
                                    width={141}
                                    height={88}
                                    className="object-contain"
                                />
                            </Link>

                            {/* Desktop Menu */}
                            <nav className={`hidden ${style.customLg} space-x-8 ${style.navItems}`}>
                                {menuItems.map((item) => {
                                    if (item.label === "Opportunities") {
                                        return (
                                            <div key={item.href} className="relative group">
                                                <button
                                                    onClick={() => setDesktopOpportunitiesOpen(!desktopOpportunitiesOpen)}
                                                    className={` flex items-center  space-x-1`}
                                        
                                                >
                                                    <span className={`text-white text-[14px]  font-glacial-regular`}>Opportunities</span>
                                                    <ChevronDown className="w-4 h-4 text-white" />
                                                </button>
                                                {/* Dropdown */}
                                                {desktopOpportunitiesOpen && (
                                                    <div className="absolute top-full left-0 mt-2 bg-[#1F3339] rounded shadow-lg w-48 z-50">
                                                        <Link
                                                            href="/opportunities/dispatchers"
                                                            className="block px-4 py-2 hover:bg-[#2C4B52]"
                                                            onClick={() => setDesktopOpportunitiesOpen(false)}
                                                        >
                                                            Dispatchers
                                                        </Link>
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    } else {
                                        return (

                                            <Link
                                                key={item.href}
                                                href={item.href}
                                                className={`text-white  text-[14px] ${pathname === item.href ? "font-glacial-bold" : "font-glacial-regular"}`}
                                            >
                                                {item.label}
                                            </Link>
                                        );
                                    }
                                })}
                            </nav>
                        </div>

                        {/* Book Button */}
                        <div className={`hidden ${style.customLg} rounded overflow-hidden shadow-md`}>
                            <Link href="/book" className="flex cursor-pointer">
                                <span className="bg-[#FF9800] hover:bg-[#F4A300] px-5 py-4 text-[#2C3037] font-glacial-regular flex items-center text-[clamp(12px,4vw,14px)]">
                                    Book an Inspection Today!
                                </span>
                                <span className="bg-[#BD632F] hover:bg-[#a85a2b] px-4 py-2 flex items-center justify-center">
                                    <ArrowRight className="w-5 h-5 text-white" />
                                </span>
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className={`flex items-center ${style.hideOnCustomLg}`}>
                            <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
                                {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>
                </Container>

                {/* Mobile Menu Panel */}
                {menuOpen && (
                    <div className={`absolute top-full left-0 w-full bg-[#273E47] text-white shadow-lg ${style.hideOnCustomLg} z-50`}>
                        <nav className="flex flex-col space-y-2 p-4">
                            <Link href="/" className="text-white" onClick={() => setMenuOpen(false)}>Home</Link>
                            <Link href="/about" className="text-white" onClick={() => setMenuOpen(false)}>About Us</Link>
                            <Link href="/services" className="text-white" onClick={() => setMenuOpen(false)}>Services</Link>
                            <Link href="/blogs" className="text-white" onClick={() => setMenuOpen(false)}>Blogs</Link>
                            <Link href="/associates" className="text-white" onClick={() => setMenuOpen(false)}>Our Associates</Link>
                            <Link href="/warranties" className="text-white" onClick={() => setMenuOpen(false)}>Extended Warranties</Link>
                            <Link href="/financing" className="text-white" onClick={() => setMenuOpen(false)}>Financing</Link>

                            {/* Opportunities Dropdown */}
                            <div className="relative ">
                                <button
                                    onClick={() => setOpportunitiesOpen(!opportunitiesOpen)}
                                    className="flex items-center space-x-1 text-white "
                                >
                                    <span>Opportunities</span>
                                    <ChevronDown className="w-4 h-4" />
                                </button>

                                {opportunitiesOpen && (
                                    <div className="absolute left-0 mt-1 bg-[#1F3339] rounded shadow-lg w-48 z-50 overflow-visible">
                                        <Link
                                            href="/opportunities/dispatchers"
                                            className="block px-4 py-2 hover:bg-[#2C4B52]"
                                            onClick={() => {
                                                setOpportunitiesOpen(false);
                                                setMenuOpen(false);
                                            }}
                                        >
                                            Dispatchers
                                        </Link>
                                    </div>
                                )}
                            </div>




                            <Link href="/book" className="bg-[#FF9800] hover:bg-[#F4A300] px-4 py-2 rounded text-[#2C3037] font-medium text-center mt-4 flex items-center justify-center gap-2" onClick={() => setMenuOpen(false)}>
                                Book an Inspection Today! <ArrowRight className="w-5 h-5 text-white" />
                            </Link>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
