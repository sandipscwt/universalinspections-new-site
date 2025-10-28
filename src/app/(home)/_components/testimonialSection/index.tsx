"use client";

import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import Container from "@/components/container";
import Image from "next/image";
import style from "./style.module.css";
import React, { useEffect, useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Testimonial {
  id: number;
  customer_name: string;
  testimonial_title: string;
  rating: number;
  content: string;
}

interface TestimonialsData {
  testimonials_title: string;
  testimonials_content: string;
  testimonials: Testimonial[];
}

interface Props {
  data: TestimonialsData;
}

const TestimonialsSection: React.FC<Props> = ({ data }) => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getCenterPadding = () => {
    if (windowWidth > 1200) return "25%";
    if (windowWidth > 992) return "20%";
    if (windowWidth > 768) return "15%";
    if (windowWidth > 567) return "10%";
    return "5%";
  };

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 700,
    centerMode: true,
    centerPadding: getCenterPadding(),
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    key: windowWidth,
    appendDots: (dots: React.ReactNode) => (
      <div className="custom-pagination">
        <ul className="flex justify-center space-x-2 mt-[-60px]">{dots}</ul>
      </div>
    ),
    customPaging: () => <div className="custom-bullet"></div>,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 1, centerMode: true, centerPadding: "20%" } },
      { breakpoint: 960, settings: { slidesToShow: 1, centerMode: true, centerPadding: "5%" } },
      { breakpoint: 768, settings: { slidesToShow: 1, centerMode: true, centerPadding: "10%" } },
      { breakpoint: 576, settings: { slidesToShow: 1, centerMode: true, centerPadding: "15px" } },
    ],
  };

  return (
    <section className="bg-[#FFFFFF] py-[clamp(30px,4vw,100px)]">
      <Container>
        <div className="text-center mb-[clamp(15px,5vw,30px)]">
          <h2 className="text-[clamp(24px,5vw,36px)] prompt-bold text-[#2C3037]">
            {data.testimonials_title}
          </h2>
          <p className="text-[clamp(14px,3vw,16px)] font-glacial-regular text-[#2C3037] mt-[clamp(8px,3vw,16px)]"
             dangerouslySetInnerHTML={{ __html: data.testimonials_content }} />
        </div>
      </Container>

      <div className="relative pb-1 overflow-hidden">
        <Slider {...settings}>
          {data.testimonials.map((testimonial) => (
            <div key={testimonial.id} className="flex justify-center items-center">
              <div
                className={`testimonial-card bg-gray-50 rounded-[16px] shadow-lg flex flex-col justify-between py-[clamp(30px,3vw,40px)] px-[clamp(15px,4vw,52px)] border border-[#DAA6284D] text-center transition-all duration-500`}
              >
                <div className="flex justify-center space-x-2 mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="w-5 h-5 text-[#FFC107]" />
                  ))}
                </div>

                <div className={style.colon_img_top}>
                  <Image src="/images/swiper_top.png" alt="Top quote" height={32} width={44} />
                </div>

                <blockquote className="text-[#2C3037] text-[clamp(13px,3vw,15px)] leading-[clamp(18px,4vw,22px)] font-glacial-regular px-2 mt-4"
                           dangerouslySetInnerHTML={{ __html: testimonial.content }} />

                <div className={style.colon_img_bottom}>
                  <Image src="/images/swiper_bottom.png" alt="Bottom quote" height={32} width={44} />
                </div>

                <div className="mt-4">
                  <h4 className={`${style.userName}`}>{testimonial.customer_name}</h4>
                  <p className={`${style.userAddress}`}>{testimonial.testimonial_title}</p>
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
          margin-bottom: 57px;
        }
        @media (max-width: 576px) {
          .slick-track {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 50px;
          }
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;
