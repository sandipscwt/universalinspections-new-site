// components/Button.tsx
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  title: string;
  href: string;
}

const Button = ({ title, href }: ButtonProps) => {
  return (
    <div className="inline-flex rounded-md overflow-hidden text-[clamp(12px,4vw,14px)]">
      <Link href={href} className="flex cursor-pointer">
        <span className="bg-[#DAA628] hover:bg-[#F4A300] px-5 py-3 text-[#2C3037] flex items-center">
          {title}
        </span>
        <span className="bg-[#BD632F] rounded-r-md hover:bg-[#e77026] px-4 py-3 flex items-center justify-center">
          <ArrowRight className="w-5 h-5 text-white" />
        </span>
      </Link>
    </div>
  );
};

export default Button;
