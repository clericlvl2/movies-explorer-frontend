import SectionTitle from "../SectionTitle/SectionTitle";
import SectionLayout from "../SectionLayout/SectionLayout";
import "./Techs.css"

const TECH_STACK = [
  'HTML',
  'CSS',
  'JS',
  'React',
  'Git',
  'Express.js',
  'mongoDB',
];

const Techs = () => {
  return (
    <SectionLayout className="techs" contentClassName="techs__content" id="techs">
      <SectionTitle title="Технологии"/>

        <h3 className="techs__title">7 технологий</h3>
        <span className="techs__subtitle">На&nbsp;курсе веб-разработки мы&nbsp;освоили технологии, которые применили в&nbsp;дипломном проекте.</span>

      <ul className="techs__list">
        {TECH_STACK.map((tech, index) => (
          <li key={index} className="techs__list-item"><span>{tech}</span></li>
        ))}
      </ul>
    </SectionLayout>
  )
}

export default Techs;