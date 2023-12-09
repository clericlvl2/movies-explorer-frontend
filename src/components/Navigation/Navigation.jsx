import { Link, useLocation } from "react-router-dom";
import { PATH } from "../../utils/constants";
import { cn } from "../../utils/helpers";
import "./Navigation.css"

const Navigation = ({ isLogged, onLinkClick }) => {
  const { pathname } = useLocation();


  return (
    <div className="navigation">
      <nav className="navigation__nav-container">
        {isLogged && (
          <ul className="navigation__nav-list">
            <li>
              <Link
                className={cn(
                  'navigation__link',
                  'navigation__page-link',
                  pathname === PATH.MAIN && 'navigation__page-link_active'
                )}
                to={PATH.MAIN}
                onClick={onLinkClick}
              >
                Главная
              </Link>
            </li>
            <li>
              <Link
                className={cn(
                  'navigation__link',
                  'navigation__page-link',
                  pathname === PATH.MOVIES && 'navigation__page-link_active'
                )}
                to={PATH.MOVIES}
                onClick={onLinkClick}
              >
                Фильмы
              </Link>
            </li>
            <li>
              <Link
                className={cn(
                  'navigation__link',
                  'navigation__page-link',
                  pathname === PATH.SAVED_MOVIES && 'navigation__page-link_active'
                )}
                to={PATH.SAVED_MOVIES}
                onClick={onLinkClick}
              >
                Сохранённые</Link>
            </li>
          </ul>
        )}
      </nav>

      <div className="navigation__account">
        {isLogged ? (
          <Link
            className="navigation__link navigation__account-button"
            to={PATH.PROFILE}
            onClick={onLinkClick}
          >
            Аккаунт
            <div className="navigation__account-logo" />
          </Link>
        ) : (
          <nav>
            <ul className="navigation__nav-list navigation__nav-list_type_account">
              <li className="navigation__nav-list-item">
                <Link
                  className="navigation__link"
                  to={PATH.SIGN_UP}
                  onClick={onLinkClick}
                >
                  Регистрация
                </Link>
              </li>
              <li>
                <Link
                  className="navigation__link navigation__link-button"
                  to={PATH.SIGN_IN}
                  onClick={onLinkClick}
                >
                  Войти
                </Link>
              </li>
            </ul>
          </nav>
        )
        }
      </div>
    </div>
  )
}

export default Navigation