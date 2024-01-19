import { useEffect, useState } from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import SectionLayout from "../../Main/SectionLayout/SectionLayout";
import "./SearchForm.css"

const SearchForm = ({ moviesFilter, onSearchMovie, isLoading }) => {
  const [searchValue, setSearchValue] = useState(moviesFilter.title);

  useEffect(() => {
    setSearchValue(moviesFilter.title);
  }, [moviesFilter.title]);

  const onSearchValueChange = evt => {
    setSearchValue(evt.target.value);
  }

  const onSearchMovieByTitle = (evt) => {
    evt.preventDefault();
    onSearchMovie({ title: searchValue });
  }

  const onMovieTypeChange = (evt) => {
    onSearchMovie({ isShort: evt.target.checked })
  }

  return (
    <SectionLayout
      className="search-form"
      contentClassName="search-form__content"
      isWideSection
    >
      <form className="search-form__form" onSubmit={onSearchMovieByTitle}>
        <div className="search-form__input-container">
          <label htmlFor="movie-title"/>
          <input
            className="search-form__input"
            id="movie-title"
            name="title"
            placeholder="Фильм"
            type="text"
            value={searchValue}
            onChange={onSearchValueChange}
          />

          <button disabled={isLoading} className="search-form__submit-button" type="submit" />
        </div>

        <FilterCheckbox
          label="Короткометражки"
          id="movie-type"
          name="isShort"
          disabled={isLoading}
          checked={moviesFilter.isShort}
          onChange={onMovieTypeChange}
        />
      </form>
    </SectionLayout>
  )
}

export default SearchForm;