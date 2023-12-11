import photo1 from './../../images/movie-poster.png'
import photo2 from '../../images/movie-poster-2.png'
import photo3 from '../../images/movie-poster-3.png'
import photo4 from '../../images/movie-poster-4.png'
import photo5 from '../../images/movie-poster-5.png'
import photo6 from '../../images/movie-poster-6.png'
import photo7 from '../../images/movie-poster-7.png'
import photo8 from '../../images/movie-poster-8.png'
import photo9 from '../../images/movie-poster-9.png'
import photo10 from '../../images/movie-poster-10.png'
import photo11 from '../../images/movie-poster-11.png'
import photo12 from '../../images/movie-poster-12.png'
import photo13 from '../../images/movie-poster-13.png'
import photo14 from '../../images/movie-poster-14.png'
import photo15 from '../../images/movie-poster-15.png'

const POSTERS = [
  photo1,
  photo2,
  photo3,
  photo4,
  photo5,
  photo6,
  photo7,
  photo8,
  photo9,
  photo10,
  photo11,
  photo12,
  photo13,
  photo14,
  photo15,
];

export const OWNER_ID = 481516;

export const getMovies = () => {
  const movies = [];
  let id = 10000;

  POSTERS.forEach((poster, index) => {
    movies.push({
      _id: id++,
      ownerId: Math.random() < 0.5 ? OWNER_ID : 1,
      name: `Фильм №${index + 1}`,
      posterURL: poster,
      duration: `${Math.floor(Math.random() * 3) + 1}h ${Math.floor(Math.random() * 60)}m`,
      isShortMovie: Math.random() < 0.5,
      isFavorite: Math.random() < 0.5
    });
  })

  return movies;
}
