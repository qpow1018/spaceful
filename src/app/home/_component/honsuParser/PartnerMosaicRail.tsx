"use client";

import { type CSSProperties, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import type { Swiper as TSwiper } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { chunk } from "lodash";

import Icon from "@/components/common/icons/Icon";

import styles from "./partnerMosaicRail.module.scss";

type TPartnerMosaicSlide = {
  brandName: string;
  title: string;
  subtitle: string;
  mosaicImageUrls: string[];
  tagLabel: string;
  linkUrl: string;
};

export type TPartnerMosaicRailConfig = {
  sectionTitle: string;
  sectionSubtitle: string;
  slides: TPartnerMosaicSlide[];
  benefitCta?: string;
  benefitLink?: string;
  textColor?: string;
  bgColor?: string;
  paddingTop?: number;
  paddingBottom?: number;
};

export default function PartnerMosaicRail({ config }: { config: TPartnerMosaicRailConfig }) {
  const router = useRouter();
  const swiperRef = useRef<TSwiper | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const pages = chunk(config.slides, 3);

  function handlePartnerClick(linkUrl: string) {
    if (!linkUrl) return;

    router.push(linkUrl);
  }

  function handleBenefitClick() {
    if (!config.benefitLink) return;

    router.push(config.benefitLink);
  }

  return (
    <div
      className={styles["partner-mosaic-rail-component"]}
      style={{ paddingTop: config.paddingTop, paddingBottom: config.paddingBottom }}
    >
      <div
        className={styles["rail-header"]}
        style={
          {
            "--header-bg": config.bgColor || "#fff",
            "--header-text": config.textColor || "#191919",
          } as CSSProperties
        }
      >
        <p className={styles["title"]}>{config.sectionTitle}</p>
        <p className={styles["sub-title"]}>{config.sectionSubtitle}</p>
      </div>

      <Swiper
        slidesPerView={1}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => setCurrentPage(swiper.activeIndex)}
      >
        {pages.map((pageSlides, pageIndex) => (
          <SwiperSlide key={`page-${pageIndex}`}>
            <div className={styles["partner-list"]}>
              {pageSlides.map((slide) => (
                <div
                  key={slide.linkUrl}
                  className={styles["partner-card"]}
                  onClick={() => handlePartnerClick(slide.linkUrl)}
                >
                  <MosaicImages urls={slide.mosaicImageUrls || []} alt={slide.brandName} />

                  <div className={styles["name-box"]}>
                    <p className={styles["name"]}>{slide.brandName}</p>
                    {slide.tagLabel && <span className={styles["tag"]}>{slide.tagLabel}</span>}
                  </div>

                  <p className={styles["desc"]}>{slide.title}</p>
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {config.benefitCta && (
        <div className={styles["benefit-cta-wrap"]} onClick={handleBenefitClick}>
          <div className={styles["benefit-cta"]}>
            <p className={styles["benefit-text"]}>{config.benefitCta}</p>
            <Icon name="ChevronRight" size={18} color="currentColor" />
          </div>
        </div>
      )}

      {pages.length > 1 && (
        <div className={styles["pagination"]}>
          <button
            type="button"
            className={styles["arrow-btn"]}
            disabled={currentPage === 0}
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <Icon name="ChevronLeft" size={18} color="currentColor" />
          </button>
          <span className={styles["page-info"]}>
            <strong>{currentPage + 1}</strong>/{pages.length}
          </span>
          <button
            type="button"
            className={styles["arrow-btn"]}
            disabled={currentPage === pages.length - 1}
            onClick={() => swiperRef.current?.slideNext()}
          >
            <Icon name="ChevronRight" size={18} color="currentColor" />
          </button>
        </div>
      )}
    </div>
  );
}

function MosaicImages({ urls, alt }: { urls: string[]; alt: string }) {
  const filteredUrls = urls.filter(Boolean);
  const count = filteredUrls.length;

  if (count === 0) return null;

  if (count === 1) {
    return (
      <div className={styles["mosaic-1"]}>
        <img src={filteredUrls[0]} alt={alt} />
      </div>
    );
  }

  const rightSlots = Array.from({ length: 4 }, (_, index) => filteredUrls[index + 1]);

  return (
    <div className={styles["mosaic-images"]}>
      <div className={styles["image-box"]}>
        <img src={filteredUrls[0]} alt={alt} />
      </div>

      <div className={styles["mosaic-right"]}>
        {rightSlots.map((url, index) => (
          <div key={index} className={styles["image-box"]}>
            {url && <img src={url} alt="" />}
          </div>
        ))}
      </div>
    </div>
  );
}
