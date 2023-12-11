import { useForm } from "../../../hooks/useForm";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import SectionLayout from "../../Main/SectionLayout/SectionLayout";
import "./SearchForm.css"

const DEFAULT_FORM_VALUES = {
  movie: '',
  isShortMovie: false
}

const SearchForm = () => {
  const { values, handleChange } = useForm(DEFAULT_FORM_VALUES);

  const onSubmit = (evt) => {
    evt.preventDefault();
  }

  return (
    <SectionLayout
      className="search-form"
      contentClassName="search-form__content"
      isWideSection
    >
      <form className="search-form__form" onSubmit={onSubmit}>
        <div className="search-form__input-container">
          <label htmlFor="movie-input"/>
          <input
            required
            className="search-form__input"
            id="movie-input"
            name="movie"
            placeholder="Фильм"
            type="text"
            value={values.movie}
            onChange={handleChange}
          />

          <button className="search-form__submit-button" type="submit" />
        </div>

        <FilterCheckbox
          label="Короткометражки"
          name="isShortMovie"
          value={values.isShortMovie}
          onChange={handleChange}
        />
      </form>
    </SectionLayout>
  )
}

export default SearchForm;