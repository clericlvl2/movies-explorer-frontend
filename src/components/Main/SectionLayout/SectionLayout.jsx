import "./SectionLayout.css"

const SectionLayout = ({ className, children, contentClassName = '', isWideSection = false }) => (
  <section className={`section-layout ${className}`}>
    <div className={`section-layout__content ${isWideSection ? 'section-layout__content_wide' : ''} ${contentClassName}`}>
      {children}
    </div>
  </section>
)

export default SectionLayout;