"use client";
import React, { useState } from "react";
import style from "./style.module.css";
import Container from "@/components/container";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { MdCall, MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import InputfileComponent from "@/components/formFields/InputfileComponent";
import TextArea from "@/components/formFields/TextArea";
import Button from "@/components/layout/button";


const ContactSection = () => {
    const [message, setMessage] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit = () => {
        if (!message.trim()) {
            setError(true);
        } else {
            setError(false);
            alert(`Message submitted: ${message}`);
        }
    }
    
    return (
        <section className={`${style.sectionContainer} bg-[#ffffff]`}>
            <Container>
                {/* Section Title */}
                <div className={`${style.titleContainer} text-center mb-10`}>
                    <h2>
                        Get in Touch with Us
                    </h2>
                </div>

                {/* Wrapper */}
                <div className={`${style.contact_wrapper}`}>
                    {/* Left Section - Contact Form */}
                    <div className="flex-1 min-w-[280px]">
                        <h3
                            className={`${style.massageTitle}`}
                        >
                            Send Us Message
                        </h3>
                        <p
                            className={`${style.massagesubTitle}`}
                        >
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
                        </p>

                        <form>
                            {/* Name */}
                            <div>
                                <InputfileComponent
                                    placeholder="Name"
                                    required
                                    icon={<FaUser className="text-[#273E47]" />}
                                />
                            </div>

                            {/* Phone */}
                            <div className=" mt-[20px]  gap-2 grid grid-cols-1 sm:grid-cols-2">
                                <InputfileComponent
                                    placeholder="Email"
                                    required
                                    icon={<MdEmail className="text-[#273E47]" />}
                                />

                                <InputfileComponent
                                    placeholder="Number"
                                    required
                                    icon={<MdCall className="text-[#273E47]" />}
                                />
                            </div>

                            {/* Message */}
                            <div className="mt-[20px]">
                                <TextArea
                                    placeholder="Message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    error={error}
                                />
                            </div>


                            {/* Submit */}
                            <div className="p-0 mt-[20px] flex items-start">
                                <Button title="Submit" href="/book" />
                            </div>
                        </form>
                    </div>

                    {/* Right Section - Contact Information */}
                    <div className="flex-1 min-w-[280px] relative overflow-hidden rounded-lg">
                        {/* Background Image */}
                        <div className={`${style.bannershow} relative w-full h-full`}>
                            <Image
                                src="/images/contactus/address_bg.png"
                                alt="Dispatcher illustration"
                                // layout="responsive"
                                fill
                                className="absolute w-[100%] h-[100%] object-cover rounded-lg"
                            />

                            {/* Overlay Content */}
                            <div className="relative h-[100%] flex  flex-col justify-center p-6 sm:p-8 text-white">
                                <h3
                                    className={`${style.contactTitle}`}
                                >
                                    Contact Us
                                </h3>
                                <p
                                    className={`${style.address} py-4`}
                                >
                                    Contact us today to schedule your inspection or learn more
                                    about our services.
                                </p>

                                {/* Contact Info */}
                                <div className="space-y-3">
                                    <div className="flex items-center space-x-2">
                                        <div className={`${style.pinBox}`}>
                                            <MapPin className="w-4 h-4 text-[#2A2D34]" />
                                        </div>
                                        <span>P.O. Box 7, Woodstock, AL 35188</span>
                                    </div>

                                    <div className="flex items-center space-x-2">
                                        <div className={`${style.pinBox}`}>
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
                                        <div className={`${style.pinBox}`}>
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

                                {/* Social Icons */}
                                <div className="mt-6">
                                    <span
                                        className={`${style.followus}`}
                                    >
                                        Follow Us On :
                                    </span>
                                    <div className="flex space-x-4 mt-3">
                                        {["instagram", "facebook", "tik-tok", "linkedin"].map(
                                            (icon, i) => (
                                                <div
                                                    key={i}
                                                    className="p-3 rounded-md bg-[#DAA628] hover:bg-[#C97B2F] transition"
                                                >
                                                    <Image
                                                        src={`/images/${icon}.png`}
                                                        alt={icon}
                                                        width={16}
                                                        height={16}
                                                        className="object-contain invert"
                                                    />
                                                </div>
                                            )
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`${style.mapview}`}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58948.406749191934!2d88.4426!3d22.568799999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02750e54b44c0d%3A0x3182cd1bd4b1e8da!2sAquatica%20Banquet%20Resort%20%26%20Water%20Park!5e0!3m2!1sen!2sin!4v1760082887319!5m2!1sen!2sin" loading="lazy" ></iframe>
                </div>

            </Container>
        </section>
    );
};

export default ContactSection;
