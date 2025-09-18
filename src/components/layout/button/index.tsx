import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import style from "./style.module.css";

interface ButtonProps {
  title: string;
  href: string;
}

const Button = ({ title, href }: ButtonProps) => {
  return (
    <div className="inline-flex rounded-md overflow-hidden text-[clamp(12px,4vw,14px)]">
      <Link href={href} className={`flex cursor-pointer ${style.button_sty}`}>
        {/* Text part */}
        <span className="bg-[#DAA628] text-[#2C3037] flex items-center justify-center w-[128px] h-[52px]">
          {title}
        </span>

        {/* Arrow part */}
        <span className="bg-[#BD632F] flex items-center justify-center w-[52px] h-[52px]">
          <ArrowRight className="w-5 h-5 text-white" />
        </span>
      </Link>
    </div>
  );
};

export default Button;
