import "./FilterCheckbox.css"

const FilterCheckbox = ({ label, ...props }) => {
  return (
    <div className="filter-checkbox">
      <label className="filter-checkbox__checkbox" htmlFor="short-movie-checkbox">
        <input
          {...props}
          className="filter-checkbox__input"
          id="short-movie-checkbox"
          type="checkbox"
        />
        <span className="filter-checkbox__switcher" />
      </label>
      <span className="filter-checkbox__label">{label}</span>
    </div>
  )
}

export default FilterCheckbox;