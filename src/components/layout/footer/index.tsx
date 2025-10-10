"use client";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import Container from "@/components/container";
import style from "./style.module.css";


const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-[clamp(25px,4vw,70px)]">
            <Container className="space-y-10 ">
                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-[40%_23%_30%] gap-6 md:gap-8">
                    {/* Logo and Contact (40%) */}
                    <div className="space-y-4 w-full">
                        <div className="flex items-center space-x-2">
                            <Image src="/images/logo.png" alt="Logo" width={100} height={20} />
                        </div>
                        <h3 className="prompt-bold text-[clamp(12px,4vw,16px)] text-white">Contact Us</h3>
                        <div className="space-y-2 text-sm font-glacial-regular">
                            <div className="flex items-center space-x-2">
                                <div className="px-1 py-1 rounded bg-[#DAA628]">
                                    <MapPin className="w-4 h-4  text-[#2A2D34]" />
                                </div>
                                <span>P.O. Box 7, Woodstock, AL 35188</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="px-1 py-1 rounded bg-[#DAA628]">
                                    <Image
                                        src="/images/phone-call.png"
                                        alt="call"
                                        width={14}
                                        height={14}
                                        className="object-contain"
                                    />
                                </div>
                                <span>(205) 558-8284 / 1-833-935-1888 (Toll-Free)</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="px-1 py-1 rounded bg-[#DAA628]">
                                    <Image
                                        src="/images/mail-inbox-app.png"
                                        alt="mail"
                                        width={14}
                                        height={14}
                                        className="object-contain"
                                    />
                                </div>
                                <span>info@universalspections.com</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links (20%) */}
                    <div className="w-full">
                        <h3 className="prompt-bold text-[clamp(12px,4vw,16px)] mb-4 text-white">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="#" className="hover:text-white font-glacial-regular flex items-center">
                                    <span className="w-2 h-2 bg-yellow-500 rounded-b-xs mr-2"></span>Sample Report
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-white font-glacial-regular flex items-center">
                                    <span className="w-2 h-2 bg-yellow-500 rounded-b-xs mr-2"></span>About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-white font-glacial-regular flex items-center">
                                    <span className="w-2 h-2 bg-yellow-500 rounded-b-xs mr-2"></span>Services
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-white font-glacial-regular flex items-center">
                                    <span className="w-2 h-2 bg-yellow-500 rounded-b-xs mr-2"></span>Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-white font-glacial-regular flex items-center">
                                    <span className="w-2 h-2 bg-yellow-500 rounded-b-xs mr-2"></span>Terms & Conditions
                                </Link>
                            </li>
                            <li>
                                <Link href="/contactUs" className="hover:text-white font-glacial-regular flex items-center">
                                    <span className="w-2 h-2 bg-yellow-500 rounded-b-xs mr-2"></span>Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Stay In Touch (32%) */}
                    <div className="w-full">
                        <h3 className=" prompt-bold text-[clamp(12px,4vw,16px)] mb-4 text-white">Stay In Touch</h3>
                        <p className={`text-sm font-glacial-regular mb-4 ${style.clamp}`}>
                            Gain a competitive edge in vehicle transactions. Stay informed about the latest inspection technologies, best practices, and industry insights relevant to pre-purchase, extended warranty, and insurance claim inspections. Key findings newsletter.
                        </p>

                        <div className="w-full items-start rounded border-2 border-[#DAA628] px-1 py-1 bg-white">
                            <form className="flex flex-row w-full">
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="px-2 py-1 rounded-l-md bg-white text-white placeholder-gray-400 focus:outline-none w-full text-sm"
                                />
                                <button
                                    type="submit"
                                    className="bg-[#BD632F] hover:bg-[#d46b2f] px-3 py-1.5 rounded-r-md text-white flex items-center justify-center w-auto text-sm"
                                >
                                    <Image
                                        src="/images/send_mail.png"
                                        alt="send"
                                        width={16}
                                        height={16}
                                        className="object-contain"
                                    />
                                </button>
                            </form>
                        </div>


                        <div className="mt-6 flex space-x-4 lg:items-end items-start gap-2 flex-col lg:flex-row">
                            <span className="text-[clamp(12px,4vw,16px)] prompt-bold">Follow Us On :</span>
                            <div className="flex space-x-4">
                                <div className="px-3 py-3 rounded bg-[#DAA628]">
                                    <Image
                                        src="/images/instagram.png"
                                        alt="instagram"
                                        width={16}
                                        height={16}
                                        className="object-contain invert"
                                    />
                                </div>
                                <div className="px-3 py-3 rounded bg-[#DAA628]">
                                    <Image
                                        src="/images/facebook.png"
                                        alt="facebook"
                                        width={16}
                                        height={16}
                                        className="object-contain invert"
                                    />
                                </div>
                                <div className="px-3 py-3 rounded bg-[#DAA628]">
                                    <Image
                                        src="/images/tik-tok.png"
                                        alt="tik-tok"
                                        width={16}
                                        height={16}
                                        className="object-contain invert"
                                    />
                                </div>
                                <div className="px-3 py-3 rounded bg-[#DAA628]">
                                    <Image
                                        src="/images/linkedin.png"
                                        alt="linkedin"
                                        width={16}
                                        height={16}
                                        className="object-contain invert"
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-700 pt-4 text-center text-sm font-glacial-regular text-white">
                    ©2025<span className="text-[#DAA628] ml-1">Universal Inspections.</span> All rights reserved - Universal Inspections
                </div>
            </Container>
        </footer>

    );
};



export default Footer;
