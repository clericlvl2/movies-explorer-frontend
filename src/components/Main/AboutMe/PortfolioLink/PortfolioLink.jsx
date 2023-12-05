import './PortfolioLink.css'

const PortfolioLink = ({label, linkURL}) => {
  return (
    <a className="portfolio-link" href={linkURL}>
      <span className="portfolio-link__label">{label}</span>
      <div className="portfolio-link__icon" />
    </a>
  )
}

export default PortfolioLink;