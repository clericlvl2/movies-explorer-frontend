import SectionTitle from "../SectionTitle/SectionTitle";
import SectionLayout from "../SectionLayout/SectionLayout";
import PortfolioLink from "./PortfolioLink/PortfolioLink";
import myPhoto from "./../../../images/my-photo.png"
import "./AboutMe.css"

const AboutMe = () => {
  return (
    <SectionLayout className="about-me" contentClassName="about-me__content" id="about-me">
      <SectionTitle title="Студент" />

      <div className="about-me__personal-info">
        <div className="about-me__text-info">
          <div>
            <h3 className="about-me__name">Артем</h3>
            <p className="about-me__info-short">Фронтенд разработчик, 28&nbsp;лет</p>
            <p className="about-me__info-long">
              Мой родной город Кемерово, но последние 10 лет я жил в Новосибирском Академгородке, где занимался наукой.
              В какой-то момент я понял, что хочу развиваться в другом направлении, и стал разработчиком интерфейсов.
              Недавно переехал в Петербург, и если кто знает прикольные места, то пишите!
            </p>
          </div>
          <a
            className="about-me__link"
            href="https://github.com/clericlvl2"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
        <img className="about-me__image" src={myPhoto} alt="Фотография-автора-проекта" />
      </div>

      <div className="about-me__portfolio">
        <h3 className="about-me__portfolio-label">Портфолио</h3>

        <ul className="about-me__portfolio-links">
          <li>
            <PortfolioLink label="Статичный сайт" linkURL="https://clericlvl2.github.io/education-landing/" />
          </li>
          <li>
            <PortfolioLink label="Адаптивный сайт" linkURL="https://clericlvl2.github.io/travelling-landing/" />
          </li>
          <li>
            <PortfolioLink label="Одностраничное приложение" linkURL="https://clericlvl2.github.io/react-mesto-auth" />
          </li>
        </ul>

      </div>
    </SectionLayout>
  )
}

export default AboutMe;