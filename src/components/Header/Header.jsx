import Logo from "../Logo/Logo";
import { useResize } from "../../hooks/useResize";
import './Header.css';

const MEDIUM_SCREEN = 768;

const Header = () => {
  const isLogged = false;

  const width = useResize();
  const isDesktop = width > MEDIUM_SCREEN;

  return (
    <header className="header">
      <Logo className="header__logo"/>
      {isDesktop ? (
        <div className="header__content">
          <nav>
            <ul className="header__nav-list">
              <li><a href="#" className="header__link header__page-link">Главная</a></li>
              <li><a href="#" className="header__link header__page-link">Фильмы</a></li>
              <li><a href="#" className="header__link header__page-link">Сохранённые фильмы</a></li>
            </ul>
          </nav>

          <div className="header__account">
            {
              isLogged ? (
                <button className="header__link header__account-button">
                  <span>Аккаунт</span>
                  <div className="header__account-logo"/>
                </button>
              ) : (
                <div className="header__auth">
                  <a className="header__link header__auth-text" href="#">Регистрация</a>
                  <button className="header__auth-button header__auth-text">Войти</button>
                </div>
              )
            }
          </div>
        </div>
      ) : (
        <div className="header__burger-menu header__link"/>
      )}

    </header>
  );
};

export default Header;