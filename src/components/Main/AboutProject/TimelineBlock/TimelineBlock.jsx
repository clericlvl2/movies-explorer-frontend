import { classnames } from "../../../../utils/helpers";
import "./TimelineBlock.css";

const TimelineBlock = ({ timeSpan, subtitle, isColored = false }) => {
  return (
    <div className="timeline">
      <div className={classnames('timeline-text', 'timeline__time-span', isColored && 'timeline__time-span_colored')}>
        <span>{timeSpan}</span>
      </div>
      <span className="timeline-text timeline__subtitle">{subtitle}</span>
    </div>
  )
}

export default TimelineBlock;