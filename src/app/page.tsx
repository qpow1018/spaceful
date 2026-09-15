import HomeHeader from "./_component/HomeHeader";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <>
      <HomeHeader />
      <main className={styles.main}>
        <h1>Spaceful</h1>
        <p>성능 개선 연습 프로젝트</p>
      </main>
    </>
  );
}
