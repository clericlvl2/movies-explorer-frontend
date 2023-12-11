import "./Promo.css"

const Promo = () => {
  return (
    <section className="promo">
      <div className="promo__hero">
        <h1 className="promo__hero-title">Учебный проект студента факультета Веб&#8209;разработки</h1>
      </div>

      <nav className="promo__nav">
        <ul className="promo__nav-list">
          <li><a href="#about-project" className="promo__link">О проекте</a></li>
          <li><a href="#techs" className="promo__link">Технологии</a></li>
          <li><a href="#about-me" className="promo__link">Студент</a></li>
        </ul>
      </nav>
    </section>
  )
}

export default Promo;