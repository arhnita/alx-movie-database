import { useState } from 'react';
import FavoriteButton from './FavoriteButton';

const MovieCard = ({ movie, onClick }) => {
  const [imageError, setImageError] = useState(false);
  const posterUrl = movie.Poster !== 'N/A' ? movie.Poster : null;

  return (
    <div
      onClick={() => onClick(movie.imdbID)}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform hover:scale-105 hover:shadow-xl relative animate-fade-in"
    >
      <FavoriteButton movie={movie} />
      {posterUrl && !imageError ? (
        <img
          src={posterUrl}
          alt={movie.Title}
          className="w-full h-80 object-cover"
          onError={() => setImageError(true)}
        />
      ) : (
        <div className="w-full h-80 bg-gradient-to-br from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-700 flex items-center justify-center">
          <div className="text-center p-4">
            <svg
              className="w-24 h-24 mx-auto text-gray-500 dark:text-gray-400 mb-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <p className="text-gray-600 dark:text-gray-300 font-medium">No Poster Available</p>
          </div>
        </div>
      )}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2 line-clamp-2">
          {movie.Title}
        </h3>
        <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
          <span>{movie.Year}</span>
          <span className="capitalize">{movie.Type}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
