import './Footer.css';

const Footer = () => {
  const today = new Date();
  const currentYear = today.getFullYear();

  return (
    <footer className="footer">
      <span className="footer__text footer__label">Учебный проект Яндекс.Практикум х&nbsp;BeatFilm.</span>

      <div className="footer__info">
        <span className="footer__text">©&nbsp;{currentYear}</span>
        <nav>
          <ul className="footer__nav-list">
            <li>
              <a
                className="footer__text footer__link"
                href="https://practicum.yandex.ru/profile/web/"
                target="_blank"
                rel="noreferrer"
              >
                Яндекс.Практикум
              </a>
            </li>
            <li>
              <a
                className="footer__text footer__link"
                href="https://github.com/clericlvl2"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;