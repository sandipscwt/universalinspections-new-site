"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { FaStar } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import Container from "@/components/container";
import Image from "next/image";
import style from "./style.module.css";

const testimonials = [
    {
        id: 1,
        name: 'Maria L.',
        designation: 'Montgomery, Alabama',
        rating: 5,
        text: "My daughter was looking for her first car, and I wanted to make sure she was safe. We hired Universal Inspections, and honestly, it was the best money we could have spent. The technician was so thorough and really put her at ease. Universal Inspections provided her report to both of us to give us peace of mind while she’s away at college and we just couldn’t be happier with the service. She's been driving her car for months now with no issues. Thank you, Universal Inspections and a special thanks to Paul, appreciate everything you did for us!"
    },
    {
        id: 2,
        name: 'Alex P.',
        designation: 'Tuscaloosa, Alabama',
        rating: 5,
        text: "I was skeptical at first, but after a friend raved about Universal Inspections, I decided to give them a try for a used truck. I consider myself pretty good with cars but I have to say the technician was sharp, thorough, and really explained the condition of the vehicle in detail. He caught something that I had totally overlooked.  It gave me the confidence to negotiate the asking price, make the purchase and the truck has been fantastic. Definitely worth it."
    },
    {
        id: 3,
        name: 'Alex P.',
        designation: 'Tuscaloosa, Alabama',
        rating: 5,
        text: "As a senior, I've bought plenty of cars, and I've been burned many times before. Universal Inspections sent a pro who really knew his stuff. He caught a few things the dealer conveniently 'missed,' saving me a headache and a good chunk of cash. I was able to negotiate a better deal on my car and they ended up fixing some issues that would have been a problem down the road.  Highly recommend their service to anyone, especially us older folks who just want an honest deal."
    },
    {
        id: 4,
        name: 'Alex P.',
        designation: 'Tuscaloosa, Alabama',
        rating: 5,
        text: "As a senior, I've bought plenty of cars, and I've been burned many times before. Universal Inspections sent a pro who really knew his stuff. He caught a few things the dealer conveniently 'missed,' saving me a headache and a good chunk of cash. I was able to negotiate a better deal on my car and they ended up fixing some issues that would have been a problem down the road. Highly recommend their service to anyone, especially us older folks who just want an honest deal."
    }

];

export default function TestimonialsSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
        <section className="bg-[#FFFFFF] py-[clamp(30px,4vw,100px)]">
            <Container>
                <div className="text-center mb-[clamp(20px,5vw,48px)]">
                    <h2 className="text-[clamp(24px,5vw,36px)] prompt-bold text-[#2C3037]">
                        Testimonials
                    </h2>
                    <p className="text-[clamp(14px,3vw,16px)] font-glacial-regular text-[#2C3037] mt-[clamp(8px,3vw,16px)]">
                        Don't just take our word. Here's what our valued clients have to say
                    </p>
                </div>
            </Container>

            <div className={`relative pt-2 pb-1 overflow-hidden`}>
                <Swiper
                    modules={[Pagination, Autoplay]}
                    slidesPerView={1.5}
                    centeredSlides={true}
                    loop={true}
                    loopAdditionalSlides={2}
                    speed={800}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                        el: ".custom-pagination",
                        bulletClass: "custom-bullet",
                        bulletActiveClass: "custom-bullet-active",
                    }}
                    breakpoints={{
                        320: { slidesPerView: 1, spaceBetween: 16 },
                        640: { slidesPerView: 1.6, spaceBetween: 20 },
                        768: { slidesPerView: 1.6, spaceBetween: 24 },
                        1024: { slidesPerView: 2.6, spaceBetween: 30 },
                        1496: { slidesPerView: 2.6, spaceBetween: 30 },
                        1920: { slidesPerView: 4.6, spaceBetween: 32 },
                        2560: { slidesPerView: 5.6, spaceBetween: 36 },
                    }}
                    onSlideChange={(swiper) => {
                        console.log("Slide changed:", swiper.realIndex);
                        setActiveIndex(swiper.realIndex);
                    }}
                    className="testimonials-swiper"
                >
                    {testimonials.map((testimonial, index) => {
                        const isActive = index === activeIndex;
                        return (
                            <SwiperSlide key={index} className={`flex justify-center  ${style.swiper_item}`}>
                                <div className={`bg-gray-50 rounded-[16px] shadow-lg flex flex-col justify-between  py-10 px-6
                                    border border-[#DAA6284D] transition-transform duration-500 mt-2
                                    ${isActive ? "scale-110 opacity-100 z-10 mt-5 mb-5" : "scale-90 opacity-60"}`}>
                                    <div className="flex justify-center space-x-3">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <FaStar key={i} className="w-5 h-5 text-[#FFC107]" />
                                        ))}
                                    </div>
                                    <div className={style.colon_img_top}>
                                        <Image
                                            src="/images/swiper_top.png"
                                            alt="Top decoration"
                                            height={32}
                                            width={44}
                                        />
                                    </div>
                                    <div className="flex flex-col items-center text-center p-6">
                                        <blockquote className="text-[#2C3037] text-[clamp(13px,3vw,15px)] leading-[clamp(18px,4vw,22px)] font-glacial-regular">
                                            {testimonial.text}
                                        </blockquote>
                                    </div>
                                    <div className={style.colon_img_bottom}>
                                        <Image
                                            src="/images/swiper_bottom.png"
                                            alt="Bottom decoration"
                                            height={32}
                                            width={44}
                                        />
                                    </div>
                                    <div className="text-center mt-2">
                                        <h4 className="text-[#2C3037] font-semibold text-[clamp(14px,3vw,16px)]">
                                            {testimonial.name}
                                        </h4>
                                        <p className="text-[#DAA628] text-[clamp(12px,3vw,14px)]">
                                            {testimonial.designation}
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>

                <div className="custom-pagination flex justify-center mt-3"></div>
            </div>

            <style jsx global>{`
                .testimonials-swiper {
                    overflow: visible !important;
                }
                .testimonials-swiper .swiper-pagination {
                    display: none !important;
                }
                .custom-pagination {
                    text-align: center;
                }
                .custom-bullet {
                    width: 8px;
                    height: 8px;
                    background: #DAA62833;
                    border-radius: 50%;
                    margin: 0 4px;
                    display: inline-block;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }
                .custom-bullet-active {
                    width: 12px;
                    height: 12px;
                    background: #DAA628;
                    border-radius: 50%;
                    margin: 0 4px;
                    transition: all 0.3s ease;
                }
            `}</style>
        </section>
    );
}
