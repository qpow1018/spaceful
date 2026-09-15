"use client";

import { useRouter } from "next/navigation";

import styles from "./questionMasonry.module.scss";

export interface IQuestionMasonryConfig {
  sectionTitle: string;
  cards: IQuestionCard[];
  leftColumnCardIds: number[];
  rightColumnCardIds: number[];
  paddingTop?: number;
  paddingBottom?: number;
}

interface IQuestionCard {
  id: number;
  question: string;
  highlight: string;
  highlightColor: string;
  lineBreakBefore: string;
  bgColor: string;
  tags: string[];
  cardLink: string;
  cardHeightPx: number;
}

export default function QuestionMasonry({ config }: { config: IQuestionMasonryConfig }) {
  const leftCards: IQuestionCard[] = [];
  for (const id of config.leftColumnCardIds || []) {
    const card = config.cards.find((c) => c.id === id);
    if (card) leftCards.push(card);
  }

  const rightCards: IQuestionCard[] = [];
  for (const id of config.rightColumnCardIds || []) {
    const card = config.cards.find((c) => c.id === id);
    if (card) rightCards.push(card);
  }

  return (
    <section
      className={styles["question-masonry-component"]}
      style={{ paddingTop: config.paddingTop, paddingBottom: config.paddingBottom }}
    >
      {config.sectionTitle && <h2 className={styles["question-title"]}>{config.sectionTitle}</h2>}

      <div className={styles["question-wrap"]}>
        <div className={styles["question-column"]}>
          {leftCards.map((item) => (
            <QuestionCard key={item.id} item={item} />
          ))}
        </div>
        <div className={styles["question-column"]}>
          {rightCards.map((item) => (
            <QuestionCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function QuestionCard({ item }: { item: IQuestionCard }) {
  const router = useRouter();

  function textWithBreak(text: string) {
    const lines = text.split("\n");
    if (lines.length === 1) return text;
    return (
      <>
        {lines[0]}
        <br />
        {lines[1]}
      </>
    );
  }

  function convertText() {
    const line1 = item.question.split(item.lineBreakBefore)[0];
    const line2 = item.lineBreakBefore + (item.question.split(item.lineBreakBefore)[1] ?? "");
    const [before, after = ""] = `${line1}\n${line2}`.split(item.highlight);

    return (
      <>
        {textWithBreak(before)}
        <strong style={{ color: item.highlightColor }}>{item.highlight}</strong>
        {textWithBreak(after)}
      </>
    );
  }

  function handleClick() {
    if (!item.cardLink) return;

    router.push(item.cardLink);
  }

  return (
    <div
      onClick={handleClick}
      className={styles["question-card"]}
      style={{
        ...(item.bgColor && { backgroundColor: item.bgColor }),
        ...(item.cardHeightPx && { height: `${item.cardHeightPx}px` }),
      }}
    >
      <p className={styles["text"]}>{convertText()}</p>

      <div className={styles["tags"]}>
        {item.tags.map((tag) => (
          <span key={tag} className={styles["tag"]}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
