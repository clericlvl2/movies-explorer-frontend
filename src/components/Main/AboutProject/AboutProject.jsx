import SectionTitle from "../SectionTitle/SectionTitle";
import InfoColumn from "./InfoColumn/InfoColumn";
import TimelineBlock from "./TimelineBlock/TimelineBlock";
import SectionLayout from "../SectionLayout/SectionLayout";
import "./AboutProject.css";

const AboutProject = () => {
  return (
    <SectionLayout className="about-project" id={'about-project'}>
      <SectionTitle title="О проекте" />

      <div className="about-project__content">
        <InfoColumn
          title="Дипломный проект включал 5&nbsp;этапов"
          text="Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки."
        />

        <InfoColumn
          title="На выполнение диплома ушло 5&nbsp;недель"
          text="У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься."
        />

        <div className="about-project__timeline-container">
          <div className="about-project__timeline-backend">
            <TimelineBlock
              timeSpan="1 неделя"
              subtitle="Back-end"
              isColored
            />
          </div>
          <div className="about-project__timeline-frontend">
            <TimelineBlock
              timeSpan="4 недели"
              subtitle="Front-end"
            />
          </div>
        </div>
      </div>
    </SectionLayout>
  )
}

export default AboutProject;