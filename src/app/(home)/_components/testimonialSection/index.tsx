"use client";

import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import Container from "@/components/container";
import Image from "next/image";
import style from "./style.module.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
    {
        id: 1,
        name: "Maria L.",
        designation: "Montgomery, Alabama",
        rating: 5,
        text: `My daughter was looking for her first car, and I wanted to make sure she was safe. We hired Universal Inspections, and honestly, it was the best money we could have spent. The technician was so thorough and really put her at ease. Universal Inspections provided her report to both of us to give us peace of mind while she&apos;s away at college and we just couldn&apos;t be happier with the service. She's been driving her car for months now with no issues. Thank you, Universal Inspections and a special thanks to Paul, appreciate everything you did for us!`,
    },
    {
        id: 2,
        name: "Alex P.",
        designation: "Tuscaloosa, Alabama",
        rating: 5,
        text: `I was skeptical at first, but after a friend raved about Universal Inspections, I decided to give them a try for a used truck. I consider myself pretty good with cars but I have to say the technician was sharp, thorough, and really explained the condition of the vehicle in detail. He caught something that I had totally overlooked. It gave me the confidence to negotiate the asking price, make the purchase and the truck has been fantastic. Definitely worth it.`,
    },
    {
        id: 3,
        name: "Ruth T.",
        designation: "Birmingham, Alabama",
        rating: 5,
        text: `As a senior, I&apos;ve bought plenty of cars, and I&apos;ve been burned many times before. Universal Inspections sent a pro who really knew his stuff. He caught a few things the dealer conveniently &apos;missed,&apos; saving me a headache and a good chunk of cash. I was able to negotiate a better deal on my car and they ended up fixing some issues that would have been a problem down the road. Highly recommend their service to anyone, especially us older folks who just want an honest deal.`,
    },
    {
        id: 4,
        name: "Ruth T.",
        designation: "Birmingham, Alabama",
        rating: 5,
        text: `As a senior, I&apos;ve bought plenty of cars, and I&apos;ve been burned many times before. Universal Inspections sent a pro who really knew his stuff. He caught a few things the dealer conveniently &apos;missed,&apos; saving me a headache and a good chunk of cash. I was able to negotiate a better deal on my car and they ended up fixing some issues that would have been a problem down the road. Highly recommend their service to anyone, especially us older folks who just want an honest deal.`,
    },
    {
        id: 5,
        name: "Ruth T.",
        designation: "Birmingham, Alabama",
        rating: 5,
        text: `As a senior, I&apos;ve bought plenty of cars, and I&apos;ve been burned many times before. Universal Inspections sent a pro who really knew his stuff. He caught a few things the dealer conveniently &apos;missed,&apos; saving me a headache and a good chunk of cash. I was able to negotiate a better deal on my car and they ended up fixing some issues that would have been a problem down the road. Highly recommend their service to anyone, especially us older folks who just want an honest deal.`,
    }
];

export default function TestimonialsSection() {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 700,
        centerMode: true,
        centerPadding: "25%",
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        appendDots: (dots: React.ReactNode) => (
            <div className="custom-pagination">
                <ul className="flex justify-center space-x-2 mt-[-60px]">{dots}</ul>
            </div>
        ),
        customPaging: () => <div className="custom-bullet"></div>,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: "20%",
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: "10%",
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                    centerPadding: "0px",
                },
            },

        ],
    };


    return (
        <section className="bg-[#FFFFFF] py-[clamp(30px,4vw,100px)]">
            <Container>
                <div className="text-center mb-[clamp(15px,5vw,30px)] ">
                    <h2 className="text-[clamp(24px,5vw,36px)] prompt-bold text-[#2C3037]">
                        Testimonials
                    </h2>
                    <p className="text-[clamp(14px,3vw,16px)] font-glacial-regular text-[#2C3037] mt-[clamp(8px,3vw,16px)]">
                        Don&apos;t just take our word. Here&apos;s what our valued clients have to say
                    </p>
                </div>
            </Container>

            <div className="relative  pb-1 overflow-hidden ">
                <Slider {...settings}>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="flex justify-center items-center">
                            <div
                                className={`testimonial-card bg-gray-50 rounded-[16px] shadow-lg flex flex-col justify-between py-10 px-[52px] border border-[#DAA6284D] text-center transition-all duration-500`}
                            >

                                <div className="flex justify-center  space-x-2 mb-2">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <FaStar key={i} className="w-5 h-5 text-[#FFC107]" />
                                    ))}
                                </div>
                                <div className={style.colon_img_top}>
                                    <Image
                                        src="/images/swiper_top.png"
                                        alt="Top quote"
                                        height={32}
                                        width={44}
                                    />
                                </div>
                                <blockquote className="text-[#2C3037] text-[clamp(13px,3vw,15px)] leading-[clamp(18px,4vw,22px)] font-glacial-regular px-2 mt-4">
                                    {testimonial.text}
                                </blockquote>
                                <div className={style.colon_img_bottom}>
                                    <Image
                                        src="/images/swiper_bottom.png"
                                        alt="Bottom quote"
                                        height={32}
                                        width={44}
                                    />
                                </div>
                                <div className="mt-4">
                                    <h4 className={`${style.userName}`}>
                                        {testimonial.name}
                                    </h4>
                                    <p className={`${style.userAddress}`}>
                                        {testimonial.designation}
                                    </p>
                                </div>

                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

            <style jsx global>{`
  .testimonial-card {
    transform: scale(0.9);
    opacity: 0.6;
  }

  .slick-center .testimonial-card {
    transform: scale(1.05);
    opacity: 1;
    z-index: 10;
    margin-top: 20px;
    margin-bottom: 40px;
    margin: 15px;
  }

  .custom-pagination {
    position: relative;
    z-index: 20;
    margin-top: 40px;
  }

  .custom-pagination ul {
    display: flex !important;
    justify-content: center;
    padding: 0;
    margin: 0;
    list-style: none;
  }

  .custom-bullet {
    width: 8px;
    height: 8px;
    background: #daa62833;
    border-radius: 50%;
    display: inline-block;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .slick-dots li {
    margin: 0 4px;
  }

  .slick-dots li.slick-active div {
    width: 12px !important;
    height: 12px !important;
    background: #daa628 !important;
  }

  .slick-track {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom:57px;

  }
     @media (max-width: 576px) {
    .slick-track  {
        display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom:20px;

    }
}
`}</style>

        </section>
    );
}
