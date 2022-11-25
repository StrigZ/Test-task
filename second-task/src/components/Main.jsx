import styles from "./Main.module.css";

const Main = () => {
  return (
    <main className={styles.main}>
      <div className="container">
        <h1 className={styles["main__title"]}>
          Зарабатывайте больше
          <span>с WELBEX</span>
        </h1>
        <p className={styles["main__description"]}>
          Развиваем и контролируем продажи за вас
        </p>
        <p className={styles["main__features"]}>
          Вместе <span>с бесплатной консультацией</span> мы дарим:
        </p>
        <ul className={styles["main__features--list"]}>
          <li>Skype аудит</li>
          <li>30 виджетов</li>
          <li>Dashboard</li>
          <li>Месяц аmoCRM</li>
        </ul>
      </div>
    </main>
  );
};
export default Main;
