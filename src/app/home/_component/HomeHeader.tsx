import styles from "./homeHeader.module.scss";

export default function HomeHeader() {
  return (
    <header className={styles["home-header"]}>
      <div className={styles["home-header-inner"]}>
        <span className={styles["home-header-wordmark"]}>spaceful</span>
      </div>
    </header>
  );
}
