import styles from "./Footer.module.css";
import Telegram from "./Icons/Telegram";
import Viber from "./Icons/Viber";
import Whatsapp from "./Icons/Whatsapp";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles["footer__about"]}>
          <h3 className={styles["footer-title"]}>О компании</h3>
          <ul className={styles["footer__about--list"]}>
            <li>
              <a href="#">Партнёрская программа</a>
            </li>
            <li>
              <a href="#">Вакансии</a>
            </li>
          </ul>
        </div>
        <div className={styles["footer__menu"]}>
          <h3 className={styles["footer-title"]}>Меню</h3>
          <div className={styles["footer__menu--box"]}>
            <ul className={styles["footer__menu--list"]}>
              <li>
                <a href="#">Расчёт стоимости</a>
              </li>
              <li>
                <a href="#">Услуги</a>
              </li>
              <li>
                <a href="#">Виджеты</a>
              </li>
              <li>
                <a href="#">Интеграции</a>
              </li>
              <li>
                <a href="#">Наши клиенты</a>
              </li>
            </ul>
            <ul className={styles["footer__menu--list"]}>
              <li>
                <a href="#">Благодарность клиентов</a>
              </li>
              <li>
                <a href="#">Кейсы</a>
              </li>
              <li>
                <a href="#">Сертификаты</a>
              </li>
              <li>
                <a href="#">Блог на Youtube</a>
              </li>
              <li>
                <a href="#">Вопрос / Ответ</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles["footer__contact"]}>
          <h3 className={styles["footer-title"]}>Контакты</h3>
          <ul className={styles["footer__contact--list"]}>
            <li>+7 555 555-55-55</li>
            <li>
              <ul className={styles["footer__contact--socials"]}>
                <li>
                  <a href="#">
                    <Telegram />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Viber />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Whatsapp />
                  </a>
                </li>
              </ul>
            </li>
            <li>Москва, Путевой проезд 3с1, к 902</li>
          </ul>
        </div>
        <div className={styles["footer__copyright"]}>
          <ul>
            <li>&#169;WELBEX 2022. Все права защищены.</li>
            <li>
              <a href="#">Политика конфиденциальности</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
