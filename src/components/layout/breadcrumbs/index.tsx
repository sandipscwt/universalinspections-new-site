import Link from "next/link";
import React from "react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  separator?: React.ReactNode;
  className?: string;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  items,
  separator = "›",
  className = "",
}) => {
  if (!items || items.length === 0) return null;

  return (
    <nav className={`text-sm ${className}`} aria-label="Breadcrumb">
      <ol className="flex items-center flex-wrap">
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={idx} className="flex items-center">
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="text-white text-[clamp(16px,4vw,22px)] font-glacial-regular"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className={`${
                    isLast ? "text-white text-[clamp(16px,4vw,22px)] font-glacial-bold" : "text-white"
                  }`}
                  aria-current={isLast ? "page" : undefined}
                >
                  {item.label}
                </span>
              )}

              {!isLast && (
                <span className="mx-1.5 text-white">{separator}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
