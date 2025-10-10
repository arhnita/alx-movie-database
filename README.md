# Movie Database

A modern, feature-rich movie database application built with React, Vite, and Tailwind CSS. Search for movies, view detailed information, manage favorites, and enjoy a responsive design with dark mode support.

![Movie Database](https://img.shields.io/badge/React-19.1-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-7.1-646CFF?logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?logo=tailwind-css)

## Features

### Core Features
- **Movie Search**: Search for movies by title using the OMDB API
- **Detailed Information**: View comprehensive details including:
  - Plot summary
  - Cast and crew
  - Ratings from multiple sources (IMDB, Rotten Tomatoes, Metacritic)
  - Genre, release date, runtime
  - Awards, box office, and more
- **Responsive Design**: Fully responsive layout optimized for desktop, tablet, and mobile
- **Error Handling**: User-friendly error messages for network issues and invalid queries

### Advanced Features
- **Favorites List**: Add movies to a personal favorites list (stored in localStorage)
- **Pagination**: Navigate through search results with an intuitive pagination system
- **Sorting & Filtering**:
  - Sort by relevance, year, or title
  - Filter by type (movies, TV series, episodes)
  - Filter by year
- **Dark/Light Theme**: Toggle between light and dark modes with system preference detection
- **Smooth Animations**: Polished UI with fade-in animations and transitions

## Tech Stack

- **React** (v19.1) - UI library
- **Vite** (v7.1) - Build tool and dev server
- **Tailwind CSS** (v3.4) - Utility-first CSS framework
- **OMDB API** - Movie data source

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- OMDB API key (get one at [http://www.omdbapi.com/apikey.aspx](http://www.omdbapi.com/apikey.aspx))

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd alx-movie-database
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory:
   ```bash
   cp .env.example .env
   ```

   Open `.env` and add your OMDB API key:
   ```env
   VITE_OMDB_API_KEY=your_api_key_here
   ```

### Development

Start the development server:
```bash
npm run dev
```

Visit `http://localhost:5173` to view the application.

### Build for Production

Create an optimized production build:
```bash
npm run build
```

Preview the production build locally:
```bash
npm run preview
```

## Project Structure

```
alx-movie-database/
├── src/
│   ├── components/          # React components
│   │   ├── SearchBar.jsx    # Search input component
│   │   ├── MovieCard.jsx    # Movie list item
│   │   ├── MovieDetails.jsx # Movie detail modal
│   │   ├── ErrorMessage.jsx # Error display
│   │   ├── Loading.jsx      # Loading spinner
│   │   ├── Pagination.jsx   # Pagination controls
│   │   ├── FilterSort.jsx   # Filter and sort controls
│   │   ├── ThemeToggle.jsx  # Dark/light mode toggle
│   │   └── FavoriteButton.jsx # Add to favorites button
│   ├── services/            # API integration
│   │   └── movieService.js  # OMDB API calls
│   ├── App.jsx              # Main application component
│   ├── main.jsx             # Application entry point
│   └── index.css            # Global styles with Tailwind
├── .env.example             # Environment variables template
├── tailwind.config.js       # Tailwind configuration
├── vite.config.js           # Vite configuration
└── package.json             # Project dependencies
```

## Usage Guide

### Searching for Movies
1. Enter a movie title in the search bar
2. Press Enter or click the Search button
3. Browse through the search results

### Viewing Movie Details
1. Click on any movie card to view detailed information
2. The details modal displays plot, cast, ratings, and more
3. Click the X button or outside the modal to close

### Managing Favorites
1. Click the heart icon on any movie card to add/remove from favorites
2. Click "View Favorites" button to see your saved movies
3. Favorites are stored locally and persist between sessions

### Filtering and Sorting
1. Use the Sort By dropdown to organize results:
   - Relevance (default)
   - Year (newest/oldest first)
   - Title (A-Z or Z-A)
2. Filter by Type (movies, TV series, episodes)
3. Filter by Year (past 50 years)

### Theme Toggle
- Click the sun/moon icon in the top-right corner to switch themes
- The app respects your system's dark mode preference by default
- Your theme choice is saved locally

## API Reference

This project uses the [OMDB API](http://www.omdbapi.com/):

- **Search Endpoint**: `http://www.omdbapi.com/?apikey=[key]&s=[query]`
- **Details Endpoint**: `http://www.omdbapi.com/?apikey=[key]&i=[imdb_id]&plot=full`

### Rate Limits
- Free tier: 1,000 daily requests
- For higher limits, consider upgrading your OMDB API plan

## Deployment

### Netlify

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set the build command: `npm run build`
4. Set the publish directory: `dist`
5. Add environment variable: `VITE_OMDB_API_KEY=your_api_key`
6. Deploy!

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project directory
3. Follow the prompts
4. Add environment variable in Vercel dashboard: `VITE_OMDB_API_KEY`
5. Redeploy with `vercel --prod`

## Features Implemented

- [x] Movie search with OMDB API
- [x] Display movie posters, titles, and release dates
- [x] Detailed movie view with plot, cast, and ratings
- [x] Genre and type information
- [x] Responsive UI with Tailwind CSS
- [x] Error handling for API failures
- [x] Favorites list with localStorage
- [x] Pagination for search results
- [x] Sorting by year and title
- [x] Filtering by genre and year
- [x] Light/dark theme toggle
- [x] Smooth animations and transitions

## Future Enhancements

- [ ] Movie trailers integration (YouTube API)
- [ ] Multi-language support (i18n)
- [ ] Advanced search filters (genre, rating, decade)
- [ ] User reviews and ratings
- [ ] Watchlist feature
- [ ] Export favorites as JSON
- [ ] Share movie links
- [ ] Offline support with Service Workers

## Troubleshooting

### API Key Issues
**Problem**: "Failed to fetch movies" error
**Solution**:
1. Verify your API key is correct in `.env`
2. Ensure the variable name is `VITE_OMDB_API_KEY`
3. Restart the dev server after changing `.env`
4. Check that your API key is activated (may take a few minutes)

### Build Errors
**Problem**: Build fails with module errors
**Solution**:
1. Delete `node_modules` and `package-lock.json`
2. Run `npm install` again
3. Clear Vite cache: `rm -rf node_modules/.vite`

### No Search Results
**Problem**: Search returns no results
**Solution**:
1. Try different search terms (use full movie titles)
2. Check the OMDB API status
3. Verify you haven't exceeded API rate limits

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Acknowledgments

- [OMDB API](http://www.omdbapi.com/) for providing movie data
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [React](https://react.dev/) for the component-based UI library
- [Vite](https://vitejs.dev/) for the blazing-fast build tool

## Author

ALX Frontend Development Capstone Project

---

**Happy movie browsing! 🎬🍿**
