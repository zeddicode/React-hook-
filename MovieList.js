
import React, { useState } from 'react';
import MovieCard from './MovieCard';
import Filter from './Filter';

const MovieList = () => {
  const [movies, setMovies] = useState([
    {
      title: 'Inception',
      description: 'A thief who steals corporate secrets...',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BNjMxNjI1Mjc1OV5BMl5BanBnXkFtZTcwMDY0OTk1Mw@@._V1_QL75_UX405_.jpg',
      rating: 4.5,
    },
    {
      title: 'The Matrix',
      description: 'A computer hacker learns from mysterious rebels who has  enormous beef for specific settings in the economic paforators of the finances of the public at large...',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BNjMxNjI1Mjc1OV5BMl5BanBnXkFtZTcwMDY0OTk1Mw@@._V1_QL75_UX405_.jpg',
      rating: 4.7,
    },
    {
    title: 'Interstellar',
    description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival. It is a heartbreaking experience to be in a position of help to humanity and still get attacked for ..',
    posterURL: 'https://m.media-amazon.com/images/M/MV5BMjA3NTEwOTMxMV5BMl5BanBnXkFtZTgwMjMyODgxMzE@._V1_QL75_UX820_.jpg',
    rating: 8.9,
    },
    { title: 'Rampage', 
      description: 'A primatologist teams up with a genetic engineer to stop a gigantic group of animals, including an albino gorilla whom he befriended, after the animals are exposed to an experimental pathogen. 1', 
      posterURL: 'https://m.media-amazon.com/images/M/MV5BMTAyMzA2MTcwNDFeQTJeQWpwZ15BbWU4MDQxOTkyMDUz._V1_QL75_UX820_.jpg', 
      rating: 8 
    },
        
        { title: 'Iron Man 2', 
          description: 'Tony Stark is under pressure from various sources, including the government, to share his technology with the world. He must find a way to fight them while also tackling his other enemies.', 
          posterURL: 'https://m.media-amazon.com/images/M/MV5BMTQyOTIxNjM4M15BMl5BanBnXkFtZTcwNjgwODYzMw@@._V1_QL75_UX820_.jpg', 
          rating: 8 
        },
        { title: ' Motherland', 
          description: 'King drey has traveled far and wide, but right now he has settled temporarily in this country of no work except the hustle called "street" to the world. He must find a way to fight them while also tackling his other enemies.', 
          posterURL: 'https://m.media-amazon.com/images/M/MV5BMTQyOTIxNjM4M15BMl5BanBnXkFtZTcwNjgwODYzMw@@._V1_QL75_UX820_.jpg', 
          rating: 8 
        }
  ]);

  const [filter, setFilter] = useState({
    title: '',
    rating: 0,
  });

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filter.title.toLowerCase()) &&
      movie.rating >= filter.rating
  );

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  return (
    <div>
      <Filter setFilter={setFilter} />
      <button className='movie' onClick={() => addMovie({ title: 'New Movie', description: '...', posterURL: '...', rating: 5 })}>
        Add New Movie
      </button>
      <div className="movies-list">
        {filteredMovies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
