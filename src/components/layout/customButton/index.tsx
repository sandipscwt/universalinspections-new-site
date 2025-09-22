import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface CustomButtonProps {
  title: string;
  href: string;
}

const CustomButton = ({ title, href }: CustomButtonProps) => {
  return (
    <div className="inline-flex">
      <Link href={href} className="flex w-[258px] h-[52px] rounded-[8px] overflow-hidden group">
        {/* Left (text) section */}
        <span
          className="
            flex items-center justify-center 
            w-[206px] h-[52px] 
            text-[#2C3037] text-[14px] font-glacial-regular 
            bg-[#FDCB47] 
            transition-colors duration-200 
            group-hover:bg-[#D16728] group-hover:text-white
          "
        >
          {title}
        </span>

        {/* Right (arrow) section */}
        <span className="flex items-center justify-center w-[52px] h-[52px] bg-[#D16728] rounded-r-[8px]">
          <ArrowRight className="w-5 h-5 text-white" />
        </span>
      </Link>
    </div>
  );
};

export default CustomButton;
