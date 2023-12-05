import "./SectionLayout.css"

const SectionLayout = ({ className, children }) => (
  <section className={`section-layout ${className}`}>
    <div className="section-layout__content">
      {children}
    </div>
  </section>
)

export default SectionLayout;