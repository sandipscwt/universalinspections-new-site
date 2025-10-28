"use client";

import Container from '@/components/container';
import Image from 'next/image';
import React from 'react';
import style from './style.module.css';
import Button from '@/components/layout/button';

interface WarrantyData {
  warranty_inspections_heading: string;
  warranty_inspections_content: string;
  warranty_inspections_background_image: string;
}

interface Props {
  data: WarrantyData;
}

const WarrantyInspection: React.FC<Props> = ({ data }) => {
  if (!data) return null;

    const getFullImageUrl = (path: string) => {
  if (!path) return "";
  if (path.startsWith("http")) return path;
  if (path.startsWith("/")) return path;
  return `${process.env.NEXT_PUBLIC_IMAGE_URL}/${path}`;
};

  return (
    <section className="pt-[clamp(15px,4vw,0px)] bg-[linear-gradient(to_bottom,#F8F8F8_50%,#FFFFFF_50%)]">
      <Container>
        <div className={`relative py-[clamp(40px,4vw,82px)] px-[clamp(8px,4vw,86px)] rounded-lg overflow-hidden ${style.bgGradient}`}>
          
          {/* Background Image */}
          {data.warranty_inspections_background_image && (
            <div className="absolute inset-0 z-0">
              <Image
                src={data?.warranty_inspections_background_image?getFullImageUrl(data?.warranty_inspections_background_image):""}
                alt="Warranty background"
                fill
                className="object-cover opacity-30"
                priority
                unoptimized
              />
            </div>
          )}

          {/* Text Content */}
          <div className={`${style.ContentCard} mx-auto space-y-4 relative z-10`}>
            <h2 className={`${style.contenttitle}`}>
              {data.warranty_inspections_heading}
            </h2>
            <p className={`${style.contentSubtitle} lg:w-[96%]`} dangerouslySetInnerHTML={{ __html: data.warranty_inspections_content }} />
            <div className="p-0 pt-[20px]">
              <Button title="Get Started" href="/bookInspection" />
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default WarrantyInspection;
