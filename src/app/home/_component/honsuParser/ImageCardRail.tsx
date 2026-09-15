"use client";

import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

import styles from "./imageCardRail.module.scss";

export interface IImageCardRailConfig {
  title: string;
  subTitle: string;
  items: {
    title: string;
    description: string;
    imageUrl: string;
    gradientCss: string;
    linkUrl: string;
  }[];
  paddingTop?: number;
  paddingBottom?: number;
}

export default function ImageCardRail({ config }: { config: IImageCardRailConfig }) {
  const router = useRouter();

  const items = config.items || [];

  function handleClick(linkUrl: string, title: string) {
    if (!linkUrl) return;

    router.push(linkUrl);
  }

  return (
    <section
      className={styles["image-card-rail-component"]}
      style={{ paddingTop: config.paddingTop, paddingBottom: config.paddingBottom }}
    >
      {config.subTitle && <p className={styles["sub-title"]}>{config.subTitle}</p>}
      {config.title && <h2 className={styles["main-title"]}>{config.title}</h2>}

      <Swiper slidesPerView="auto" spaceBetween={12} slidesOffsetBefore={20} slidesOffsetAfter={20}>
        {items.map((item) => (
          <SwiperSlide key={item.linkUrl} className={styles["slide-item"]}>
            <div className={styles["card"]} onClick={() => handleClick(item.linkUrl, item.title)}>
              <img
                src={item.imageUrl}
                alt={item.title}
                className={styles["image"]}
                draggable={false}
              />
              <div className={styles["overlay"]} style={{ background: item.gradientCss }}>
                <p className={styles["title"]}>{item.title}</p>
                <p className={styles["description"]}>{item.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
