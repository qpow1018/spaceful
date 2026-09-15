"use client";

import { useRouter } from "next/navigation";

import styles from "./goalButtons.module.scss";

export interface IGoalButtonsConfig {
  items: { label: string; order: number; iconImageUrl: string; linkUrl: string }[];
  paddingTop?: number;
  paddingBottom?: number;
}

export default function GoalButtons({ config }: { config: IGoalButtonsConfig }) {
  const items = config.items || [];
  const router = useRouter();

  function handleClick(linkUrl: string, label: string) {
    if (!linkUrl) return;

    router.push(linkUrl);
  }

  return (
    <ul
      className={styles["goal-buttons-component"]}
      style={{ paddingTop: config.paddingTop, paddingBottom: config.paddingBottom }}
    >
      {items.map((item, i) => (
        <li
          key={`goal-item-${i}-${item.label}`}
          className={styles["goal-item"]}
          onClick={() => handleClick(item.linkUrl, item.label)}
        >
          <img src={item.iconImageUrl} alt="" className={styles["goal-icon"]} loading="lazy" />
          <p className={styles["goal-label"]}>{item.label}</p>
        </li>
      ))}
    </ul>
  );
}
