import "./FilterCheckbox.css"

const FilterCheckbox = ({ label, id, ...props }) => {
  return (
    <div className="filter-checkbox">
      <label className="filter-checkbox__checkbox" htmlFor={id}>
        <input
          {...props}
          className="filter-checkbox__input"
          id={id}
          type="checkbox"
        />
        <span className="filter-checkbox__switcher" />
      </label>
      <span className="filter-checkbox__label">{label}</span>
    </div>
  )
}

export default FilterCheckbox;