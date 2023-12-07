import './NotFoundPage.css'

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <div className="not-found-page__container">
        <h1 className="not-found-page__title">404</h1>
        <span className="not-found-page__subtitle">Страница не найдена</span>
      </div>
      <a className="not-found-page__link" href="#">Назад</a>
    </div>
  )
};

export default NotFoundPage
