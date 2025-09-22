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
      <Link href={href} className={style.button_sty}>
        {/* Text part */}
        <span className={style.textPart}>
          {title}
        </span>

        {/* Arrow part */}
        <span className={style.arrowPart}>
          <ArrowRight className="w-5 h-5 text-white" />
        </span>
      </Link>
    </div>
  );
};

export default Button;
