const MovieDetails = ({ movie, onClose }) => {
  const posterUrl = movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450?text=No+Poster';

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto">
      <div className="bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white dark:bg-gray-800 border-b dark:border-gray-700 px-6 py-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">{movie.Title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 text-2xl font-bold"
          >
            &times;
          </button>
        </div>

        <div className="p-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-1">
              <img
                src={posterUrl}
                alt={movie.Title}
                className="w-full rounded-lg shadow-lg"
              />
            </div>

            <div className="md:col-span-2 space-y-4">
              <div>
                <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase mb-1">Plot</h3>
                <p className="text-gray-700 dark:text-gray-300">{movie.Plot}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase mb-1">Director</h3>
                  <p className="text-gray-700 dark:text-gray-300">{movie.Director}</p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase mb-1">Released</h3>
                  <p className="text-gray-700 dark:text-gray-300">{movie.Released}</p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase mb-1">Runtime</h3>
                  <p className="text-gray-700 dark:text-gray-300">{movie.Runtime}</p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase mb-1">Genre</h3>
                  <p className="text-gray-700 dark:text-gray-300">{movie.Genre}</p>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase mb-1">Cast</h3>
                <p className="text-gray-700 dark:text-gray-300">{movie.Actors}</p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase mb-1">Writer</h3>
                <p className="text-gray-700 dark:text-gray-300">{movie.Writer}</p>
              </div>

              {movie.Ratings && movie.Ratings.length > 0 && (
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase mb-2">Ratings</h3>
                  <div className="space-y-2">
                    {movie.Ratings.map((rating, index) => (
                      <div key={index} className="flex justify-between items-center bg-gray-50 dark:bg-gray-700 p-2 rounded">
                        <span className="text-gray-600 dark:text-gray-300">{rating.Source}</span>
                        <span className="font-semibold text-gray-800 dark:text-gray-200">{rating.Value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase mb-1">Language</h3>
                  <p className="text-gray-700 dark:text-gray-300">{movie.Language}</p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase mb-1">Country</h3>
                  <p className="text-gray-700 dark:text-gray-300">{movie.Country}</p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase mb-1">Awards</h3>
                  <p className="text-gray-700 dark:text-gray-300">{movie.Awards}</p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase mb-1">Box Office</h3>
                  <p className="text-gray-700 dark:text-gray-300">{movie.BoxOffice || 'N/A'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
