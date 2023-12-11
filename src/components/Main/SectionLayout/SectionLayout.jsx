import "./SectionLayout.css"
import { cn } from "../../../utils/helpers";

const SectionLayout = ({
  className = '',
  children,
  contentClassName,
  isWideSection = false,
  id = undefined
}) => (
  <section className={`section-layout ${className}`} id={id}>
    <div
      className={cn(
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