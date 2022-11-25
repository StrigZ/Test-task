import styles from "./Header.module.css";
import LogoSVG from "./Icons/LogoSVG";
import Telegram from "./Icons/Telegram";
import Viber from "./Icons/Viber";
import Whatsapp from "./Icons/Whatsapp";
const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div className="container">
          <div className={styles["header__top"]}>
            <LogoSVG />
            <div>
              <ul className={styles["header__top--socials"]}>
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
            </div>
          </div>
        </div>
      </header>
      <header className={styles["header__nav"]}>
        <div className="container">
          <ul className={styles["header__menu"]}>
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
              <a href="#">Кейсы</a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};
export default Header;
