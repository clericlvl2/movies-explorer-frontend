import "./SectionLayout.css"
import { classnames } from "../../../utils/helpers";

const SectionLayout = ({
  className = '',
  children,
  contentClassName,
  isWideSection = false,
  id = undefined
}) => (
  <section className={`section-layout ${className}`} id={id}>
    <div
      className={classnames(
        'section-layout__content',
        isWideSection && 'section-layout__content_wide',
        contentClassName
      )}
    >
      {children}
    </div>
  </section>
)

export default SectionLayout;