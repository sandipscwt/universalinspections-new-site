import Image from "next/image";
import React from "react";
import style from "./style.module.css"


const Herosection: React.FC = () => {
  return (
    <section
      className={`relative w-full bg-contain bg-center ${style.heroSection}`}
    >

      <div className="absolute inset-0 z-0">
        <Image
          src="/images/associates/associate_d_bg.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>

    
    </section>
  );
};

export default Herosection;
