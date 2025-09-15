'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Star } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';
import Container from '@/components/container';

const testimonials = [
    {
        id: 1,
        name: 'Sarah L.',
        designation: 'Photography Enthusiast',
        rating: 5,
        text: "My daughter was looking for her first car, and I wanted to make sure she was safe. We hired Universal Inspections, and honestly, it was the best money we could have spent. The technician was so thorough and really put her at ease. Universal Inspections provided her report to both of us to give us peace of mind while she’s away at college and we just couldn’t be happier with the service. She's been driving her car for months now with no issues. Thank you, Universal Inspections and a special thanks to Paul, appreciate everything you did for us!"
    },
    {
        id: 2,
        name: 'Maria K.',
        designation: 'Small Business Owner',
        rating: 5,
        text: "As a senior, I've bought plenty of cars, and I've been burned many times before. Universal Inspections sent a pro who really knew his stuff. He caught a few things the dealer conveniently 'missed,' saving me a headache and a good chunk of cash. I was able to negotiate a better deal on my car and they ended up fixing some issues that would have been a problem down the road.  Highly recommend their service to anyone, especially us older folks who just want an honest deal."
    },
    {
        id: 3,
        name: 'James R.',
        designation: 'Engineer',
        rating: 5,
        text: "I was skeptical at first, but after a friend raved about Universal Inspections, I decided to give them a try for a used truck. I consider myself pretty good with cars but I have to say the technician was sharp, thorough, and really explained the condition of the vehicle in detail. He caught something that I had totally overlooked.  It gave me the confidence to negotiate the asking price, make the purchase and the truck has been fantastic. Definitely worth it."
    },
    {
        id: 4,
        name: 'Alex P.',
        designation: 'Designer',
        rating: 5,
        text: "I was skeptical at first, but after a friend raved about Universal Inspections, I decided to give them a try for a used truck. I consider myself pretty good with cars but I have to say the technician was sharp, thorough, and really explained the condition of the vehicle in detail. He caught something that I had totally overlooked.  It gave me the confidence to negotiate the asking price, make the purchase and the truck has been fantastic. Definitely worth it."
    },
    {
        id: 5,
        name: 'Lina H.',
        designation: 'Teacher',
        rating: 5,
        text: "I was skeptical at first, but after a friend raved about Universal Inspections, I decided to give them a try for a used truck. I consider myself pretty good with cars but I have to say the technician was sharp, thorough, and really explained the condition of the vehicle in detail. He caught something that I had totally overlooked.  It gave me the confidence to negotiate the asking price, make the purchase and the truck has been fantastic. Definitely worth it."
    }
];



export default function TestimonialsSection() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="bg-[#FFFFFF] py-[clamp(30px,4vw,100px)] ">


            <div
                className=" mx-auto "
            >
                <Container>
                    {/* Header */}
                    <div className="text-center prompt-bold mb-[clamp(20px,5vw,48px)]">
                        <h2 className="text-[clamp(24px,5vw,36px)] font-bold text-[#2C3037]">
                            Testimonials
                        </h2>
                        <p className="text-[clamp(14px,3vw,16px)] font-glacial-regular text-[#2C3037] mt-[clamp(8px,3vw,16px)]">
                            Don't just take our word. Here's what our valued clients have to say
                        </p>
                    </div>
                </Container>


                {/* Swiper Slider */}
                <div className="relative">
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        slidesPerView={1.5}   // 👈 key change: show 1.5 slides
                        centeredSlides={true}
                        loop={true}
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
                            320: {
                                slidesPerView: 1,   // full card only on small screens
                                spaceBetween: 16,
                            },
                            640: {
                                slidesPerView: 1.5, // neighbors peek 50%
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 1.5,
                                spaceBetween: 24,
                            },
                            1024: {
                                slidesPerView: 2.5, // 2 full + 1 neighbor
                                spaceBetween: 30,
                            },
                            1496: {
                                slidesPerView: 2.5, // 3 full + 1 neighbor
                                spaceBetween: 30,
                            },
                            1920: {
                                slidesPerView: 4.5, // 4 full + 1 neighbor (for full HD / ultrawide)
                                spaceBetween: 32,
                            },
                            2560: {
                                slidesPerView: 5.5, // 5 full + 1 neighbor (for 2K/4K monitors)
                                spaceBetween: 36,
                            },
                        }}


                        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                        className="testimonials-swiper"
                    >
                        {testimonials.map((testimonial, index) => {
                            const isActive = index === activeIndex;
                            return (
                                <SwiperSlide key={testimonial.id} className="flex justify-center">
                                    <div
                                        className={`bg-gray-50 rounded-[1px] mt-0.5 p-6 md:p-8 shadow-lg flex flex-col justify-between 
    border border-[#DAA6284D] transition-transform duration-500 w-full max-w-[700px]  min-w-[440px]
    ${isActive ? "scale-105 opacity-100 z-10" : "scale-95 opacity-60"}`}
                                    >
                                        {/* Stars */}
                                        <div className="flex justify-center mb-4">
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <Star key={i} className="w-5 h-5 text-[#FFC107] fill-current" />
                                            ))}
                                        </div>

                                        {/* Quote */}
                                        <blockquote className="text-[#2C3037] font-glacial-regular text-[clamp(14px,3vw,16px)] leading-relaxed mb-6 text-center ">
                                            "{testimonial.text}"
                                        </blockquote>

                                        {/* Name + Designation */}
                                        <div className="text-center">
                                            <h4 className="prompt-bold  text-[#2C3037] mt-6 text-[clamp(14px,3vw,16px)]">
                                                {testimonial.name}
                                            </h4>
                                            <p className="text-[#DAA628] font-glacial-regular  text-[clamp(12px,3vw,14px)]">
                                                {testimonial.designation}
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>


                    {/* Custom Pagination */}
                    <div className="custom-pagination flex justify-center mt-6"></div>
                </div>

            </div>

            {/* Custom CSS Styles */}
            <style jsx global>{`
                /* Hide default Swiper pagination */
                .testimonials-swiper .swiper-pagination {
                    display: none !important;
                }

                /* Custom pagination container styling */
                .custom-pagination {
                    text-align: center;
                }

                /* Default inactive bullet styling */
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

                /* Active bullet styling */
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
