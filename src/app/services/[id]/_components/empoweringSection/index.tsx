import Container from "@/components/container";
import Image from "next/image";
import HtmlRender from "@/components/HtmlRender";
import style from "./style.module.css";

interface ServiceDetailsProps {
  data: {
    id: number;
    name: string;
    banner_image: string;
    file_type: string;
    icon: string;
    image: string;
    short_content: string;
    content: string;
    status: number;
    slug: string;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
  };
}

const EmpoweringSection: React.FC<ServiceDetailsProps> = ({ data }) => {
  const getFullImageUrl = (path: string) => {
    if (!path) return "/images/blog/blog_bg.png";
    if (path.startsWith("http")) return path;
    return `${process.env.NEXT_PUBLIC_IMAGE_URL}/${path}`;
  };

  return (
    <section className="bg-white py-[clamp(30px,4vw,100px)] w-full">
      <Container>
        <div className="relative w-full">
          {/* LEFT IMAGE */}
          <div className="md:float-left md:w-[45%] w-full md:mr-8 mb-6">
            <Image
              src={data?.image ? getFullImageUrl(data.image) : ""}
              alt={data?.name}
              width={700}
              height={500}
              className="object-cover w-full h-auto rounded-xl"
              unoptimized
            />
          </div>

             <div className={`sectionContentli ${style.sectionlist}`}>
            <HtmlRender htmlString={data?.content ?? ""} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default EmpoweringSection;
