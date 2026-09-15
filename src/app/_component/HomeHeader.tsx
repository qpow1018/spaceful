import styles from "./HomeHeader.module.scss";

export default function HomeHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <span className={styles.wordmark}>spaceful</span>
      </div>
    </header>
  );
}
