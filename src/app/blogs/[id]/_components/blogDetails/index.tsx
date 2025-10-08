import Container from '@/components/container';
import React from 'react';
import style from './style.module.css';
import Image from 'next/image';
import { Clock } from 'lucide-react';
import HtmlRender from '@/components/HtmlRender';
import PvrButton from '@/components/layout/prvButton';
import NextButton from '@/components/layout/nextButton';

function BlogDetails() {

    const blogDetails = `<ul>
  <li>
    Mauris volutpat mauris eget volutpat imperdiet. Nunc tortor lorem, faucibus eu tincidunt in, egestas vel ante. Quisque malesuada tincidunt lorem, nec vehicula leo luctus ac. Curabitur fermentum augue diam, non cursus arcu pellentesque at. Suspendisse scelerisque magna velit. Mauris ut lacinia justo. Phasellus ultrices mauris nisl, vel convallis est posuere a. Cras id risus semper,
  </li>

  <li>
    In ullamcorper ligula at mi facilisis dapibus. Curabitur nec nibh sit amet enim fringilla vestibulum in id tellus. Fusce tortor nisi, consequat sit amet metus eu, posuere tincidunt mi. Quisque tristique interdum ligula, non sodales nulla vestibulum et. Morbi ante diam, dapibus vitae enim vel, volutpat faucibus risus. Integer maximus sed risus ut fermentum. Phasellus dignissim nisl mi, sit amet posuere mauris tincidunt eget. Phasellus porttitor nulla vitae magna accumsan mollis. Morbi consequat ex nec risus lacinia, vitae ultrices risus venenatis.
  </li>

  <li>
    Donec ut lacinia nibh. Nam eget interdum nisl. Vivamus ut elementum libero. Nulla posuere lectus ipsum. Fusce vel turpis vitae leo scelerisque mattis. Nulla ornare pulvinar feugiat. Nam ullamcorper ex in dolor accumsan sollicitudin. Nulla sit amet ligula quis metus euismod ullamcorper. Suspendisse eu magna neque. Praesent feugiat semper purus,
  </li>

  <li>
    Suspendisse potenti. Aliquam id luctus tortor. Sed consectetur vitae sapien id condimentum. Integer imperdiet erat lorem, vulputate porta dolor porttitor et. Proin sodales vehicula pharetra. Sed id vestibulum sapien. Vestibulum arcu lacus, mattis sit amet arcu feugiat, egestas iaculis velit. Vestibulum pretium, arcu sed facilisis elementum, sem turpis vehicula nisl, ac cursus erat nisi porttitor felis. Vivamus efficitur ac tellus tempus ornare. Donec viverra fermentum lacus, in porttitor nisl cursus sed.
  </li>

  <li>
    Cras non gravida nibh. Nulla in vulputate mauris, eu ultricies turpis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla interdum finibus mauris, convallis pellentesque justo porttitor vel. Sed placerat augue velit, at auctor tellus aliquet id. Mauris placerat viverra diam, eget sollicitudin erat gravida ut. Nullam in porta diam. Aenean convallis ipsum eget ullamcorper rhoncus.
  </li>
</ul>
`
    return (
        <section className="bg-white py-[clamp(30px,4vw,100px)]">
            <Container>
                {/* Title */}
                <h2 className={`${style.btitle}`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </h2>

                {/* Date with icon */}
                <div className={`${style.time}`}>
                    <div className={`${style.time_box}`}>
                        <Clock className=" text-[#203740] h-[22px] w-[22px]" />
                    </div>

                    <span className={`${style.datetime}`}>Jan 06, 2023</span>
                </div>

                {/* Main Image */}
                <div className="relative w-full h-[400px] rounded-md overflow-hidden mb-[23px]">
                    <Image
                        src="/images/blog/blog_details.png"
                        alt="Mechanic working under car"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>

                {/* Intro Paragraph */}
                <p className={`${style.blogtitle}`}>
                    Nulla facilisi. Praesent tristique efficitur erat eu suscipit. Cras eros dolor, venenatis ut interdum id, malesuada id dui. Fusce pretium magna nibh, sed suscipit orci ultrices a. Nunc tellus leo, euismod id eleifend nec, tristique et sapien. Proin sed placerat eros. Etiam gravida magna id blandit posuere.
                </p>

                {/* Bullet Points */}
                <div className={`sectionContentli ${style.sectionlist}`}>
                    <HtmlRender htmlString={blogDetails} />
                </div>
  
                <div className={`${style.bottom}`}>
                    <PvrButton title="previous Post" href="/book" />
                    <NextButton title="Next Post" href="/book" />
                </div>
            </Container>
        </section>
    );
}

export default BlogDetails;
