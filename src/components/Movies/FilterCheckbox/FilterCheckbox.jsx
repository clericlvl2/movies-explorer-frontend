import "./FilterCheckbox.css"

const FilterCheckbox = (props) => {
  return (
    <div className="filter-checkbox__container">
      <label className="filter-checkbox__checkbox" htmlFor="short-movie-checkbox">
        <input
          {...props}
          className="filter-checkbox__input"
          id="short-movie-checkbox"
          type="checkbox"
        />
        <span className="filter-checkbox__switcher" />
      </label>
      <span className="filter-checkbox__label">Короткометражки</span>
    </div>
  )
}

export default FilterCheckbox;