const MovieCard = ({ movie, onClick }) => {
  const posterUrl = movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450?text=No+Poster';

  return (
    <div
      onClick={() => onClick(movie.imdbID)}
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform hover:scale-105 hover:shadow-xl"
    >
      <img
        src={posterUrl}
        alt={movie.Title}
        className="w-full h-80 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
          {movie.Title}
        </h3>
        <div className="flex justify-between text-sm text-gray-600">
          <span>{movie.Year}</span>
          <span className="capitalize">{movie.Type}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
