"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import styles from "./mainBanner.module.scss";

export interface IMainBannerConfig {
  slides: { imageUrl: string; linkUrl: string; alt: string }[];
  paddingTop?: number;
  paddingBottom?: number;
}

export default function MainBanner({ config }: { config: IMainBannerConfig }) {
  const slides = config.slides || [];
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(1);

  if (!slides.length) return null;

  function handleClick(link: string, alt: string) {
    if (!link) return;

    router.push(link);
  }

  return (
    <section
      className={styles["main-banner-component"]}
      style={{ paddingTop: config.paddingTop, paddingBottom: config.paddingBottom }}
    >
      <div className={styles["swiper-wrap"]}>
        <Swiper
          modules={[Autoplay]}
          loop={slides.length > 1}
          autoplay={slides.length > 1 ? { delay: 3000, disableOnInteraction: false } : false}
          onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex + 1)}
        >
          {slides.map((slide) => (
            <SwiperSlide key={`${slide.linkUrl}-${slide.imageUrl}`}>
              <div
                className={styles["slide-item"]}
                onClick={() => handleClick(slide.linkUrl, slide.alt)}
              >
                <img src={slide.imageUrl} alt={slide.alt || ""} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {slides.length > 1 && (
          <span className={styles["banner-dots"]}>
            {currentIndex}/{slides.length}
          </span>
        )}
      </div>
    </section>
  );
}
