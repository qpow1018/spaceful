"use client";

import type { CSSProperties } from "react";
import { useRouter } from "next/navigation";

import type { TPlace } from "@/api/services/home/type";
import homeQuery from "@/queries/homeQuery";
import { useHorizontalScrollDrag } from "@/utils/hooks/useHorizontalScrollDrag";

// TODO: 공용 Icon 시스템을 확인한 뒤 ChevronRight 아이콘을 복원한다.
// import Icon from "@/components/common/icons/Icon";

import styles from "./productRail.module.scss";

export type TProductRailConfig = {
  title: string;
  subtitle: string;
  anchorId: string;
  headerMode: string;
  moreUrl: string;
  moreLabel: string;
  benefitCta: string;
  benefitLink: string;
  showMoreRow: boolean;
  showPagination: boolean;
  bannerDescription: string;
  productSource: {
    kind: string;
    path: string;
    collectionId: string;
  };
  textColor?: string;
  bgColor?: string;
  paddingTop?: number;
  paddingBottom?: number;
};

export default function ProductRail({ config }: { config: TProductRailConfig }) {
  const router = useRouter();
  const { scrollRef, eventHandlers, getWasDraggingAndReset } = useHorizontalScrollDrag();
  const collectionId = config.productSource?.collectionId || "";
  const { data: places = [] } = homeQuery.useGetPlacesByCollectionId(collectionId);

  function handlePlaceClick(placeSlug: string) {
    router.push(`/place-detail/${placeSlug}`);
  }

  function handleBenefitClick() {
    if (!config.benefitLink) return;

    router.push(config.benefitLink);
  }

  function handleMoreClick() {
    if (!config.moreUrl) return;

    router.push(config.moreUrl);
  }

  return (
    <div
      className={styles["product-rail-component"]}
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
        <p className={styles["title"]}>{config.title}</p>
        <p className={styles["sub-title"]}>{config.subtitle}</p>
      </div>

      <div ref={scrollRef} className={styles["product-grid"]} {...eventHandlers}>
        {places.map((place) => (
          <ProductCard
            key={place.id}
            place={place}
            onClick={() => {
              if (getWasDraggingAndReset()) return;
              handlePlaceClick(place.slug);
            }}
          />
        ))}
      </div>

      {config.benefitCta && (
        <div className={styles["benefit-cta-wrap"]} onClick={handleBenefitClick}>
          <div className={styles["benefit-cta"]}>
            <p className={styles["benefit-text"]}>{config.benefitCta}</p>
            {/* TODO: 공용 Icon 시스템을 확인한 뒤 ChevronRight 아이콘을 복원한다. */}
          </div>
        </div>
      )}

      {config.showMoreRow && (
        <div className={styles["more-btn-wrap"]}>
          <button type="button" className={styles["more-btn"]} onClick={handleMoreClick}>
            {config.moreLabel || "더보기"}
            <span className={styles["icon-box"]}>
              {/* TODO: 공용 Icon 시스템을 확인한 뒤 ChevronRight 아이콘을 복원한다. */}
            </span>
          </button>
        </div>
      )}
    </div>
  );
}

function ProductCard({ place, onClick }: { place: TPlace; onClick: () => void }) {
  const imageUrl = place.images[0]?.url;
  const price = `${place.pricing.minimumPrice.toLocaleString()}원 ~`;

  return (
    <div className={styles["product-card"]} onClick={onClick}>
      <div className={styles["thumbnail-box"]}>
        {imageUrl && <img src={imageUrl} alt={place.name} />}
      </div>

      <p className={styles["product-brand"]}>
        {place.location.city} · {place.location.district}
      </p>
      <p className={styles["product-title"]}>{place.name}</p>

      <div className={styles["product-price"]}>
        <span>{price}</span>
      </div>
    </div>
  );
}
