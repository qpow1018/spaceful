"use client";

import { useRouter } from "next/navigation";

import styles from "./promoStrip.module.scss";

export interface IPromoStripConfig {
  linkUrl: string;
  fullBleedImageUrl: string;
  paddingTop?: number;
  paddingBottom?: number;
}

export default function PromoStrip({ config }: { config: IPromoStripConfig }) {
  const router = useRouter();

  function handleClick() {
    if (!config.linkUrl) return;

    router.push(config.linkUrl);
  }

  return (
    <div
      className={styles["promo-strip-component"]}
      style={{ paddingTop: config.paddingTop, paddingBottom: config.paddingBottom }}
    >
      <div className={styles["image-box"]} onClick={handleClick}>
        <img src={config.fullBleedImageUrl} alt="" />
      </div>
    </div>
  );
}
