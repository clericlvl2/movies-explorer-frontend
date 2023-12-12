import "./InfoColumn.css";

const InfoColumn = ({ title, text }) => {
  return (
    <div className="info-column">
      <h3 className="info-column__title">{title}</h3>
      <p className="info-column__subtitle">{text}</p>
    </div>
  )
}

export default InfoColumn