import Image from "next/image";
import React from "react";
import style from "./style.module.css"


const Herosection: React.FC = () => {
  return (
    <section
      className={`relative w-full bg-contain bg-center`}
    >

      <div className={`   ${style.heroSection}`}>
        <Image
          src="/images/associates/associate_d_bg.png"
          alt="Background"
          fill
          className="object-fit absolute w-[100%] h-[100%]"
          priority
        />
      </div>

    
    </section>
  );
};

export default Herosection;
