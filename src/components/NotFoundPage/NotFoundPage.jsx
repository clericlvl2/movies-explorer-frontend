import { useNavigate } from "react-router-dom";
import "./NotFoundPage.css"

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found-page">
      <div className="not-found-page__container">
        <h1 className="not-found-page__title">404</h1>
        <span className="not-found-page__subtitle">Страница не найдена</span>
      </div>
      <button
        type="button"
        className="not-found-page__link-button"
        onClick={() => navigate(-1)}
      >
        Назад
      </button>
    </div>
  )
};

export default NotFoundPage
