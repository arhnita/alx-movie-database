import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import MovieCard from './components/MovieCard';
import MovieDetails from './components/MovieDetails';
import ErrorMessage from './components/ErrorMessage';
import Loading from './components/Loading';
import Pagination from './components/Pagination';
import FilterSort from './components/FilterSort';
import ThemeToggle from './components/ThemeToggle';
import { searchMovies, getMovieDetails } from './services/movieService';

function App() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const resultsPerPage = 10;

  // Filter and sort state
  const [sortBy, setSortBy] = useState('relevance');
  const [filterYear, setFilterYear] = useState('');
  const [filterType, setFilterType] = useState('');

  // View state
  const [viewMode, setViewMode] = useState('search'); // 'search' or 'favorites'

  // Load favorites
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const loadFavorites = () => {
      const saved = JSON.parse(localStorage.getItem('favorites') || '[]');
      setFavorites(saved);
    };

    loadFavorites();

    // Listen for storage changes (from other tabs)
    window.addEventListener('storage', loadFavorites);
    // Listen for custom event (from same tab)
    window.addEventListener('favoritesChanged', loadFavorites);

    return () => {
      window.removeEventListener('storage', loadFavorites);
      window.removeEventListener('favoritesChanged', loadFavorites);
    };
  }, []);

  // Apply filters and sorting
  useEffect(() => {
    let result = viewMode === 'favorites' ? favorites : movies;

    // Apply filters
    if (filterYear) {
      result = result.filter(movie => movie.Year.includes(filterYear));
    }
    if (filterType) {
      result = result.filter(movie => movie.Type === filterType);
    }

    // Apply sorting
    if (sortBy !== 'relevance') {
      result = [...result].sort((a, b) => {
        switch (sortBy) {
          case 'year-desc':
            return parseInt(b.Year) - parseInt(a.Year);
          case 'year-asc':
            return parseInt(a.Year) - parseInt(b.Year);
          case 'title-asc':
            return a.Title.localeCompare(b.Title);
          case 'title-desc':
            return b.Title.localeCompare(a.Title);
          default:
            return 0;
        }
      });
    }

    setFilteredMovies(result);
  }, [movies, favorites, sortBy, filterYear, filterType, viewMode]);

  const handleSearch = async (query) => {
    if (!query.trim()) return;

    setSearchQuery(query);
    setLoading(true);
    setError(null);
    setViewMode('search');
    setCurrentPage(1);

    try {
      const data = await searchMovies(query);
      const searchResults = data.Search || [];

      // Filter out duplicate movies by imdbID
      const uniqueMovies = searchResults.filter((movie, index, self) =>
        index === self.findIndex((m) => m.imdbID === movie.imdbID)
      );

      setMovies(uniqueMovies);
      setTotalResults(parseInt(data.totalResults) || 0);
    } catch (err) {
      setError(err.message || 'Failed to fetch movies. Please try again.');
      setMovies([]);
      setTotalResults(0);
    } finally {
      setLoading(false);
    }
  };

  const handleMovieClick = async (id) => {
    setLoading(true);
    setError(null);

    try {
      const data = await getMovieDetails(id);
      setSelectedMovie(data);
    } catch (err) {
      setError(err.message || 'Failed to fetch movie details. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleViewMode = () => {
    setViewMode(viewMode === 'search' ? 'favorites' : 'search');
    setCurrentPage(1);
  };

  // Paginate filtered movies
  const paginatedMovies = filteredMovies.slice(
    (currentPage - 1) * resultsPerPage,
    currentPage * resultsPerPage
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <ThemeToggle />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Movie Database
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Search and explore movies from around the world
          </p>
        </header>

        {/* View Toggle */}
        <div className="flex justify-center mb-6">
          <button
            onClick={toggleViewMode}
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            {viewMode === 'search' ? (
              <>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  />
                </svg>
                View Favorites ({favorites.length})
              </>
            ) : (
              <>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                Back to Search
              </>
            )}
          </button>
        </div>

        {/* Search Bar */}
        {viewMode === 'search' && <SearchBar onSearch={handleSearch} />}

        {/* Filter and Sort */}
        {(filteredMovies.length > 0 || viewMode === 'favorites') && (
          <FilterSort
            sortBy={sortBy}
            onSortChange={setSortBy}
            filterYear={filterYear}
            onYearChange={setFilterYear}
            filterType={filterType}
            onTypeChange={setFilterType}
          />
        )}

        {/* Loading State */}
        {loading && <Loading />}

        {/* Error Message */}
        {error && <ErrorMessage message={error} />}

        {/* Movies Grid */}
        {!loading && !error && filteredMovies.length > 0 && (
          <>
            <div className="mb-4 text-center text-gray-600 dark:text-gray-400">
              {viewMode === 'favorites'
                ? `Showing ${filteredMovies.length} favorite${filteredMovies.length !== 1 ? 's' : ''}`
                : `Found ${totalResults} result${totalResults !== 1 ? 's' : ''} for "${searchQuery}"`
              }
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
              {paginatedMovies.map((movie) => (
                <MovieCard
                  key={movie.imdbID}
                  movie={movie}
                  onClick={handleMovieClick}
                />
              ))}
            </div>

            {/* Pagination */}
            <Pagination
              currentPage={currentPage}
              totalResults={viewMode === 'favorites' ? filteredMovies.length : totalResults}
              resultsPerPage={resultsPerPage}
              onPageChange={handlePageChange}
            />
          </>
        )}

        {/* No Results */}
        {!loading && !error && viewMode === 'search' && searchQuery && movies.length === 0 && (
          <div className="text-center mt-12">
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              No movies found for "{searchQuery}". Try a different search term.
            </p>
          </div>
        )}

        {/* Empty Favorites */}
        {!loading && viewMode === 'favorites' && favorites.length === 0 && (
          <div className="text-center mt-12">
            <svg
              className="w-24 h-24 mx-auto text-gray-400 dark:text-gray-600 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              No favorites yet. Start adding movies to your favorites!
            </p>
          </div>
        )}

        {/* Welcome Message */}
        {!loading && !searchQuery && viewMode === 'search' && (
          <div className="text-center mt-12">
            <svg
              className="w-24 h-24 mx-auto text-gray-400 dark:text-gray-600 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
              />
            </svg>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Search for your favorite movies to get started
            </p>
          </div>
        )}
      </div>

      {/* Movie Details Modal */}
      {selectedMovie && (
        <MovieDetails movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
      )}
    </div>
  );
}

export default App;
