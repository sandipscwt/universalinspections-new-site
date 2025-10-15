"use client";

import Link from "next/link";
import { FC, useState } from "react";
import { Menu, X, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import Container from "@/components/container";
import Image from "next/image";
import style from "./style.module.css";
import { usePathname } from "next/navigation";
import CustomButton from "../customButton";

const Header: FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [opportunitiesOpen, setOpportunitiesOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
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

        const DeviceItems = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About Us" },
        { href: "/services", label: "Services" },
        { href: "/blogs", label: "Blogs" },
        { href: "/associates", label: "Our Associates" },
        { href: "/warranties", label: "Extended Warranties" },
        { href: "/financing", label: "Financing" },
    ];

    return (
        <header className="w-full shadow-md">
            {/* Top Info Bar */}
            <div className="py-2 bg-[#2C3037]">
                <Container>
                    <div className={`${style.topBar}`}>
                        <div className={`flex items-center`}>
                            <div className={`${style.callBox} `}>
                                <Image
                                    src="/images/phone-call.png"
                                    alt="call"
                                    width={11}
                                    height={11}
                                    className="object-contain invert"
                                />
                            </div>
                            <div className="ml-[10px]">
                                <p className={`${style.callText}`}>
                                    <span className="text-[#DAA628]">Call Now</span>
                                    <Link href="tel:(205) 558-8284" className="text-white cursor-pointer">
                                        (205) 558-8284
                                    </Link> /
                                    <span className="text-[#DAA628]"> Toll-Free </span>
                                    <Link href="tel:1-833-935-1888" className="text-white cursor-pointer">
                                        1-833-935-1888
                                    </Link>
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center">
                            <div className={`${style.callBox}`}>
                                <Image
                                    src="/images/mail-inbox-app.png"
                                    alt="mail"
                                    width={10}
                                    height={10}
                                    className="object-contain invert"
                                />
                            </div>
                            <div className="ml-[10px]">
                                <p className={`${style.callText}`}>
                                    <span className="text-[#DAA628]">Mail Address: </span> <Link href="mailto:info@universalinspections.com" className="text-white cursor-pointer">
                                        info@universalinspections.com
                                    </Link></p>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            {/* Bottom Info Bar */}
            <div className="bg-[#273E47] py-[15px]">
                <Container>
                    <div className="flex justify-between items-center">
                        {/* logo */}
                        <div>
                            <Link href="/">
                                <Image
                                    src="/images/logo.png"
                                    alt="Logo"
                                    width={141}
                                    height={88}
                                    className="object-contain"
                                />
                            </Link>
                        </div>

                        {/* nav */}

                        <nav className={` ${style.customLg} space-x-7 ${style.navItems}`}>
                            <ul className="flex space-x-6 items-center ">
                                {menuItems.map((item) => {
                                    if (item.label === "Opportunities") {
                                        return (
                                            <li key={item.href} className={` relative`}>
                                                <div className={`relative ${style.group}`}>
                                                    <div
                                                        className="flex items-center cursor-pointer"
                                                        onMouseEnter={() => setIsHovered(true)}
                                                        onMouseLeave={() => setIsHovered(false)}
                                                    >
                                                        <span
                                                            // className={`!text-[14px]
                                                            // ${pathname === item.href
                                                            //         ? "text-white font-glacial-bold"
                                                            //         : "text-white font-glacial-regular"
                                                            //     }`}
                                                            // className="text-red-600"
                                                            className={`${style.opportunitiesText}`}
                                                        >
                                                            Opportunities
                                                        </span>
                                                        {isHovered ? (
                                                            <ChevronUp className="w-5 h-5 text-white ml-1" />
                                                        ) : (
                                                            <ChevronDown className="w-5 h-5 text-white ml-1" />
                                                        )}
                                                    </div>

                                                    <ul className={style.dropdownMenu}>
                                                        <li>
                                                            <Link href="/opportunities/dispatchers">
                                                                Dispatchers
                                                            </Link>

                                                            <Link href="/opportunities/dispatchers">
                                                                Dispatchers
                                                            </Link>
                                                            <Link href="/opportunities/dispatchers">
                                                                Dispatchers
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>


                                            </li>
                                        );
                                    } else {
                                        return (
                                            <li key={item.href}>
                                                <Link
                                                    href={item.href}
                                                    className={`!text-[14px]
                                                            ${pathname === item.href
                                                            ? "text-white font-glacial-bold"
                                                            : "text-white font-glacial-regular"
                                                        }`}>
                                                    {item.label}
                                                </Link>
                                            </li>
                                        );
                                    }
                                })}
                            </ul>
                        </nav>

                        <div className="flex items-center gap-4">
                            {/* Book Button */}
                            <div className={` ${style.customLg}`}>
                                <CustomButton title="Book an Inspection Today!" href="/bookInspection" />
                            </div>

                            {/* Mobile Menu Button */}
                            <div className={`flex items-center ${style.hideOnCustomLg}`}>
                                <button onClick={() => setMenuOpen(!menuOpen)} className="text-white flex items-center">
                                    {menuOpen ? <X className="w-8 h-8" /> : <Menu className="w-9 h-9" />}
                                </button>
                            </div>
                        </div>
                    </div>

                </Container>

                {/* Mobile Menu Panel */}
                {menuOpen && (
                    <div className={`fixed inset-0  bg-[#273E47] text-white z-50 p-4 overflow-y-auto`}>
                        <nav className="flex relative flex-col space-y-2 p-4">
                            <div className="absolute right-0">
                                <button onClick={() => setMenuOpen(!menuOpen)} className="text-white flex items-center">
                                    <X className="w-8 h-8" />
                                </button>
                            </div>
                            <ul className="flex flex-col  gap-3 pt-[50px] space-y-2">

                                {DeviceItems.map(({ href, label }) => (
                                    <li key={href} className=" text-center">

                                        <Link href={href} className="text-white  w-[100%]" onClick={() => setMenuOpen(false)}>
                                            {label}
                                        </Link>
                                    </li>
                                ))}

                                {/* Opportunities Dropdown */}
                                <li className="relative ">
                                    {/* Header button */}
                                    <button
                                        onClick={() => setOpportunitiesOpen(!opportunitiesOpen) }
                                        className="flex w-full  justify-center text-center  text-white px-4 py-2 hover:bg-[#2C4B52] rounded"
                                    >
                                        <span>Opportunities</span>
                                        <ChevronDown
                                            className={`w-4 h-4 transform transition-transform duration-300 ${opportunitiesOpen ? "rotate-180" : ""
                                                }`}
                                        />
                                    </button>

                                    {/* Accordion Content */}
                                    <div
                                        className={`overflow-hidden items-center justify-center  transition-all duration-300 ${opportunitiesOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                                            }`}
                                    >
                                        <ul className="bg-[#1F3339] rounded-b-lg">
                                            <li className="text-center">
                                                <Link
                                                    href="/opportunities/dispatchers"
                                                    className="block px-6 py-2 text-white hover:bg-[#2C4B52]"
                                                    onClick={() => {setOpportunitiesOpen(false),setMenuOpen(false)}}
                                                >
                                                    Dispatchers
                                                </Link>
                                            </li>
                                        <li className="text-center">
                                                <Link
                                                    href="/opportunities/drivers"
                                                    className="block px-6 py-2 text-white hover:bg-[#2C4B52]"
                                                    onClick={() => setOpportunitiesOpen(false)}
                                                >
                                                    Drivers
                                                </Link>
                                            </li>
                                        <li className="text-center">
                                                <Link
                                                    href="/opportunities/fleet-owners"
                                                    className="block px-6 py-2 text-white hover:bg-[#2C4B52]"
                                                    onClick={() => setOpportunitiesOpen(false)}
                                                >
                                                    Fleet Owners
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>

                            {/* Book Button */}
                            <div className="mt-4">
                                <Link
                                    href="/bookInspection"
                                    className="bg-[#DAA628] px-4 py-2 rounded text-[#2C3037] font-medium text-center flex items-center justify-center gap-2"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Book an Inspection Today! <ArrowRight className="w-5 h-5 text-white" />
                                </Link>
                            </div>
                        </nav>

                    </div>
                )}
            </div>

        </header>
    );
};

export default Header;
