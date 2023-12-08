import "./Navigation.css"

const Navigation = ({ isLogged}) => {
  return (
    <div className="navigation">
      <nav>
        <ul className="navigation__nav-list">
          <li><a href="#" className="navigation__link navigation__page-link">Главная</a></li>
          <li><a href="#" className="navigation__link navigation__page-link navigation__page-link_active">Фильмы</a></li>
          <li><a href="#" className="navigation__link navigation__page-link">Сохранённые фильмы</a></li>
        </ul>
      </nav>

      <div className="navigation__account">
        {
          isLogged ? (
            <button className="navigation__link navigation__account-button">
              Аккаунт
              <div className="navigation__account-logo"/>
            </button>
          ) : (
            <nav>
              <ul className="navigation__nav-list navigation__nav-list_type_account">
                <li className="navigation__nav-list-item">
                  <a className="navigation__link" href="#">Регистрация</a>
                </li>
                <li><a className="navigation__link navigation__link-button">Войти</a></li>
              </ul>
            </nav>
          )
        }
      </div>
    </div>
  )
}

export default Navigation