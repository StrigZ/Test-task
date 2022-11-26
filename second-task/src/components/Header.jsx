import styles from "./Header.module.css";
import LogoSVG from "./Icons/LogoSVG";
import Telegram from "./Icons/Telegram";
import Viber from "./Icons/Viber";
import Whatsapp from "./Icons/Whatsapp";
import DesktopLogo from "./Icons/DesktopLogo";
const Header = () => {
  return (
    <>
      <header className={`${styles.mobile} ${styles.header}`}>
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
      <header className={`${styles.mobile} ${styles["header__nav"]}`}>
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
      <header className={(styles["desktop-header"], styles.desktop)}>
        <div className="container">
          <div className={styles["desktop-header__inner"]}>
            <div className={styles["desktop-header__logo"]}>
              <DesktopLogo />
              <p>крупный интегратор CRM в Росcии и ещё 8 странах</p>
            </div>
            <nav className={styles["desktop-header__menu"]}>
              <ul>
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
                <li>
                  <a href="#">Сертификаты</a>
                </li>
              </ul>
            </nav>
            <div className={styles["desktop-header__contact"]}>
              <ul>
                <li>
                  <a href="">+7 555 555-55-55</a>
                </li>
                <li>
                  <ul className={styles["desktop-header__contact--socials"]}>
                    <li>
                      <a href="">
                        <Telegram />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <Viber />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <Whatsapp />
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
