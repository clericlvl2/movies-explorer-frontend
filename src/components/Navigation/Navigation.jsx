import { Link, useLocation } from "react-router-dom";
import { PATH } from "../../utils/constants";
import { classnames } from "../../utils/helpers";
import "./Navigation.css"

const Navigation = ({ isLogged, onLinkClick, showMainLink = true }) => {
  const { pathname } = useLocation();

  return (
    <div className="navigation">
      {isLogged ? (
        <nav className="navigation__pages-nav">
          <ul className="navigation__nav-list navigation__nav-list_type_pages">
            {showMainLink && (
              <li>
                <Link
                  className={classnames(
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
            )}
            <li>
              <Link
                className={classnames(
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
                className={classnames(
                  'navigation__link',
                  'navigation__page-link',
                  pathname === PATH.SAVED_MOVIES && 'navigation__page-link_active'
                )}
                to={PATH.SAVED_MOVIES}
                onClick={onLinkClick}
              >
                Сохранённые фильмы
              </Link>
            </li>
          </ul>

          <Link
            className="navigation__link navigation__account-button"
            to={PATH.PROFILE}
            onClick={onLinkClick}
          >
            Аккаунт
            <div className="navigation__account-logo" />
          </Link>
        </nav>
      ) : (
        <nav className="navigation__auth-nav">
          <ul className="navigation__nav-list navigation__nav-list_type_auth">
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
      )}

    </div>
  )
}

export default Navigation