import styles from "./Main.module.css";

const Main = () => {
  return (
    <main className={styles.main}>
      <div className="container">
        <div className={styles["main__inner"]}>
          <div className={styles["main__inner--left"]}>
            <h1 className={styles["main__title"]}>
              Зарабатывайте больше
              <span>с WELBEX</span>
            </h1>
            <p className={styles["main__description"]}>
              Развиваем и контролируем продажи за вас
            </p>
          </div>

          <div className={styles["main__inner--right"]}>
            <p className={styles["main__features"]}>
              Вместе <span>с бесплатной консультацией</span> мы дарим:
            </p>
            <ul
              className={`${styles["main__features--list"]} ${styles.mobile}`}
            >
              <li>Skype аудит</li>
              <li>30 виджетов</li>
              <li>Dashboard</li>
              <li>Месяц аmoCRM</li>
            </ul>
            <ul
              className={` ${styles.desktop} ${styles["main__features--list"]} `}
            >
              <li>
                <h4>Виджеты</h4>
                <p>30 готовых решений</p>
              </li>
              <li>
                <h4>Dashboard</h4>
                <p>с показателями вашего бизнеса</p>
              </li>
              <li>
                <h4>Skype Аудит</h4>
                <p>отдела продаж и CRM системы</p>
              </li>
              <li>
                <h4>35 дней</h4>
                <p>использования CRM</p>
              </li>
            </ul>
            <a className={styles.btn} href="#">
              Получить консультацию
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Main;
